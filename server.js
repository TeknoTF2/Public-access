const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const BLOCKED = new Set(['readme.md', 'image_manifest.txt', 'server.js', 'package.json', 'package-lock.json', 'railway.json', '.gitignore', 'dockerfile']);

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

function send(res, status, body, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
  res.end(body);
}

function isInsideRoot(target) {
  const rel = path.relative(ROOT, target);
  return rel && !rel.startsWith('..') && !path.isAbsolute(rel);
}

const server = http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  } catch {
    return send(res, 400, 'Bad Request');
  }

  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const requested = path.normalize(path.join(ROOT, urlPath));

  if (requested !== ROOT && !isInsideRoot(requested)) {
    return send(res, 403, 'Forbidden');
  }

  const base = path.basename(requested).toLowerCase();
  if (BLOCKED.has(base)) {
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
});
