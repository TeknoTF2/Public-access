const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const BLOCKED_FILES = new Set(['image_manifest.txt', 'server.js', 'package.json', 'package-lock.json', 'railway.json', '.gitignore', 'dockerfile']);
const BLOCKED_EXTS = new Set(['.md']);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm':  'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt':  'text/plain; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.mp3':  'audio/mpeg',
  '.mp4':  'video/mp4',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.otf':  'font/otf',
};

// ===== Chatbot config =====
// Default to Sonnet 4.6 for character/imagery quality and prompt caching
// (the ~3K-token character prompts clear Sonnet 4.6's 2048-token cache
// minimum, so repeat turns are cheap). Override with ANTHROPIC_MODEL
// (e.g. claude-haiku-4-5 for cheaper, faster but less nuanced).
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const CHAT_MAX_TOKENS = parseInt(process.env.CHAT_MAX_TOKENS || '1024', 10);
const CHAT_MAX_TURNS = parseInt(process.env.CHAT_MAX_TURNS || '60', 10);
const CHAT_MAX_BODY_BYTES = 64 * 1024;
const CHAT_RATE_WINDOW_MS = 60 * 1000;
const CHAT_RATE_MAX = parseInt(process.env.CHAT_RATE_MAX || '30', 10);

// Load each character's system prompt from its markdown file at startup.
// Extracts the first triple-backtick block from the file as the prompt.
const SYSTEM_PROMPT_FILES = {
  knowitall: 'kids site/Mr. know it all prompt.md',
  claire:    'kids site/claire_revised_prompt.md',
};
const SYSTEM_PROMPTS = {};
for (const [character, file] of Object.entries(SYSTEM_PROMPT_FILES)) {
  try {
    const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
    const match = content.match(/```\s*\n([\s\S]*?)\n```/);
    SYSTEM_PROMPTS[character] = match ? match[1] : null;
    if (!SYSTEM_PROMPTS[character]) {
      console.warn(`No fenced prompt block found in ${file}; chatbot ${character} disabled.`);
    }
  } catch (e) {
    console.warn(`Could not load prompt for ${character}: ${e.message}`);
    SYSTEM_PROMPTS[character] = null;
  }
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  res.end(body);
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function isInsideRoot(target) {
  const rel = path.relative(ROOT, target);
  return rel && !rel.startsWith('..') && !path.isAbsolute(rel);
}

// ===== Per-IP rate limit (sliding window, in-memory) =====
const rateLimitMap = new Map();
function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (typeof xff === 'string' && xff.length > 0) return xff.split(',')[0].trim();
  return req.socket.remoteAddress || 'unknown';
}
function rateLimitOk(ip) {
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) || []).filter(t => now - t < CHAT_RATE_WINDOW_MS);
  if (recent.length >= CHAT_RATE_MAX) {
    rateLimitMap.set(ip, recent);
    return false;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of rateLimitMap) {
    const recent = times.filter(t => now - t < CHAT_RATE_WINDOW_MS);
    if (recent.length === 0) rateLimitMap.delete(ip);
    else rateLimitMap.set(ip, recent);
  }
}, 5 * 60 * 1000).unref();

// ===== /api/chat =====
async function callClaude(systemPrompt, messages) {
  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL,
      max_tokens: CHAT_MAX_TOKENS,
      system: [
        {
          type: 'text',
          text: systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages,
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text();
    const err = new Error(`Anthropic API ${resp.status}: ${errText.slice(0, 400)}`);
    err.status = resp.status;
    throw err;
  }

  const data = await resp.json();
  const textBlocks = (data.content || []).filter(b => b && b.type === 'text');
  return {
    reply: textBlocks.map(b => b.text).join('').trim(),
    usage: data.usage || null,
    stop_reason: data.stop_reason || null,
  };
}

function handleChat(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { error: 'method_not_allowed', message: 'POST only.' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return sendJson(res, 503, {
      error: 'service_unavailable',
      message: 'The chat service is not configured. Ask the runner to set ANTHROPIC_API_KEY.',
    });
  }

  const ip = getClientIp(req);
  if (!rateLimitOk(ip)) {
    return sendJson(res, 429, {
      error: 'rate_limit',
      message: 'You\'re sending messages too quickly. Take a breath and try again in a moment.',
    });
  }

  let body = '';
  let aborted = false;
  req.on('data', chunk => {
    if (aborted) return;
    body += chunk;
    if (body.length > CHAT_MAX_BODY_BYTES) {
      aborted = true;
      sendJson(res, 413, { error: 'too_large' });
      req.destroy();
    }
  });

  req.on('end', async () => {
    if (aborted) return;

    let parsed;
    try { parsed = JSON.parse(body); }
    catch { return sendJson(res, 400, { error: 'bad_json' }); }

    const character = parsed && parsed.character;
    const messages  = parsed && parsed.messages;

    const systemPrompt = SYSTEM_PROMPTS[character];
    if (!systemPrompt) {
      return sendJson(res, 400, { error: 'unknown_character', message: `Unknown or unconfigured character: ${character}` });
    }
    if (!Array.isArray(messages) || messages.length === 0) {
      return sendJson(res, 400, { error: 'no_messages' });
    }
    for (const m of messages) {
      if (!m || typeof m !== 'object' ||
          !(m.role === 'user' || m.role === 'assistant') ||
          typeof m.content !== 'string') {
        return sendJson(res, 400, { error: 'bad_message_shape' });
      }
    }
    if (messages[0].role !== 'user') {
      return sendJson(res, 400, { error: 'first_message_must_be_user' });
    }

    const trimmed = messages.slice(-CHAT_MAX_TURNS);

    try {
      const result = await callClaude(systemPrompt, trimmed);
      sendJson(res, 200, result);
    } catch (e) {
      console.error(`[chat:${character}]`, e.message);
      sendJson(res, 502, { error: 'upstream', message: 'The character lost the connection. Try again.' });
    }
  });

  req.on('error', () => {
    if (!aborted) sendJson(res, 400, { error: 'bad_request' });
  });
}

// ===== HTTP server =====
const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  } catch {
    return send(res, 400, 'Bad Request');
  }

  if (urlPath === '/api/chat') {
    return handleChat(req, res);
  }

  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const requested = path.normalize(path.join(ROOT, urlPath));

  if (requested !== ROOT && !isInsideRoot(requested)) {
    return send(res, 403, 'Forbidden');
  }

  const base = path.basename(requested).toLowerCase();
  const baseExt = path.extname(requested).toLowerCase();
  if (BLOCKED_FILES.has(base) || BLOCKED_EXTS.has(baseExt)) {
    return send(res, 404, 'Not Found');
  }

  fs.stat(requested, (err, stats) => {
    if (err || !stats.isFile()) {
      return send(res, 404, 'Not Found');
    }
    const ext = path.extname(requested).toLowerCase();
    const type = MIME[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': stats.size,
      'Cache-Control': 'public, max-age=300',
    });
    fs.createReadStream(requested).pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Public-access static server listening on http://${HOST}:${PORT}`);
  const loaded = Object.entries(SYSTEM_PROMPTS).filter(([, p]) => p).map(([k]) => k);
  console.log(`Chat characters loaded: ${loaded.join(', ') || '(none)'}`);
  console.log(`Chat model: ${ANTHROPIC_MODEL}` + (process.env.ANTHROPIC_API_KEY ? '' : ' (NOTE: ANTHROPIC_API_KEY unset — /api/chat will return 503)'));
});
