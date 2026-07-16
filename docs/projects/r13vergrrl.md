# R13verGrrl (MechWarrior 5)

**Hero pilot mod for MechWarrior 5: Mercenaries.** In development. A love letter, but in the form of a hireable mercenary.

<div class="stat-grid" markdown>

- **Scaffold**{ .stat } current status
- **13**{ .stat } MVP voice lines planned
- **8**{ .stat } expansion voice lines
- **UE4**{ .stat } engine target

</div>

## The concept

Adds Chris's girlfriend as a playable hero pilot in MW5. Custom portrait, custom voice lines in Turkish + English (with cameo cat meows from her actual cats), personality traits reflecting who she is (strong-willed, kind, funny, a little clumsy), and a simple unlock quest: complete any single mission and she becomes hireable.

## What's built

- **Repo scaffold** with the standard MW5 mod plugin layout — `Config/`, `Content/`, `Resources/`, `ModOverride/`
- **Full research folder** (`RESEARCH/`) with a step-by-step implementation guide, voice line script (13 MVP + 8 expansion, with delivery notes + cat meow callouts), reference list, ticket list, open questions
- **Project board** with 8 tickets prioritized in Backlog

## Origin planet

BattleTech has no canonically Turkish planet in the MW5 timeframe (3015-3049). Research picked **Islamabad** — Federated Suns industrial hub, established colony, plausible frontier — with "Anatolian frontier" flavor text in the bio for the vibe.

## Voice lines — the plan

13 MVP lines (delivery notes → "confident, warm, slightly sarcastic humor"):

- Hire greeting → mission start → enemy sighted → taking damage → mech shutdown → kill confirmed → mission victory / failure → three idle cockpit lines (cat, car, humor)

8 expansion (post-1.0): overheating, low ammo, teammate praise, extra flavor.

Recording target: ~60–90 minutes of studio time with real voice actor + real cats in the background.

## Estimated build

**~10–15 hours** across a weekend + a couple of evenings, per the research guide. Blocking items:

- Confirm the `HireableCharacter` DataTable schema in the MW5 Editor (unclear from public docs)
- Decide whether Wwise audio middleware is required or if raw WAV → SoundWave import works
- Portrait artwork (256×256 PNG)

## Why it's here

Two reasons. First, it demonstrates end-to-end mod design — research → structured tickets → implementation plan → voice actor coordination — for a game engine (UE4) I've never modded before. Second, it's a stupidly nice thing to do for someone I love. Both matter.

## Links

- **Source:** [`gitpush-mod/mw5-r13vergrrl`](https://github.com/gitpush-mod/mw5-r13vergrrl)
- **MW5 knowledge base:** [`gitpush-mod/mw5-knowledgebase`](https://github.com/gitpush-mod/mw5-knowledgebase) *(private)* — accumulated MW5-modding notes
- **Sibling MW5 mod:** [`mw5-zulibetterheroes-reforged`](https://github.com/gitpush-mod/mw5-zulibetterheroes-reforged) — community-maintained fork of Kurst's ZuluBetterHeroes
