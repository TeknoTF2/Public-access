# POLLUTION MAN — PHASE 1 ATTACK PATTERNS

## Overview

Phase 1 is pure bullet hell. Red soul only — free movement in all directions. No mechanic gimmicks. This phase establishes that the game is genuinely hard and earns the lore justification for why the WDLK staff never cleared it. Pollution Man moves left and right along the top of the screen. The player auto-fires upward. All the player has to do is dodge and try to stay under him.

Pollution Man randomly cycles between his standard attacks. Each attack lasts a set duration (roughly 6–10 seconds) before he transitions to the next. He should never repeat the same attack twice in a row. At 30% HP, he interrupts whatever he's doing and launches Acid Rain.

---

## STANDARD ATTACKS (Randomized rotation)

---

### 1. TOXIC CLOUD BURST

Pollution Man stops moving. A large purple circle indicator pulses at his position for 1 second, then explodes outward — a radial burst of green orbs spreading in all directions from his location. 20–30 bullets per burst. He does this 3 times in a row, repositioning between each burst.

**What makes it hard:** The bursts come from wherever he's standing, so the safe zones shift every time. Players instinctively want to stay far from him, but they also need to be under him to deal damage. Creates a push-pull between safety and DPS.

**Dodge strategy:** Stay mid-box and read the gaps between the radial lines. Move perpendicular to the spread, not away from it. Running to a corner is a trap — you lose room to maneuver for the follow-up bursts.

---

### 2. EXHAUST PIPES

Four small nozzle sprites appear fixed along the top edge of the box (evenly spaced). Each one fires a steady stream of bullets downward — not straight down, but at a slight angle that slowly rotates. The streams sweep left and right like windshield wipers, each on a slightly different timing cycle.

Meanwhile, Pollution Man continues moving and occasionally drops single aimed shots at the player's current position.

**What makes it hard:** The sweeping streams create shrinking and expanding safe corridors. The player has to track four overlapping patterns simultaneously while also dodging the aimed shots. The aimed shots punish standing still — the streams punish moving carelessly.

**Dodge strategy:** Focus on two adjacent streams and stay in the corridor between them. Only move to dodge aimed shots when the corridor is wide enough. Don't try to track all four — pick a lane.

---

### 3. SMOG WALL

A horizontal wall of bullets stretches across the entire width of the box, with one gap roughly 1.5x the player's width. The wall drifts downward slowly. Before the first wall reaches the bottom, a second wall spawns with the gap in a different position. Then a third.

The player has to thread through each gap as the walls descend. 3–4 walls total per cycle. Pollution Man also drops slow-falling scattered bullets between the walls to clog the space.

**What makes it hard:** The gaps don't align vertically, so the player has to move laterally between walls while also moving vertically to thread the gaps. The scattered filler bullets between walls restrict the lateral movement paths. It's a navigation puzzle at speed.

**Dodge strategy:** Look at where the NEXT gap is before threading the current one. Pre-position. The filler bullets are slow enough to weave through if you see them early, but they'll catch you if you're reacting to the wall gap at the last second.

---

### 4. CHEMICAL RUNOFF

Bullets spawn along the LEFT and RIGHT edges of the box simultaneously, then travel horizontally inward — two streams crossing the screen from opposite sides. Each stream is a line of bullets with irregular spacing (not uniform gaps — some tight clusters, some openings). The two streams are at different vertical heights and the heights shift each cycle.

3 waves of crossing streams, each pair at different Y-positions.

**What makes it hard:** The player has to find positions where the gaps in BOTH streams align — a gap in the left stream doesn't help if the right stream is solid at that same spot. It's a mental overlay problem. Fast read, fast commit.

**Dodge strategy:** Prioritize dodging whichever stream arrives first. The slight timing offset between them means you can thread through the first stream's gap and then micro-adjust for the second. Trying to calculate both at once is how you die.

---

### 5. SLUDGE DRIP

Pollution Man moves to center screen and shakes — his sprite vibrates rapidly for a half second to telegraph the attack. Then bullets begin falling from the TOP of the box in columns. Each column activates in a random-looking (but patterned) sequence. Bullets fall fast. A faint shadow/indicator line appears on the column about 0.3 seconds before the bullets drop.

The columns fire in cascading sequences — first a sweep left to right, then right to left, then random bursts of 2–3 simultaneous columns.

**What makes it hard:** The telegraph window is short. Players who rely on reaction alone will get hit during the random burst phase because they don't have time to read multiple simultaneous indicators. Players who learn the sweep pattern will relax — and then the random bursts punish that comfort.

**Dodge strategy:** During sweeps, just move steadily in the opposite direction of the sweep. During random bursts, stay near center box so you have room to dodge in either direction. Hugging a wall during the random phase is death.

---

### 6. SMOG SPIRAL

Pollution Man positions at center-top. Two spiral arms of bullets begin rotating outward from his position — like a galaxy shape, spinning clockwise. The bullets are evenly spaced along each arm. The spiral expands as it rotates, eventually covering the full box before the bullets drift off-screen.

He fires 2 full rotations of this pattern.

**What makes it hard:** Spirals are a classic bullet hell pattern and they're deceptively tricky. The safe path is to rotate WITH the spiral — moving in the same direction it's spinning, staying in the gap between the two arms. But the natural instinct is to try to dodge through an arm, which gets tighter as it expands. Also tests the player's ability to move in curves rather than straight lines.

