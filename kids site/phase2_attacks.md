# POLLUTION MAN — PHASE 2 ATTACK PATTERNS

## Overview

Phase 2 marks the shift from arcade bullet hell to Undertale-style combat. All bullets now spawn INSIDE the box — appearing from edges, from fixed points within the arena, or materializing in place. Reaction windows are shorter. Bullet speed is noticeably faster than Phase 1. Pollution Man introduces soul color mechanics, forcibly changing the player's movement rules mid-fight.

He cycles between soul states in a semi-random order, spending 2–3 attacks in one color before switching. The switch itself is telegraphed — a 1-second freeze where the player's soul color visibly changes and a brief text flash names the color (first time only, to teach the mechanic). After the first cycle through all four colors, the text hints stop. You're expected to know.

At the end of Phase 2, when Pollution Man hits 1HP, he goes invincible and chains all four signature attacks back-to-back as his desperation move. If the player survives, Phase 3 begins.

---

---

# RED SOUL — FREE MOVEMENT

*Standard movement. No restrictions. The player might think this is a breather after a color mechanic phase — it isn't. Red attacks in Phase 2 are designed to punish the freedom of movement by overwhelming the space with omnidirectional threats. Nowhere is safe when you can go anywhere.*

*All attacks spawn inside the box.*

---

### RED 1 — CONTAMINATION ZONES

3–4 small circular zones appear inside the box, marked by faint pulsing rings. After 1.5 seconds, each zone erupts — bullets spray outward in all directions from each point simultaneously. The zones are placed so their spray patterns overlap in the center of the box.

After the eruption, the zones reposition and pulse again. 3 rounds.

**The challenge:** The eruptions happen simultaneously, so the overlapping spray creates a web of crossing bullet paths. Safe pockets exist but they're small and they shift every round. The player has to read the zone placement and pre-position in a gap between eruption radiuses BEFORE they fire.

---

### RED 2 — TOXIC BUBBLES

6–8 large, slow-moving bubble bullets materialize scattered across the box. They drift lazily in random directions, bouncing off the box walls. They're big — each one takes up roughly 1/8th of the box width. They don't kill on contact.

After 4 seconds, every bubble POPS — splitting into 8 fast small bullets that fly outward from each bubble's current position.

Then a new set of bubbles appears. 2 rounds.

**The challenge:** The bubbles themselves are obstacles that compress the player's movement space. The player has to track where every bubble is and predict where they'll be when they pop — because when they do, standing near ANY bubble is death. The instinct to dodge around bubbles puts you adjacent to them, which is exactly where you don't want to be at detonation.

---

### RED 3 — PRESSURE VALVE

Bullets spawn at the exact center of the box and fly outward in a continuous rotating stream — like a lawn sprinkler. The stream rotates clockwise. Single file of bullets, moderate speed, steady rhythm.

Simultaneously, bullets spawn along all four edges of the box and drift slowly inward.

**The challenge:** The player is being squeezed between the expanding sprinkler and the contracting edge bullets. The safe zone is a shrinking ring between the two fronts. The player has to orbit the center (staying ahead of the sprinkler arm) while also weaving through the incoming edge bullets. Two layers of threat, two different dodge rhythms happening at once.

---

### RED 4 — FUME TRAIL

A bullet spawns at a random point inside the box and begins moving in a smooth curve — like a snake. Every 0.3 seconds, it leaves behind a stationary bullet at its current position. The "head" bullet is harmless — the trail it leaves is the threat. One snake at first. Then two. Then three, all carving overlapping trails.

Trails persist for 6 seconds before fading.

**The challenge:** The box gradually fills with stationary bullets. The player's available space is being eaten away in real time. By the time the third snake is active, there are 40+ stationary bullets on screen plus three moving heads. The player has to track the heads to avoid being corralled into a trail while also navigating the existing minefield.

---

### RED 5 — STATIC FIELD

The entire box fills with a grid of stationary bullets — evenly spaced, covering everything. But there's a gap: a small clear zone roughly 3x the player's size, positioned randomly. After 2 seconds, ALL the stationary bullets begin drifting in one direction (left, right, up, or down — random). The gap drifts with them. New stationary bullets fill in from the opposite edge.

