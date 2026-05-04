# Deep Lake ARG — GM Lore & Canon Reference

> **GM-ONLY. SPOILERS THROUGHOUT. DO NOT DEPLOY.**
> The bundled static server (`server.js`) blocks all `.md` files from
> being served, but treat this document as you would `README.md`:
> never link it from a player-facing surface, never paste excerpts into
> player Discord/Slack, and strip it from any production artifact.

This document captures everything currently established as canon across
the seven public sites and two hidden sites. It's organized so a new GM
can read top-to-bottom and run sessions without having to mine the HTML
themselves. When sources contradict each other, the contradiction is
flagged — these are *not* mistakes to fix, they're places where the GM
must make a call (or feed players the discrepancy as a clue).

---

## 1. The pitch in one paragraph

Deep Lake is a small Cascade-Range town in Oregon. From 1984 to 1996,
an unlicensed UHF station ("WDLK-TV / TV Odyssey", channel 34)
broadcast original programming exclusively to the town. The station
went dark in mid-1996 under a fictitious "fire" that never happened.
Eight years later, the building is sealed but maintained, the tower
still draws power, ~$300k/year flows through a Delaware shell, and
nine consecutive owners of one specific lakeside house have vanished
without a single police report. Players investigate via a 2004-style
gateway (`index.html`) and gradually discover that the kids who
watched TV Odyssey can't remember their own childhoods — and that the
people running the cleanup are still running it.

---

## 2. Cast of characters

### 2.1 Raymond Eugene "Ray" Calloway — the puppet
- DOB on file: **11/03/1944**. SSN ***-**-4178.
- "Station Manager" 1991–present (signs on utility bills from 1991;
  no record of him before that).
- **Identity is fictitious.** Bank's 2003 audit (RF-0041) found:
  - SSN returns "no record found" from the SSA.
  - Oregon DMV has no driver's license under that name.
  - Cascade County has no birth, death, marriage, or property records
    for any Calloway prior to 1991.
  - No photo on file at the bank.
  - No phone-book listing 1982–1996.
- Address on file at CCSB: **14200 Route 7** (the station itself).
- Mailing address: **P.O. Box 1147, Wilmington, DE 19801** — same as
  Lakeview Holdings.
- Last in-person bank visit: **07/29/1996**. The WDLK-SYS desktop
  clock is frozen at **07/29/1996 11:58 PM** and `SCHED.DB` was
  deleted that night at 23:58:41. Whatever happened to Calloway, it
  happened that day.
- 12/01/2003, 03:17 AM: three failed remote logins to CCSB under user
  "R.CALLOWAY" using the WDLK Broadcasting payroll account number as
  the password. R.CALLOWAY has no employee credentials. **Someone is
  trying to log in as him from outside.**
- Forum admin staticfuzz's only personal memory: an open house at the
  station, a kneeling man with a name tag reading **RAY**, his face
  "very close", "cold running down spine", happy and not happy at
  once.

**GM read:** Ray Calloway is the public face of whatever ran TV
Odyssey. Whether he was ever a person, a composite, or a costume is a
GM choice — but every record consistent with him being real (driver's
license, SSN, birth certificate) does not exist outside of Deep Lake.

### 2.2 Dale Arthur "D." Rourke — the present-day fixer
- WDLK Technical Director **1984–1996**.
- CCSB Branch Manager (Deep Lake) since **09/01/1997**.
- Lives at **338 Spruce Street, Deep Lake**.
- Email: `d.rourke@ccsb.local`.
- Salary $62k/yr — but receives **$8,333.00/month wires from Capitol
  Services Inc.** (the same Delaware entity that funds Lakeview
  Holdings). Never disclosed.
- Holds Level 3 ("branch manager") clearance and has personally
  suppressed every CCSB compliance flag attached to Lakeview, Mountain
  Creamery, Calloway, the 847 Lakeshore mortgage chain, and his own
  conflict-of-interest flag.
- Approves Mountain Creamery's permits as the town's permit reviewer
  *and* serves as Mountain Creamery's registered agent at 120 Main
  Street (city hall address).
- 12/27/2003, 22:13: logs in from non-branch terminal IP **10.0.7.142**
  after hours, accesses RF-0041 and RF-0088. Adds a margin note to
  RF-0088 in his own hand: *"original from '96. re-sent per request.
  who requested??"* — Rourke is now also being managed by something
  upstream of him.

**GM read:** Rourke is the antagonist players are most likely to
actually meet. He is the cleanup arm. He is also scared.

### 2.3 Harold James Wentworth — the bought mayor
- **Mayor of Deep Lake** (elected 2000). Lives at 15 Elm Street.
- WDLK "Community Liaison" 1990–1996.
- 08/15/1996 (two weeks after TV Odyssey went off the air): one-time
  $34,000 wire from the WDLK payroll account, memo'd "Consulting —
  Community Liaison services." That account closed the following
  month. Wentworth used $33,500 of it as the down payment on his Elm
  Street home.
