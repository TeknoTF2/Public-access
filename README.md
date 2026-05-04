# Public-access — Deep Lake ARG (GM Reference)

> **SPOILERS — KEEP PRIVATE.** This file is the GM/runner index for the ARG.
> It contains every site, every search alias, every hidden IP, the
> localStorage layout, and known bug fixes. Do not deploy this file to a
> public host that players have access to. Either keep the repo private
> or strip `README.md` from the deploy artifact.

---

## How the gateway works

Players land on `index.html` (a 2004-style fake Google). They cannot
reach any in-universe site by guessing filenames — the only way in is to
type something the gateway recognizes into the search box.

Matching is fuzzy: the input is lowercased and stripped down to
`[a-z0-9]` before comparison, so the player can use any combination of
spaces, dashes, capitalization, or punctuation. For example, all of
these resolve to `jakes-page.html`:

- `Jakes page`
- `jakes-page`
- `JAKESPAGE`
- `jake's page`

On a hit, the gateway redirects to the site. On a miss it shows a
period-accurate "did not match any documents" page.

The full alias list lives in the `SITES` array near the top of
`index.html` — edit there to add aliases, sites, or hidden IPs.

---

## Public site index

| Display name              | File                  | In-universe URL                          | Search aliases (any of these → match) |
| ------------------------- | --------------------- | ---------------------------------------- | ------------------------------------- |
| Deep Lake, Oregon         | `deeplakoregon.html`  | www.deeplakoregon.com                    | `deeplakeoregon`, `deeplakeoregoncom`, `deeplake`, `deeplakcity`, `deeplakeoregonofficial`, `deeplakoregon`, `cityofdeeplake`, `deeplakeoregonofficialwebsite` |
| TV Odyssey Fans           | `tvodysseyfans.html`  | www.tvodysseyfans.net                    | `tvodysseyfans`, `tvodysseyfansnet`, `tvodyssey`, `tvodysseyfanforum`, `tvodysseyforum`, `odysseyfans`, `tvodysseyfanssite` |
| Find The Light            | `findthelight.html`   | www.findthelight.org                     | `findthelight`, `findthelightorg`, `findthelightdeeplake`, `findlight` |
| Oregon Property Records   | `propertyrecords.html`| records.oregon.gov/property              | `oregonpropertyrecords`, `propertyrecords`, `oregonpropertyrecordsgov`, `oregonproperty`, `propertyrecordsoregon`, `oregonparcelrecords` |
| Deep Lake Public Library  | `library.html`        | www.deeplakelibrary.org                  | `deeplakelibrary`, `deeplakepubliclibrary`, `deeplakelibraryorg`, `deeplakelib`, `library`, `publiclibrarydeeplake` |
| Jake's Deep Lake Page     | `jakes-page.html`     | www.geocities.com/Heartland/Meadows/4412/| `jakespage`, `jakesdeeplakepage`, `jakeshomepage`, `jakegeocities`, `jakespageontheweb`, `jakeshome` |
| WDLK-TV                   | `wdlk-tv.html`        | www.wdlk-tv.com                          | `wdlktv`, `wdlk`, `wdlktvcom`, `wdlktelevision`, `wdlkstation`, `wdlktvdeeplake`, `wdlktvodyssey` |

In addition, every public site also resolves on its bare slug (e.g.
typing the literal `deeplakoregon` or `wdlk-tv` works). Aliases above
are supplements for natural-language guesses.

---

## Hidden / IP-only sites (do not give to players directly)

These pages are intentionally **not** in the search index. They do not
have search aliases. The only way in is for the player to learn the
LAN IP from in-fiction content (a clue dropped in another site) and
type that exact IP into the gateway.