The drift direction changes every 3 seconds. 3 direction changes total.

**The challenge:** The player has to stay inside the moving gap. When the drift direction changes, the gap shifts and the player has to navigate through the briefly-disrupted grid to reach the new gap path. The grid is tight enough that there's no room to freestyle — you MUST find and follow the clear zone.

---

### RED SIGNATURE — BIOHAZARD

*Telegraphed by a biohazard symbol flashing over the box for 1 second.*

A single point appears dead center of the box. Pause. Then it erupts into a massive triple-spiral of bullets — three arms spinning outward simultaneously, much denser and faster than the Phase 1 Smog Spiral. The spiral fills the entire box within 2 seconds.

But: every 0.5 seconds, the spiral REVERSES direction. Clockwise becomes counter-clockwise, then back.

8 reversals total. Then the spiral dissipates.

**The challenge:** Orbiting with the spiral (the Phase 1 strategy) now fails because the direction keeps flipping. The player has to brake and reverse their movement every time the spiral reverses. Each reversal is a moment of extreme danger because the player's momentum is carrying them into the spiral arm they were just running from. Tests reflexes AND the ability to control precise movement under pressure.

---

---

# BLUE SOUL — GRAVITY

*The player is pulled to the bottom of the box. They can jump (with gravity pulling them back down) and move left/right. Vertical freedom is gone — replaced with a jump arc. The box floor becomes a platform.*

*Pollution Man's blue attacks are designed to demand vertical positioning that gravity actively fights against. The player has to master jump timing and fall speed.*

---

### BLUE 1 — ACID PUDDLES

Pools of green appear on the floor of the box — 3 of them, each roughly 1/4 of the box width. They deal damage if the player stands on them. The pools slide left and right slowly, overlapping and separating.

Meanwhile, single bullets fall from the ceiling at random positions.

**The challenge:** The player can't just stand on the ground anymore. They have to jump to avoid puddles — but jumping puts them in the path of falling bullets. Every jump is a calculated risk. Standing still is safe from ceiling bullets but the puddles will slide under you. The player has to hop between safe floor sections while reading the ceiling drops.

---

### BLUE 2 — RISING SMOG

A horizontal band of dense bullets appears at the bottom of the box — floor level — and begins rising slowly upward. The band is solid except for one gap, roughly 2x player width. As the band rises, the player has to jump through the gap. 

Once the first band clears overhead, a second band appears at the floor with the gap in a different position. 5 bands total, each rising slightly faster than the last.

**The challenge:** Gravity means the player falls fast. They need to time their jump to meet the gap at the right height, but they also need to be at the right horizontal position. If the gap is on the opposite side of the box from where you're standing, you have to start running early — you can't course-correct mid-jump under gravity. Demands planning and spatial prediction.

---

### BLUE 3 — DOWNDRAFT

Bullets spawn at the ceiling and fall downward in columns — similar to Phase 1's Sludge Drip, but now the player is gravity-bound. The columns cascade left to right, then right to left. The timing between columns is tighter than Phase 1.

Every third cycle, two columns drop simultaneously with a gap between them.

**The challenge:** Under gravity, the player's primary dodge is jumping. But jumping into a falling column is suicide. The player has to move laterally along the floor, jumping ONLY when a column drops on their current position and they can't outrun it. Short hops — just enough to let the column bullets pass under the jump arc. Over-jumping puts you in the air too long and you land on the next column.

---

### BLUE 4 — GEYSER

3 points on the floor of the box flash with a warning indicator. After 0.5 seconds, each one erupts upward — a tall column of bullets shooting from floor to ceiling. The columns last 2 seconds, then cut off. New warning indicators appear at different floor positions. 4 rounds.

Between geysers, slow bullets drift horizontally across the box at mid-height.

**The challenge:** The player is ground-bound by gravity, so the geysers cut the floor into segments. You can't walk through a geyser column — you're stuck in whatever floor segment you're in until it stops. The drifting mid-height bullets punish jumping as an escape. The player has to read the warning indicators and position themselves in a safe floor segment BEFORE the geysers fire, then survive the horizontal bullets for 2 seconds without jumping into them.