- His face appears on the official city site as a friendly mayor; the
  city site is otherwise scrubbed of anything pre-1997.

**GM read:** Wentworth knows. He was paid to know nothing in 1996,
and the money has not stopped working.

### 2.4 Marguerite "M." Hale — the witness who tried to publish
- WDLK **Programming Director 1984–1993**. Left mid-cycle.
- Wrote *Voices on the Air: A History of Local Broadcasting in
  Central Oregon* (Cascade Press, Bend OR, 1998). The Deep Lake
  Library has the only known copy.
- Status in the catalog: **CHECKED OUT, due 03/15/1999, 1,694 days
  overdue, borrower field BLANK, in-library use only.** Whoever took
  the book is not in the system.

**GM read:** Hale's book is a McGuffin. If players recover it, the GM
gets to write whatever Hale put in writing before she lost the option.
Recommended canon: she ID'd the carrier signal but stopped short of
naming the source.

### 2.5 Other WDLK staff (per the hidden `wdlk-tv.html#staff` page)
| Role | Name | Tenure |
|---|---|---|
| Station Manager | R. Calloway | 1991 — present |
| Technical Director | D. Rourke | 1984 — 1996 |
| Programming Director | M. Hale | 1984 — 1993 |
| Production | E. Vasquez | 1985 — 1996 |
| Production | K. Osei | 1988 — 1996 |
| Operations | T. Marsh | 1984 — 1996 |
| Community Liaison | H. Wentworth | 1990 — 1996 |

The page note: *"Original personnel files transferred to off-site
storage per directive RC-1996-001. Current status of former employees:
SEE SUPPLEMENTAL FILE S-7."* Supplemental File S-7 is referenced but
never shown — leave it as a hook. (Note: the schedule grid links to
S/T-7 from a lone Friday-midnight cell.)

**Dorothy Marsh** quoted in a 1993 *Deep Lake Gazette* clipping:
*"People just picked up and left. Didn't even say goodbye."* Likely
a relative of T. Marsh; both are neighbors to the disappearing
families.

### 2.6 Forum users (the people who can't forget)
All on `tvodysseyfans.net`, est. ~2001. 9 registered, 1 banned.

- **staticfuzz** — admin. Location: ??? in profile, but signature is
  the coordinates **42.7284, -121.7367** (Bly / Sprague River area,
  southern Oregon). Watched VHStracker's uploads before deleting them.
  Has the Ray-at-the-open-house memory.
- **nightowl_k** — Eugene OR. Researcher. Pulled FCC FOIA records,
  microfiche, county clerk's office, every paper trail. Found nothing.
- **cassie_d** — Sacramento. Channel-6-after-school-every-day. Her
  childhood is a single repeating memory of sitting in front of the
  TV. Therapist asked her about Deep Lake; she went blank.
- **oregonmike** — Bend OR, grew up Mill Creek Rd '85–'97.
- **deep_memory** — Boise ID, moved away 1994. Came out of a
  hypnotherapy session crying; therapist refused to take her back.
- **lakerunner88** — Portland OR. The one who keeps physically
  visiting the station and writing down license plates.
- **VHStracker** — **banned 03/12/2002**. Before he vanished, he
  posted that he entered the station via the rear loading dock,
  found racks of dated tapes in the basement (including one with a
  red sticker labeled `PRIVATE DO NOT AIR`), and noted *stairs going
  down past the tape storage*. He has not been heard from since the
  ban. His GeoCities page is gone, his email bounces. The loading
  dock has since been welded shut.

### 2.7 Gerald K. Pfister — the conspiracy site
Maintains `findthelight.org` since 1999 (page launched June 2002,
older versions implied). 22-year amateur radio operator. Lived 40
miles from Deep Lake, had a cousin in town in the early '90s who
"doesn't remember any of this anymore."

His three theories, in his confidence order:
1. (60%) MKULTRA-style subliminal programming via local TV.
2. (25%) Non-standard carrier-frequency emission piggybacking on the
   broadcast — the *signal* was the payload, the shows were cover.
3. (15%) Defense-contractor black site, programming was a byproduct.

His most actionable observation: the WDLK tower has at least three
dish-like arrays *aimed at the ground* — at Deep Lake itself. Players
who notice this also need to notice that the August 2003 anonymous
email Pfister received says: ***"Stop looking at the sky. Look at the
ground."***

**Recommended canon:** theory #2 is closest to truth. The broadcast
was a delivery vehicle; the "show" payload existed to be remembered,
the carrier under it existed to make the kids who watched *forget
everything else*.

### 2.8 The shells

- **Lakeview Holdings LLC** — Delaware, est. 1996. Registered agent
  Capitol Services Inc., 1675 S. State St, Dover DE. Listed
  "principal officer" R. Calloway, no signature card on file.
  Holds the WDLK building and (briefly) the factory. Owns:
  - **Acct 0034-2001** (Commercial Checking) — bal ~$1.25M.
    Receives $50,000/quarter from Capitol Services with no invoice.
  - **Acct 0034-2002** (Commercial Trust) — bal ~$734.5k. *No trust
    document on file. No beneficiary listed.* Check #0001 was
    written for $15,000 to "CASH" with no endorsement record.