**Dodge strategy:** Orbit. Move clockwise with the spiral. Stay in the channel between the arms. Do NOT try to cut across an arm — the bullet density makes it a coin flip at best.

---

### 7. PIPELINE BURST

Three clusters of bullets spawn simultaneously at random positions along the top edge. Each cluster is a tight group of 8–12 bullets that begin moving downward together as a clump — then after 1 second, they SCATTER. Each bullet in the cluster picks a random-ish direction and speed within a cone, expanding the cluster into a messy spread.

Two rounds of three clusters each.

**What makes it hard:** The initial clumps look manageable — only three things to track. Then they blow apart and suddenly there are 30+ bullets going in semi-unpredictable directions. The dodge is about positioning BEFORE the scatter, not after. Once they've scattered, reaction dodging is almost impossible in the dense areas.

**Dodge strategy:** Watch where the clumps are falling and get AWAY from them before they pop. The scatter has a maximum radius — if you're far enough from the cluster center when it blows, the bullets spread past you. If you're under one when it scatters, good luck.

---

### 8. AIMED BARRAGE

The simplest attack conceptually, the hardest to dodge lazily. Pollution Man rapid-fires bullets directly at the player's current position. One bullet every 0.2 seconds for 5 seconds. Each bullet travels in a straight line from his position to where the player WAS when it was fired.

That's it. No pattern. No gimmick. Just relentless aimed fire.

**What makes it hard:** The player has to keep moving constantly. Any pause means a bullet is heading exactly where you are. But because the bullets aim at your CURRENT position, moving in a straight line creates a neat trail of bullets behind you — and if you reverse direction, you run into your own trail. It punishes predictable movement.

**Dodge strategy:** Move in wide, lazy curves. Don't reverse direction sharply. Don't move in straight lines. Circle the box in a smooth orbit and the aimed shots will always land just behind you. Panic-dashing is the killer.

---

## SIGNATURE ATTACK — ACID RAIN (Triggers at 30% HP)

*Pollution Man stops moving. Freezes center-screen. The background dims slightly. His sprite glows green.*

**POLLUTION MAN:**
"Let's see you dodge THIS, hero! ACID RAIN!"

*The screen pulses once — a green flash across the entire box. Then it begins.*

Concentric rings of green bullets expand outward from Pollution Man's position, one ring every 0.8 seconds. Each ring is a full circle of evenly-spaced bullets. The bullets are dense but the spacing between individual bullets in each ring is JUST wide enough to slip through — roughly 1.5x player width gaps.

The rings expand at a steady speed. The player has to weave between the bullets in each ring as they pass through. The first ring has 16 bullets. The second has 20. The third has 24. Density increases each wave.

5 rings total. After the 5th ring passes, Pollution Man is briefly stunned — a 3-second window where he doesn't attack and takes bonus damage. This is the reward for surviving.

**What makes it hard:** Each individual ring is manageable. The problem is that by ring 3, you're threading through the current ring's gaps while the previous ring's bullets are still on screen behind you, restricting your retreat paths. You're always moving inward or laterally — never backward. And the increasing bullet count per ring means the gaps get tighter as the pressure builds.

**Dodge strategy:** Don't try to stay in one spot and thread the gaps as they come to you. Move TOWARD the rings at an angle. This gives you more control over which gap you thread and more time to line up. Players who sit at the bottom of the box and wait for the rings to come to them will get cornered. The counterintuitive move is to push toward the source.

**Design intent:** This is the wall. This is what killed every run the WDLK staff attempted. It's fair — the gaps are always there — but it requires the player to stay calm under pressure, read ahead, and resist the panic instinct to retreat. A middle-aged adult in 1996 with no bullet hell experience would absolutely die here. Every single time.

---

## ATTACK CYCLING RULES

- Pollution Man starts the fight with TOXIC CLOUD BURST (establishes the radial pattern vocabulary).
- After that, attacks are selected randomly from the pool with no immediate repeats.
- Average attack duration is 8 seconds, with 1.5 seconds of downtime between attacks (Pollution Man repositions, brief breathing room).
- Every 3rd attack, the downtime shortens to 0.5 seconds. Every 5th attack, there's NO downtime — the next attack begins immediately. Keeps the player from settling into a rhythm.
- At 30% HP, current attack is interrupted and Acid Rain triggers. After Acid Rain resolves (including the stun window), normal rotation resumes with faster base bullet speeds for the remainder of Phase 1.

---

## GENERAL TUNING NOTES

- Bullet speed should start moderate and feel "readable" — the player should die to patterns, not to raw speed. If a bullet is too fast to see, it's too fast.
- The box should be large enough that the player has real room to maneuver but small enough that they can't just camp a corner and ignore half the patterns.
- All bullets should be the same color (green) with a slight glow or trail so they read clearly against the background. Visual clarity is more important than visual flair. The player should never die because they couldn't see a bullet.
- Pollution Man's movement along the top should be smooth and somewhat unpredictable — not a simple back-and-forth metronome. He should linger, reverse, speed up, slow down. This matters because the player's auto-fire means positioning under him is how you deal damage. His movement is a soft DPS check layered on top of the dodging.