---

### BLUE 5 — BOUNCE PADS

3–4 small upward-arrow indicators appear at floor level. These aren't threats — they're bounce pads. The player gets launched high if they touch one. Meanwhile, the actual attack is a dense horizontal stream of bullets at mid-height moving left to right, and a second stream at a slightly different height moving right to left.

The streams are too low to jump over normally but too high to walk under (gravity keeps you grounded). The ONLY way to clear them is to use the bounce pads to launch over both streams.

But the bounce pad placement changes every 3 seconds.

**The challenge:** The player has to reach and use bounce pads on a timer while the crossing streams restrict their ground-level movement. Running into a stream while trying to reach a pad is the common death. The player needs to time their run to the pad so they arrive during a gap in the low stream, then launch over both. Rhythm and routing.

---

### BLUE SIGNATURE — GRAVITY WELL

*Telegraphed by the entire box flashing blue. The gravity intensifies — the player falls FASTER than normal and their jump height is reduced by roughly 30%.*

Bullets spawn at the ceiling in a dense, steady rainfall — not columns, just a constant downpour across the full width of the box. Small gaps exist in the rain, but they're irregular and constantly shifting.

Simultaneously, the floor begins RISING. A solid wall of bullets pushes upward from the bottom, reducing the playable space. The player's effective arena shrinks vertically over 10 seconds.

The rain is survivable with careful movement. The rising floor is survivable with patience. Together, with reduced jump height and faster fall speed, the margin for error collapses rapidly. By the end, the player is jumping in a narrow horizontal band between the rising floor and the falling rain, threading gaps in the rain with increasingly cramped jumps.

Lasts 10 seconds. The floor resets after.

---

---

# PURPLE SOUL — RAIL LINES

*The player is locked to 4 horizontal lines spanning the width of the box. They can move left/right along their current line and jump between lines (up/down). No free vertical movement — you snap to lines. The lines are evenly spaced from top to bottom of the box.*

*Purple attacks are about line management — threats that target specific lines, forcing the player to constantly switch rails while managing horizontal positioning.*

---

### PURPLE 1 — LINE SWEEP

A vertical bar of bullets spawns at the left edge of the box and sweeps rightward across all four lines simultaneously. It's solid — no gaps. The only way to dodge is to stay ahead of it by moving right. Once it reaches the right edge, a second bar spawns on the RIGHT and sweeps left.

3 sweeps, alternating direction, each slightly faster.

**The challenge:** The player is locked to lines, so they can't dodge vertically — they have to outrun the sweep on their current line. If they're on a line near the right edge when the sweep comes from the left, they have time. If they just jumped to a line near the left side, they're in trouble. Forces the player to manage horizontal positioning proactively.

---

### PURPLE 2 — RAIL SHUTDOWN

One of the four lines flashes red for 1 second, then fills with stationary bullets across its entire length. That line is now unusable. 2 seconds later, a different line shuts down. The first line clears simultaneously — so it's always 3 usable lines and 1 dead line, rotating.

While lines are shutting down, bullets travel horizontally along the remaining active lines — moving in alternating directions per line (line 1 left-to-right, line 2 right-to-left, etc.).

**The challenge:** The player has to keep jumping to avoid the shutting-down line while also dodging horizontal bullets on the active lines. The mental load is tracking which line is about to die while navigating traffic on the safe ones. Getting caught on a shutdown line is instant damage.

---

### PURPLE 3 — CONVERGING RAILS

Bullets spawn at both the LEFT and RIGHT edges on all four lines simultaneously, traveling inward toward the center. Each line's bullet pair travels at a slightly different speed, so they don't all converge at the same time.

The center of each line is the collision point. The player has to be off-center on their line when the bullets converge, then jump to a line where the convergence hasn't happened yet.

3 rounds, with the convergence timing getting tighter each round.

**The challenge:** Four convergence events at staggered timings. The player has to prioritize which line to be on based on which convergence is coming next. If they jump to a "safe" line too early, they might be standing on it when IT converges. Reading the speed differential between lines is the skill check.