- **Calloway Media Holdings LLC** — Oregon, registered 1981 by
  Raymond T. Calloway per nightowl_k's research on the forum.
  **Continuity flag:** property records and the bank only show
  Lakeview. Recommended canon: Calloway Media was the original 1981
  shell that owned the building until Lakeview Holdings rolled it
  up in '96 as part of the cleanup. Old name still surfaces in some
  county filings.
- **Capitol Services Inc.** — Dover DE; the upstream funder. Sends:
  - $50k/quarter → Lakeview checking
  - $25k/quarter → Lakeview trust ("MAINTENANCE")
  - $8,333/month → D. Rourke personal (~$100k/yr)
  - $4,200/month → Pembrook Technical Services
  - $400/year → R. Calloway personal
- **Mountain Creamery LLC** — Oregon, formed 01/07/2003. Managing
  Member: **N. Stokes**. Registered agent: D. Rourke. Three
  employees, ~$5k/mo payroll. Pays **$12,400/month** to an *unnamed*
  vendor for "SPECIALTY COMPOUND," cashier's checks picked up
  in person, mailed to **P.O. Box 1147, Wilmington, DE** — *the
  same P.O. box as Lakeview Holdings*. Mountain Creamery is a
  procurement front. What it actually buys is a hook for the GM.
- **Pembrook Technical Services** — receives $4,200/month from
  Lakeview. Contract is "RF-0091, no copy on file, reference only."
  Most likely the entity keeping the broadcast tower powered and the
  building physically maintained.

---

## 3. Properties & geography

| Address | Parcel / Role | Notes |
|---|---|---|
| **14200 Route 7** | WDLK-TV station, parcel 2847-0214-0300 | Single-story commercial. 180-ft tower with downward-pointing dish arrays. Lakeview Holdings since 08/01/1996. Power still drawn. Loading dock welded shut after VHStracker entered. **Per county records: no basement.** Per VHStracker: stairs going down past tape storage. |
| **14500 Route 7** | Mountain Creamery factory, parcel 2847-0215-0800 | Adjacent to the station. Was Deep Lake Agricultural Supply 1982–1989, county tax-forfeited 1989, dormant Lakeview shell 1996–2003, Mountain Creamery since 01/07/2003. |
| **847 Lakeshore Drive** | The cursed house, parcel 2847-0093-1200 | Originally R. Calloway sold quitclaim 02/28/1991 for $45,000 (assessed $165k). **Nine successive owners since 1993, every one defaulted, every one "BORROWERS MISSING," $1,190,000 written off, zero police referrals.** RF-0055 protocol: basement to be sealed prior to showing, resale only via CCSB, no external realtors. Current owners (Davis, since 09/14/2003) projected by the bank to vacate **June–November 2004**. |
| **340 Lakewood Drive** | Calloway's "home" per forum | The car parked outside the station in 2003-2004 was registered to this address. |
| **338 Spruce Street** | D. Rourke's house | Same street as the 1989 Find-The-Light "incident" family. |
| **15 Elm Street** | Mayor Wentworth's house | Bought 1997 with the WDLK payroll wire. |
| **120 Main Street** | City Hall | Also Mountain Creamery's registered-agent address. |
| **245 Oak Street** | Public Library | Holds the Hale book (overdue 1,694 days) and the *missing* 1991–1993 community newsletter volumes. |