| File                    | In-universe identity              | Gateway IP (player must type) | Hook                                                                                |
| ----------------------- | --------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------- |
| `ccsb-internal.html`    | CCSB Internal Account Management  | **`192.168.4.27`**            | Local-bank intranet. Gated by an employee-login screen (username `Dale Rourke`, PIN `1984` — his WDLK Tech Director hire year, learnable from `wdlk-tv.html#staff`). Account history, audit log, flagged accounts (R. Calloway, Lakeview Holdings, Mountain Creamery, D. Rourke, H. Wentworth, 847 Lakeshore Mortgage). Admin contact `d.rourke@ccsb.local`. |
| `wdlk-terminal.html`    | WDLK-SYS terminal                 | **`10.0.14.182`**             | Boot screen → login (`Raymond Calloway` / `4178`) → fake desktop with error dialogs and Notepad → typing `odyssey` in Notepad triggers "ACCESS GRANTED" → real desktop with two icons: **Files** (in-terminal explorer over `C:\KIOSK-03\` — DOCS\\ contains 18 TXT memos/reports + ACCESS.LOG) and **Local Server** (opens `kids-zone.html` in a new tab). |
| `kids-zone.html`        | TV Odyssey Kids Zone (localhost)  | (terminal-only)               | Bright-yellow 90s-playspace site mirrored locally on KIOSK-03. Three tabs: Home, Chat (Mr. Know It All, Madame Claire), Games (Captain Planet Saves the Day, Escape Basement World). Game and chat targets are stubs (`kids-zone-*.html`) to be filled in later. **Reachable only via the terminal's Local Server icon** — not in the gateway search index. |

Variations of these IPs that would also resolve (because of the
normalization rule that strips non-alphanumerics): `192.168.4.27`,
`192 168 4 27`, `192-168-4-27`, `192168427` — all equivalent. Same for
`10.0.14.182`. **Players will not stumble onto these by typing
something else** — the keys are exact-match-only.

### Where to seed the IPs in-fiction

When you decide to gate progress on these, drop the IPs as clues in:
- **`192.168.4.27`** — likely surfaced via Find The Light (scanned
  documents / evidence photo 3) or via a stray reference in a property
  record. Pick whichever fits your players' current path.
- **`10.0.14.182`** — likely surfaced from inside the CCSB intranet
  (so the order is CCSB → WDLK terminal), or from the deleted
  VHStracker thread snippet on TV Odyssey Fans.

---

## Local storage / bookmarks system

- **Key**: `arg_bookmarks_v1`
- **Value**: JSON array of slug strings, most-recently-visited first,
  deduped, capped at 20 entries.
- Every site (public **and** hidden) writes its own slug into this
  list on page load via a small inline `<script>` near the bottom of
  its `<head>`.
- The gateway reads this list and renders a yellow Bookmarks bar at
  the very top of `index.html` with one-click links. Hidden sites
  appear in the bookmarks bar by their **IP** (e.g. `192.168.4.27`),
  not their filename, to keep the in-universe feel.
- A `clear` link on the right of the bar wipes the list.
- Local storage is per-browser. If a player switches devices they'll
  re-discover everything, which is usually what you want for an ARG.

To wipe a player's progress for a fresh playtest, run in DevTools
console on the gateway page:

```js
localStorage.removeItem('arg_bookmarks_v1')
```

---

## Image asset folder

All site images live in `images/` so every page can use the same
`<img src="images/foo.jpg">` references. Filenames are listed in
`IMAGE_MANIFEST.txt`. Missing images degrade gracefully to labeled
CSS placeholders thanks to the `onerror` handlers already on each
`<img>`.

---

## Known bug fixes

- **TV Odyssey Fans — "Recent Threads" goes blank after opening a
  thread and switching tabs.** Root cause: `showThread()` set the
  thread list to `display:none`, but `showTab()` only hid open thread
  views without restoring the list. Fix: `showTab()` now also resets
  `#thread-list` to `display:block` whenever a tab activates.
  (`tvodysseyfans.html`)

---

## File layout

```
index.html              Gateway (2004-Google search + bookmarks bar)
README.md               This file (GM only)
IMAGE_MANIFEST.txt      Asset list with descriptions
images/                 All site image assets

deeplakoregon.html      Public site
findthelight.html       Public site
jakes-page.html         Public site
library.html            Public site
propertyrecords.html    Public site
tvodysseyfans.html      Public site
wdlk-tv.html            Public site

ccsb-internal.html      HIDDEN — IP 192.168.4.27
wdlk-terminal.html      HIDDEN — IP 10.0.14.182
```