---

### PURPLE 4 — ALTERNATING CURRENT

Lines 1 and 3 fill with rightward-moving bullet streams. Lines 2 and 4 fill with leftward-moving bullet streams. Every 2 seconds, the directions FLIP — 1 and 3 go left, 2 and 4 go right.

The streams have gaps. The gaps don't align vertically.

**The challenge:** The player has to ride the gaps in the stream on their current line, but when the flip happens, the gap they were in is suddenly gone (the stream direction reverses and a new bullet pattern replaces it). The player has to anticipate the flip and jump to an adjacent line where a gap is arriving. Mistiming the jump means landing in a stream.

---

### PURPLE 5 — CHAIN REACTION

A single bullet appears on Line 1, far left. It travels rightward. When it hits the right edge, it JUMPS to Line 2 and travels leftward. Then Line 3 rightward. Then Line 4 leftward. It's a single bullet bouncing through all four lines in sequence.

Sounds easy. But every time it completes a line, it leaves behind a trail of stationary bullets on that line. And a SECOND bouncing bullet launches 3 seconds after the first. Then a third.

By the end, 3 bullets are bouncing through the rail system simultaneously, each leaving trails that clog the lines.

**The challenge:** The lines progressively fill with stationary trail bullets, reducing the safe space on each rail. The player has to stay ahead of the bouncing bullets while navigating the shrinking safe zones. Eventually some lines become nearly impassable and the player is forced to time their jumps between the bouncing bullets' cycles. Escalating pressure over time.

---

### PURPLE SIGNATURE — TRACK SWITCH

*Telegraphed by all four lines flashing purple rapidly.*

The lines begin MOVING. They're no longer fixed positions — they shift vertically, sliding up and down in a wave pattern. The player is stuck on whichever line they're on and moves with it.

While the lines wave, bullets spawn at both edges of every line — dense streams converging inward. The gaps in the streams are timed so the player has to be at specific horizontal positions when the bullets arrive.

But the vertical movement of the lines means the player's visual reference is constantly shifting. The box looks like it's breathing — lines compressing together then spreading apart.

When lines compress close together, the streams from adjacent lines overlap, creating near-impassable walls. When they spread apart, there's space — but the player has to jump between lines at the right moment to exploit the gaps.

8 seconds. Lines reset to fixed positions after.

---

---

# GREEN SOUL — SHIELD

*The player is locked in place at the center of the box. They cannot move. A shield faces outward from the player in one of four cardinal directions — up, down, left, or right. The player presses a direction and the shield SNAPS to that facing and STAYS there until they press a different direction. Bullets that hit the shield are blocked. Everything else is damage.*

*The core skill is directional reads and commitment. Every input is a bet — you're choosing one direction to protect and leaving three exposed. Green attacks are designed around forcing the player to snap between directions under pressure, punishing late reads, and creating situations where two directions are threatened and the player has to pick one.*

---

### GREEN 1 — CARDINAL SHOTS

A single bullet fires from the top of the box toward the player. Then from the right. Then bottom. Then left. One direction at a time, in sequence. The player snaps the shield to face each incoming bullet.

After 2 cycles at a comfortable pace, the speed increases — less time between shots. Then it escalates: bullets start coming from two directions simultaneously. Top and bottom together. Left and right together.

**The challenge:** The sequential phase teaches the mechanic — read the direction, snap to it, block. The simultaneous phase breaks it. The shield only faces ONE direction. Top and bottom at the same time means the player picks one to block and eats the other. This is the introduction to green soul's central truth: you cannot block everything. The skill is choosing WHICH hit to take. Prioritization, not perfection.

---

### GREEN 2 — RING OF FIRE

A ring of bullets materializes around the player — a full circle, just outside the shield's reach. After a 1-second warning pulse, every bullet in the ring fires inward simultaneously. Toward the player. From every angle.

The shield faces one direction. ONE direction's worth of bullets gets blocked. The rest hit.

BUT: roughly 70% of the bullets in the ring are fake — they flash and vanish right before reaching the player. Only the solid ones deal damage. The real bullets always cluster in one cardinal direction (all the real ones come from the left, or all from the top, etc.). The fakes are subtly different — slightly transparent, or flickering.