**Town:** Population per the city site is ~4,200 ("with surrounding
rural"); per nightowl_k (forum) it's ~1,200 incorporated. Cascade
Range, Cascade County, central Oregon. **Cascade County is fictional**
— real Oregon has none. staticfuzz's coordinates put the town near
Bly / Sprague River, in real-world Klamath County. Treat Cascade
County as a fictional county between Klamath and Lake counties.

### 3.1 The two LAN IPs (hidden sites)
The hidden-site IPs are **only reachable by typing the IP into the
gateway search box.** They have no aliases and are not in the public
search index.

- **`192.168.4.27`** → `ccsb-internal.html`. CCSB (Cascade County
  Savings Bank) Deep Lake branch intranet. Logged in as D.ROURKE.
  The financial paper trail of the entire cover-up.
- **`10.0.14.182`** → `wdlk-terminal.html`. WDLK-SYS terminal. CRT
  fullscreen. Boots → asks for login → requires `Raymond Calloway`
  + PIN `4178` → desktop frozen at 07/29/1996 11:58 PM, every icon
  throws an error except Notepad. Typing any text containing
  "odyssey" in Notepad → ACCESS GRANTED → "ESTABLISHING CONNECTION
  TO REMOTE HOST..." (next layer is unwritten — see §6).

---

## 4. TV Odyssey programming

### 4.1 Public-canon schedule (final week, March 1997, per `wdlk-tv.html`)
| Time | Mon | Tue | Wed | Thu | Fri |
|---|---|---|---|---|---|
| 7 AM | Ranger Rick's Nature Hour | …same | …same | …same | …same |
| 8 AM | The Fridge Friends | …same | …same | …same | …same |
| 9 AM | The Puzzle Palace | Captain Cosmos | Puzzle Palace | Captain Cosmos | Puzzle Palace |
| 10 AM – 3 PM | OFF AIR | | | | |
| 3 PM | Captain Cosmos | Puzzle Palace | Captain Cosmos | Puzzle Palace | Movie Matinee |
| 4 PM | Fridge Friends | Fridge Friends | Fridge Friends | Fridge Friends | Movie Matinee |
| 5 PM | Deep Lake Community Hour | …same | …same | …same | Movie Matinee |
| 6 PM | Movie Matinee | Movie Matinee | Movie Matinee | Movie Matinee | Movie Matinee |
| 8 PM – 12 AM | OFF AIR | | | | |
| 12 AM Fri | — | — | — | — | **S/T-7** ← link |

The Friday-midnight `S/T-7` cell is a hidden link inside the
schedule and points at the (un-linked) staff page. "S-7" is also the
"Supplemental File" referenced beneath the staff list. Treat S-7 as
the in-fiction code name for the off-the-air programming and for the
files containing what happened to the staff in 1996.

### 4.2 Forum-recalled (un-listed) programs
Players will find these only via `tvodysseyfans.html`. **None of
these are in the schedule.** They aired off-book.

- **Basement World** / *The Basement* — live-action; a man trapped
  in an endlessly-descending office building. Beige carpet,
  fluorescent lights, ringing phones nobody is on, a woman facing
  away who never turns around. The man crying in a way that didn't
  feel like acting. Cassie's question: *did the building in the show
  look like the WDLK station?* deep_memory's answer: yes.
- **Mr. Halcyon** — slow-speaking puppet/costume host with a "big
  round head" who looks at the camera and says your name. Not
  literally yours, but it felt like it. Cassie still dreams about him.
- **Penny Loom** — animated show about a girl and a magical loom in
  her attic. Hand-drawn, professional-studio quality — far above any
  budget a public-access station could explain.
- **The Thin Place** — referenced, no other detail.
- **Under the Lake** — referenced as searched-for; no detail.

The **station ID jingle** is universally remembered as melody only.
Nobody remembers the lyrics. Players who hum it to relatives or in
public will get one of three reactions: nothing (didn't watch),
visible discomfort (watched, doesn't remember why), or anger.

### 4.3 Jake's GeoCities (`jakes-page.html`)
Last updated 07/14/1999. Jake was 16, a Deep Lake High sophomore,
liked Blink-182 and his dog Buster. He talks fondly about TV Odyssey
including **winning a station tour as a Puzzle Palace prize**. The
"Read About My Station Tour" link is broken ("404 Not Found"). His
final guestbook entry, dated **10/12/2003** (four years after the
page was last edited), is anonymous: *"Jake, please call me. — Mom"*

**GM read:** Jake is missing. His page is the saddest object in the
ARG — a kid who got the station tour as a prize and then evaporated
into static like everyone else.

---

## 5. Timeline (consolidated)

| Year | Event |
|---|---|
| 1979 | Building at 14200 Route 7 constructed (per county records, forum thread). |
| 1981 | "Calloway Media Holdings LLC" registered with Oregon SOS by Raymond T. Calloway. |
| 06/1982 | 14500 Route 7 sold to Deep Lake Agricultural Supply Co. |
| 09/1983 | *Deep Lake Gazette*: FCC application filed for low-power TV at channel 34, signed by Raymond Calloway / Lakeview Holdings. **No license is ever actually issued.** |
| 06/1983 | WDLK Broadcasting Inc. purchases 14200 Route 7 ($95,000 warranty deed). |
| 1984 | First TV Odyssey broadcasts. Rourke, Hale, Marsh start. |
| 1985 | Wentworth opens CCSB checking. Vasquez joins production. |
| 1987 | FOIA-confirmed government document referencing "Project" and "broadcast" (heavily redacted). Department [REDACTED]. |
| 1988 | Osei joins production. |
| 1989 | First reported Spruce-Street family "incident" (per Find The Light, details redacted, case closed in 48 hours). 14500 Route 7 tax-forfeited to Cascade County. |
| 1990 | Wentworth becomes WDLK Community Liaison. |
| 02/1991 | R. Calloway quitclaims 847 Lakeshore at $45k against $165k assessed value. |
| 03/1991 | "Ray Calloway" first appears: opens CCSB accounts with a $10k cashier's check; first appears on station utility bills. |
| 04/1993 | First mortgage default at 847 Lakeshore (Niles). Pattern begins. |
| 1993 | Three Deep Lake families relocate in same month, no forwarding addresses (Gazette). Hale leaves WDLK. |
| 1994 | Chen family buys 847 Lakeshore (will default and disappear). deep_memory moves out of Deep Lake. |
| 03/1996 | Town council "condemns structure" for "fire damage." No fire department record. No insurance claim. No news coverage. No inspection. |
| 03/15/1996 | Lakeview Holdings LLC (DE) takes 14500 Route 7 from county for $1 quitclaim. |
| 06/01/1996 | Lakeview Holdings opens CCSB accounts. **$2,000,000 wire** from First Bank of Delaware. |
| 07/29/1996 | R. Calloway's last in-person bank visit. WDLK-SYS desktop clock and `SCHED.DB` deletion both timestamped this date. |
| 08/01/1996 | Staff records "transferred off-site per directive RC-1996-001." Lakeview Holdings takes 14200 Route 7 from WDLK Broadcasting for $1 quitclaim. |
| 08/15/1996 | Wentworth receives one-time $34,000 wire from WDLK payroll. |
| 09/1996 | TV Odyssey goes to static. Channel 34 dark. WDLK Broadcasting Inc. accounts closed. |
| 02/14/1997 | Rourke files BSA/AML compliance waiver for Lakeview's recurring wires. Never reviewed. |
| 04/22/1997 | Rourke creates RF-0055 — the 847 Lakeshore disposition protocol. |
| 09/01/1997 | Rourke hired as CCSB Branch Manager. |
| 1998 | Hale's *Voices on the Air* published. |
| 03/15/1999 | Hale's book checked out of the library. Never returned. |
| 1999 | Pfister launches `findthelight.org` (current version est. 1999, page rebuild June 2002). Jake's GeoCities frozen mid-July. |
| 2000 | Wentworth elected mayor. |
| ~2001 | 1991–1993 community newsletter volumes go missing from library archive. |
| 03/2002 | VHStracker breaches the loading dock, takes six tapes including one with a red `PRIVATE DO NOT AIR` sticker. Posts uploads. Banned by staticfuzz 03/12. **Last activity 03/09/2002.** |
| Late 2002 | Loading dock welded shut. |
| 12/28/2002 | lakerunner88 sights parked car at station. |
| 01/07/2003 | Mountain Creamery LLC formed. $310k seed transferred. All permits approved by Rourke same-day with backdated sequential numbers (BLD-2003-0041…0043 ≠ current FY sequence). |
| 03/15/2003 | CCSB system flags Calloway SSN as non-matching; Rourke suppresses next day. RF-0041 created. |
| 06/2003 | Cascade County Monument Co. paid $3,400 by Lakeview (memorial of some kind?). |
| 08/19/2003 | RF-0088 created (re-faxed Capitol Services disbursement schedule, Rourke's margin note: "who requested??"). Pfister receives anonymous email: "Stop looking at the sky. Look at the ground." |
| 09/2003 | Mountain Creamery's first $12,400 "Specialty Compound" payment. PTS payments begin. |
| 09/14/2003 | Davis family buys 847 Lakeshore. |
| 10/12/2003 | Anonymous "Jake, please call me. — Mom" guestbook entry on Jake's frozen 1999 page. |
| 11/02/2003 | Pfister's last `findthelight.org` update. |
| 12/01/2003 03:17 | Three failed remote logins as "R.CALLOWAY" against CCSB, password = WDLK payroll account #. |
| 12/27/2003 22:13 | Rourke logs in from non-branch IP 10.0.7.142, accesses RF-0041 and RF-0088. |
| 02/14/2004 | staticfuzz's last forum post. Forum stats then read "77 days since the last post" → ARG present is **late April / early May 2004**. |
| 2004 (predicted) | Bank's own model projects Davis vacancy June–November. |

---

## 6. The conspiracy, decoded

What the GM should treat as true (even if no single in-fiction page
states it outright):

1. **WDLK never had an FCC license.** The "W"-prefix call sign in
   K-prefix Oregon is not a clerical error. The station broadcast
   illegally, on purpose, for thirteen years, with the help of
   whoever Capitol Services Inc. ultimately fronts for.
2. **The broadcast was the payload.** Not just programming: a
   non-standard carrier under the picture, emitted by the ground-
   pointed dish array on the tower, that produced selective
   long-term memory loss in children developmentally exposed.
   Adults remembered the channel; kids remembered the *shows* and
   forgot everything else about being a child. (See deep_memory's
   hypnosis story; cassie's "channel 6 after school every day, that's
   my entire childhood"; oregonmike's "I don't remember turning
   it off.")
3. **The 1996 shutdown was a controlled abort,** not a fire and not
   organic. Something went wrong on 07/29/1996. Rourke, Hale's
   replacements, and the entire production crew ended on that date
   in lockstep. Hale (who'd left in 1993) was the only employee free
   to write a book; her book is now untouchable.
4. **The basement is real.** County blueprints say the 14200 Route 7
   structure is single-story. VHStracker saw stairs going down past
   the tape storage and described the building's interior as
   matching *Basement World*. Either the show was filmed inside
   space the county doesn't acknowledge, or the building was the
   show, in some sense.
5. **The 847 Lakeshore loop is the present-day operation.** Whatever
   happened at 14200 Route 7 has moved into 847 Lakeshore. The bank
   protocol seals the basement before each showing. Nine families.
   The Davis family is on the clock.
6. **Money pipeline:** Capitol Services Inc. (Dover DE) → Lakeview
   Holdings (DE shell, OR-located buildings) → operating expenses
   (Pembrook keeps the tower powered, Mountain Creamery procures
   "Specialty Compound" for whatever's running, Rourke gets paid to
   suppress, Calloway's $400/yr keeps a dead identity on the books).
   The Trust account hoards a war chest; CHECK #0001 to "CASH" was
   the only outflow.
7. **The cleanup is still running.** Whoever restored the loading
   dock weld, whoever scrubbed the newsletter archive, whoever
   re-faxed the 1996 disbursement authorization in 2003 — they're
   active. The "who requested??" margin note means *Rourke himself
   doesn't know who's still pulling the strings.*

---

## 7. Player hooks and current pressure points

In rough order of urgency:

1. **The Davis family at 847 Lakeshore.** Bank's projected vacancy
   window is **June–November 2004** and the ARG present is late
   April / early May 2004. Players have weeks. Saving them is the
   most concrete possible win.
2. **The PRIVATE DO NOT AIR tape.** Six tapes left the building in
   VHStracker's hands. Five he uploaded. One he didn't get to.
   Whatever is on the red-sticker tape is what made staticfuzz lock
   threads and what made VHStracker disappear. Recovering even one
   surviving copy is the deepest payoff in the bibliography.
3. **The basement that doesn't exist.** Players who get inside
   14200 Route 7 (welded loading dock, padlocked front door, sheriff's
   response in <4 minutes per Pfister) face *Basement World* rules
   on the way down. Treat the descent diegetically — the rules of
   the show apply once you're below the tape storage.
4. **The WDLK terminal next layer.** `10.0.14.182` currently ends
   at "ESTABLISHING CONNECTION TO REMOTE HOST..." This is an
   intentional cliffhanger. Recommended: the remote host is a live
   2004-era machine somewhere in the Capitol Services chain. Choose
   what's on it before players reach it.
5. **The "Specialty Compound."** $12,400/month, cash, P.O. Box 1147.
   Procurement front. What does Mountain Creamery actually buy and
   ship? GM call. Anything from custom magnetic tape stock to
   biological consumables works. Whatever it is, **it ties the
   1984–1996 operation to the still-running 2004 operation.**
6. **Pfister's anonymous email.** "Stop looking at the sky. Look at
   the ground." Whoever sent it knows enough to redirect a
   conspiracy theorist away from the tower toward the basement /
   lake / underground. Identifying the sender is a midgame quest.
7. **Hale's book.** Whoever has it has a head start on canon. If
   the players recover it, treat it as the GM's license to drop
   1984–1996 detail directly.
8. **Jake.** Find him.

---

## 8. Continuity notes (places where canon is unstable)

These are flagged so multi-GM tables don't end up contradicting each
other on session 4. Pick a ruling per table; record it.

- **"Calloway Media Holdings" vs "Lakeview Holdings."** Forum cites
  Calloway Media (1981, Raymond T. Calloway). Property records and
  CCSB cite Lakeview (1996, R. Calloway). Suggested ruling: Calloway
  Media was the original 1981 OR-state shell that owned the building
  through the broadcast era; Lakeview is the 1996 DE rollup that
  absorbed it during the cleanup.
- **"1147 Route 7" vs "14200 Route 7."** The forum's "fire that
  never happened" thread cites the town minutes condemning a
  structure at 1147 Route 7. Every other source uses 14200. The P.O.
  Box in Wilmington is also 1147. Suggested ruling: the town
  minutes deliberately misnumbered the address as part of the
  cleanup, and "1147" is the cleanup crew's signature — it's also
  why their P.O. Box is 1147.
- **Population 4,200 vs 1,200.** Official city site says 4,200,
  nightowl_k says 1,200. Suggested ruling: 1,200 incorporated, 4,200
  including the rural area broadcast-tower-served. Both are true.
- **Cascade County is fictional.** Real Oregon doesn't have one.
  Treat as a fictional county between Klamath and Lake counties.
  staticfuzz's coordinates (42.7284, -121.7367) place the town in
  real-world Klamath County.
- **Building age.** Find The Light says ~1983 build. Forum thread
  says single-story commercial built 1979. Property records show
  WDLK Broadcasting bought it in 1983. Suggested ruling: building
  exists from 1979, WDLK takes possession 1983.
- **Channel number.** The schedule and Find The Light say UHF
  channel 34. Forum users repeatedly call it "Channel 6" (cassie,
  oregonmike, lakerunner). Suggested ruling: the cable carrier in
  Deep Lake mapped the WDLK UHF 34 signal to dial position 6 on
  the local cable converter — the kids remember the dial position,
  the engineers remember the broadcast channel.

---

## 9. Out-of-universe / runner notes

- **Bookmark localStorage key**: `arg_bookmarks_v1`. Wiped via
  `localStorage.removeItem('arg_bookmarks_v1')` in DevTools console.
- **Hidden-site keys are exact-match-only on the IP** (not on any
  string). Variations of the IP work because the gateway strips
  non-alphanumerics: `192.168.4.27`, `192 168 4 27`, `192168427` are
  equivalent. Same for `10.0.14.182`.
- **WDLK terminal escape sequence** for in-session resets:
  - Username: `Raymond Calloway` (case-insensitive)
  - PIN: `4178` (the last four of Calloway's SSN)
  - In Notepad, type any text containing the substring `odyssey`
    → ACCESS GRANTED screen → real desktop (after ~3s pause).
- **Real desktop (post-Access Granted)** — only two icons:
  - **Files** opens an in-terminal file explorer rooted at
    `C:\KIOSK-03\`. Tree shows `SITE\` (the running Kids Zone
    mirror, not browsable from the explorer), `DOCS\` (18 .TXT
    files), and `ACCESS.LOG` at the kiosk root. Click any file to
    read its contents. Files are listed roughly chronologically by
    in-fiction date; the access log spans 06/15/1996 → 02/14/2004.
  - **Local Server** opens `kids-zone.html` in a new tab — the
    locally-mirrored TV Odyssey Kids Zone. The Kids Zone is the
    *containment surface* per `PROTOCOL.TXT` and `IR_003`/`IR_004`
    — keeping that page running on the kiosk is what holds Mr.
    Know It All, Madame Claire, the Pollution Man smog, and
    Basement World inside their respective boundaries.
- **Kids Zone** (`kids-zone.html`) — three tabs:
  - **Home** — period-style "welcome to the Kids Zone" landing.
  - **Chat** — links to `kids site/kids-zone-knowitall.html` and
    `kids site/kids-zone-claire.html` (live LLM-backed chatbots —
    see Chatbot Setup below).
  - **Games** — links to `kids site/kids-zone-planet.html` (Captain
    Planet Saves the Day, stub — to be implemented) and
    `kids site/kids-zone-basement.html` (Escape Basement World,
    **playable** — see below).
  Slug `kids-zone` is added to the gateway bookmarks bar on first
  visit, but the page is **not** in the search index — the only
  intended path to it is via the terminal's Local Server icon.

### Chatbot Setup (Mr. Know It All & Madame Claire)

Both chatbots are **Claude API-backed**, served through the Node
server's `/api/chat` endpoint. Configuration:

- **Required env var:** `ANTHROPIC_API_KEY` — set in Railway's
  service variables. Without it, the `/api/chat` endpoint returns
  HTTP 503 with a friendly "tell your GM the API key is missing"
  message; the chat UI surfaces it inline. The static site keeps
  working — only the bots break.
- **Optional env vars:**
  - `ANTHROPIC_MODEL` — defaults to `claude-sonnet-4-6`. Override
    to `claude-haiku-4-5` for cheaper/faster but less nuanced
    chat, or `claude-opus-4-7` for max quality.
  - `CHAT_MAX_TOKENS` — per-reply ceiling, default `1024`.
  - `CHAT_MAX_TURNS` — turn cap per request (older turns trimmed),
    default `60`. Mr. Know It All's full 4-round game is ~40 turns,
    so 60 leaves headroom; Claire's 6-message reading is well under.
  - `CHAT_RATE_MAX` — per-IP messages per minute, default `30`.
- **System prompts** are loaded at server startup from
  `kids site/Mr. know it all prompt.md` and
  `kids site/claire_revised_prompt.md`. The server extracts the
  first triple-backtick block from each file. The `.md` extension
  is blocked from being served, so players can't read the prompts.
- **Prompt caching** is enabled via `cache_control: ephemeral` on
  the system block. The prompts are ~3K tokens — above Sonnet
  4.6's 2048-token cache minimum but below Haiku 4.5's 4096-token
  minimum. Caching fires on Sonnet/Opus, no-op on Haiku.

#### Mr. Know It All — game flow & special handling

The chat UI implements two pieces of behavior the prompt requires:

- **Per-question timer.** 30 seconds for rounds 1–3, 60 seconds
  for round 4. The timer resets after each bot reply. If it
  expires:
  - If the player typed something, that text is submitted.
  - Otherwise the literal string `[PLAYER RAN OUT OF TIME]` is
    sent in their place. The prompt's TIMEOUTS section tells
    Mr. K to react with the same energy as a wrong answer in
    rounds 1–3, and as `[PLAYER RESPONDED]` in round 4.
- **Round 4 privacy.** Once the bot enters Round 4 ("JUST BETWEEN
  US"), the UI keeps showing the player's actual answers in their
  own bubble, but **substitutes the literal string
  `[PLAYER RESPONDED]` when sending to Claude.** The model never
  sees the player's confessions — exactly what the prompt's
  RESPONSE HANDLING section instructs.
- **End detection.** The phrase fragment `I Know It All, after
  all` triggers session end — input locks, "show is over" banner.
- **Round detection.** UI watches for "ROUND 1/2/3/4" or the
  named round titles in bot text and updates the on-screen banner.

#### Madame Claire — reading flow

- **Hardcoded intro.** Per the prompt, Claude does **not** generate
  the first message. The UI shows the literal hardcoded greeting
  ("Welcome, dear. Sit. Let me look at you...") on splash dismiss,
  then waits for the player to type their name and birthday.
- **3 phases, 6 messages total** (intro + 3 round-trips):
  - Phase 1 — THE STARS (horoscope from name+birthday)
  - Phase 2 — THE CARDS (player tells Claire 3 tarot cards they drew
    from a real physical deck)
  - Phase 3 — THE GLASS (vision/prediction)
- **Phase banner** updates on each assistant turn so the player
  knows where they are.
- **End detection.** The phrase fragment `wonder what that could
  mean` triggers session end.
- **No timer** — Claire is unhurried by design.

#### Music

Both pages share `kids site/TV Odyssey Games.mp3`, played on loop at
~30–35% volume after the player clicks the splash-screen Begin
button (autoplay requires user gesture in modern browsers).

### Escape Basement World (`kids site/kids-zone-basement.html`)

Raycasting first-person walking simulator built on a `<canvas>`.
Pure client-side — no server calls — so it works without
`ANTHROPIC_API_KEY`.

**Controls:** ↑/↓ walk forward/back one tile, ←/→ turn 90°. Held
keys repeat (one step per ~220 ms move animation). All four arrow
keys are captured by the page; nothing else.

**World structure (per-tile, deterministic, lazy):**
- `(even, even)` tiles → corridor floor (always)
- `(odd, odd)`   tiles → corner pillar (always wall)
- mixed parity   tiles → passage candidate, rolled with a per-tile
  seeded RNG: 60% open, 35% wall, 5% brown door. Once generated,
  a tile is cached forever — backtracking shows the same maze.

Result is a regular grid of yellow corridors with random
walls/passages between them, easy to walk around in.

**Hallways.** Walking forward into a brown door pauses the music
(saving its position), switches the renderer to a 1-wide dark
corridor of `15–30` tiles with heavy fog (~2.6-tile draw distance)
and a vignette. After the player walks the corridor's length, they
exit into a randomly-chosen new corridor cell 4–8 cells away from
where they entered (in a random cardinal direction). The music
resumes from where it paused. This is the procedural-extension
mechanic — every hallway drops the player into a fresh patch of
maze they likely haven't generated yet.

**The 10-minute timer.** Hidden from the player — no on-screen
clock. Tracked by `state.gameStart = Date.now()`. Once
`Date.now() - gameStart >= 10*60*1000`, the tile generator's wall
roll has a 25% sub-chance to come up `TILE_DOOR_GREEN` (the exit)
instead. **Tiles already cached pre-timer keep their original
values** — the green door is only added to *newly* generated walls.
Green doors render bright green; walking into one wins.

**Win.** A "YOU MADE IT OUT" panel replaces the canvas with a
back-to-Kids-Zone link. Music stops.

**Music.** Loops `kids site/liminal mallcore loop small.mp3`
(~10 MB) at 45% volume. Same autoplay-requires-gesture rule applies
— starts on splash button click.

**Tile distribution sanity (50×50 sample, mixed-parity tiles only):**
- Pre-10-min: ~63% floor, ~32% wall, ~5% brown door, 0% green
- Post-10-min: ~63% floor, ~24% wall, ~5% brown door, ~8% green
  (≈25% of newly-generated walls)
- **Hidden WDLK-TV staff page**: visit `wdlk-tv.html#staff` or
  `wdlk-tv.html?page=staff`. Also reachable from the schedule's
  Friday-midnight `S/T-7` cell.
- **CCSB intranet login** (`192.168.4.27` / `ccsb-internal.html`):
  - Username: `Dale Rourke` (case-insensitive, full name from the
    WDLK staff page)
  - PIN: `1984` (his WDLK Technical Director hire year, from the
    same staff page)
  - Three failed attempts → 5-second lockout and reset.
  - Successful auth is cached in `sessionStorage` (`ccsb_authed_v1`)
    for the duration of the tab. Closing the tab requires re-auth.
  - **Player path:** the only place to discover both halves of the
    credential is the hidden `wdlk-tv.html#staff` page, so the
    intended order is WDLK-TV → staff page → CCSB intranet.
- **The deployed static server (`server.js`) blocks all `.md`
  files**, including this document and the `README.md` index, so
  you can deploy the bundle to Railway / any static host without
  leaking spoilers. Re-confirm by `curl`ing `/GM_LORE.md` against
  any deployed instance — should return 404.