3 rings, each with the real cluster in a different direction.

**The challenge:** Panic is the enemy. Bullets closing in from everywhere looks unsurvivable — but if the player reads the ring and identifies which direction has the real cluster, they snap the shield there and take zero damage. The entire attack is a reading test disguised as an overwhelming one. Miss the read, eat the full cluster. Nail it, clean dodge. Rewards observation, punishes flinching.

---

### GREEN 3 — PING PONG

A bullet fires from the left edge toward the player. The player snaps shield left, blocks it. Immediately, a bullet fires from the right. Snap right, block. Left again. Right again. A steady rhythm — left, right, left, right — that the player settles into.

Then it changes. Left, left, right. The double-tap catches players who are snapping on autopilot. Then left, right, right, up. The rhythm starts breaking. Directions become less predictable. The pace stays the same but the pattern complexifies — the player can no longer rely on alternation and has to actually WATCH each bullet's origin.

Final phase: three bullets rapid-fire from three different directions in quick succession. Snap snap snap — three reads in under a second.

**The challenge:** The attack trains a rhythm and then betrays it. Players who zone out and rely on muscle memory get punished when the pattern shifts. Players who stay engaged and read each bullet individually survive. It's a focus test. The speed isn't the hard part — the pattern disruption is.

---

### GREEN 4 — FEINT

A large, slow, highly visible bullet approaches from the left. Obvious threat, easy read. The player snaps shield left.

While the big bullet is still traveling, a small, FAST bullet fires from the right. It arrives before the big bullet does. If the player committed to facing left early, the fast bullet from the right hits them.

The correct play: wait. Don't snap to the big bullet until the last possible moment. Watch for the fast bullet. Block the fast one first (because it arrives first), then snap to block the big one.

3 rounds. Each round the fast bullet comes from a different direction, and the gap between fast-arrival and slow-arrival tightens.

**The challenge:** Exploits the instinct to react to the biggest, most visible threat. The attack punishes early commitment. The player has to learn to WAIT — to hold their shield direction until they've seen the full picture. Patience under pressure. The shrinking timing window in later rounds means the wait becomes increasingly nerve-wracking.

---

### GREEN 5 — MACHINE GUN ROULETTE

A turret icon appears on the top edge and begins rapid-firing bullets downward at the player. One bullet every 0.2 seconds. Relentless. The player snaps shield up and holds. Easy.

After 3 seconds, the turret VANISHES and instantly reappears on a different edge — left, right, or bottom. No telegraph. The player has to see it appear and snap to the new direction immediately. Every bullet between the turret appearing and the player snapping is a hit.

The turret relocates every 2.5 seconds. Random edge each time. 5 relocations total. After the third relocation, a SECOND turret appears. Now there are two turrets on two different edges firing simultaneously. The player can only block one.

**The challenge:** Single turret phase tests reaction speed — how fast can you identify the new position and snap to it? Double turret phase tests prioritization — which stream do you block? The correct choice is whichever turret is firing faster or has more bullets in flight. There's no way to block both. The player has to accept hits from one direction while protecting against the other, and swap when the turrets relocate.

---

### GREEN SIGNATURE — TOXIC FORTRESS

*Telegraphed by the shield flashing green three times.*

Bullets begin firing from all four cardinal directions simultaneously. Constant streams — top, bottom, left, right. The player can block one direction at a time. They're going to take hits from three directions no matter what.

But here's the mechanic: every bullet the shield blocks charges a COUNTER visible at the top of the screen. When the counter hits 20, a pulse of energy clears ALL bullets on screen. The counter resets to zero.

The strategy: the player has to pick the direction with the DENSEST stream — the one that would deal the most damage — and park the shield there. They eat hits from the other three, but those streams are thinner. Block the heavy stream, charge the counter, trigger the clear, get a half-second of breathing room, then identify which direction the heavy stream has shifted to and snap there.

The heavy stream rotates to a different direction every time the counter resets. The player has to re-read and re-commit after every clear.

Trigger 3 clears to end the attack. If the player is snapping randomly instead of reading the density, the counter builds slowly and they take massive damage before clearing.

10 seconds maximum duration.

---

---

# PHASE 2 → 3 TRANSITION — THE LAST STAND

*Pollution Man's HP reaches 1. He should be dead. The health bar flashes — the last pixel of health won't deplete. It turns from green to red to white, flickering.*

**[DIALOGUE — BLUE BOX, BUT CRACKING:]**

**POLLUTION MAN:**
"No."

**POLLUTION MAN:**
"No, not yet. NOT YET."

**POLLUTION MAN:**
"You want to beat me? You want to EARN it? FINE."

**POLLUTION MAN:**
"TAKE EVERYTHING I'VE GOT."

*His sprite flashes white. An invincibility star-like shimmer covers him. The health bar displays "1" and stops moving. He cannot be damaged.*

*The screen goes dark for one second. Then all four soul colors flash in sequence — Red, Blue, Purple, Green — rapid, like a slot machine cycling. The player's soul changes with each flash.*

*It settles on Red.*

---

## THE CHAIN — SIGNATURE GAUNTLET

*Pollution Man fires all four signature attacks in sequence. No downtime between them. The soul color changes automatically at each transition. The player has zero time to prepare for the new movement rules.*

**SEQUENCE:**

1. **BIOHAZARD** (Red) — Triple spiral with reversals. 8 seconds.
   *The moment the last reversal ends, the player's soul snaps to Blue. Gravity hits immediately. The player drops to the floor mid-dodge.*

2. **GRAVITY WELL** (Blue) — Dense rainfall with rising floor and reduced jump. 10 seconds.
   *As the floor resets, the player's soul snaps to Purple. They lock to the nearest line with no transition.*

3. **TRACK SWITCH** (Purple) — Moving rails with converging streams. 8 seconds.
   *Lines freeze. Player's soul snaps to Green. They're locked in place. Shield appears.*

4. **TOXIC FORTRESS** (Green) — 8-directional streams with block counter. Must trigger 3 clears.
   *On the third clear, the screen flashes white. All bullets vanish.*

*Silence. One second.*

*Pollution Man's invincibility breaks. His health bar still reads 1HP. The shimmer dies. His sprite is visibly dimmer — colors slightly desaturated, eyes flickering between yellow and something else.*

*But he doesn't attack. He just stands there.*

*The player's auto-fire is still going. One hit. That's all it takes.*

*Pollution Man takes the hit. The health bar empties.*

*Phase 2 ends. Phase 3 dialogue begins.*

---

## ATTACK CYCLING RULES — PHASE 2

- Pollution Man opens Phase 2 in Red soul with CONTAMINATION ZONES to establish that bullets now spawn inside the box.
- After 2–3 attacks in one color, the soul switches. First full rotation goes Red → Blue → Purple → Green to teach all four mechanics.
- After the first rotation, color selection is randomized with no immediate repeat of the same color.
- Average attack duration is 6–8 seconds with 1 second of downtime between attacks.
- Downtime decreases as his HP drops. Below 50%, downtime is 0.5 seconds. Below 25%, some attacks chain with zero downtime.
- At 1HP, the Signature Gauntlet triggers.

## TUNING NOTES — PHASE 2

- Bullet speed should be noticeably faster than Phase 1. The jump from Phase 1 to Phase 2 should feel like the game changed genres — from "bullet hell" to "bullet hell that's also a puzzle."
- Soul color transitions should be visually LOUD. The player needs to instantly recognize the new movement rules. A full-screen color flash plus the soul icon changing is minimum.
- Green soul attacks should be the shortest in duration. Being locked in place is inherently stressful — don't overstay.
- Purple soul attacks should have the most visual variety. The rail system is the most unique mechanic and the one players need the most time to internalize.
- The Signature Gauntlet should feel like a final exam. Each individual signature is something the player has already survived (earlier in Phase 2 at minimum). The difficulty is surviving all four back-to-back with cold transitions. If the gauntlet feels impossible, the individual signatures are tuned too hard — the gauntlet's difficulty should come from endurance and adaptation, not raw lethality.
