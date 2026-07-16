# InfoLCD — Apex Update

**Flagship Space Engineers mod.** Renders live ship + base data on Apex LCD blocks — cargo, power, jump-drive charge, ammo, airlock state, and more. Client-side only. Zero server load. Safe to add or remove on any world.

<div class="stat-grid" markdown>

- **1,335+**{ .stat } Steam Workshop subscribers
- **Client-side**{ .stat } zero server code
- **SE 1**{ .stat } actively maintained
- **MIT**{ .stat } with attribution requirement

</div>

## Why it exists

Space Engineers has beautiful ships. It also has genuinely useful LCD blocks — Apex LCDs specifically — and no built-in way to show most of what a builder actually wants at a glance. Vanilla LCDs display text you type. That's it.

InfoLCD closes the gap. Place an Apex LCD block, open the terminal, pick an `InfoLCD - <thing>` script, done. The screen renders live data using MyTextSurfaceScript hooks so it works on dedicated servers with zero server-side install.

## What it renders

| Category | What lands on the LCD |
|---|---|
| **Cargo** | Total mass, per-container breakdown, sorted |
| **Power** | Reactor + battery output, consumption, minutes-remaining |
| **Jump drive** | Charge %, ETA to full, per-drive on multi-drive ships |
| **Ammo** | Ammo counts per weapon type across the grid |
| **Airlock** | Per-airlock pressurization + warning colors on active vent |
| **Detailed info** | Anything the block's DetailedInfo exposes — auto-formatted |

## Tech stack

- **C# text-surface scripts** inheriting `MyTextSurfaceScriptBase` — full game API access, no ingame-scripting sandbox
- **Position-based screen layouts** — recomputes remaining space from current draw position instead of hardcoded pixel positions, so a script works on any LCD size
- **Caching + defensive parsing** — subgrid scans cached across ticks, LINQ minimized on hot paths, DetailedInfo parsed defensively (SE loves to change format)
- **Config in AdditionalItems.ini** — flat INI, no XML, no JSON

## Why it stays client-side

The "runs without server install" property is the defining feature. Dedicated-server admins don't have to accept the mod. Multiplayer clients can join a vanilla server and still see their own ships' data. This design constraint has held since v1.0 — anything requiring `SessionComponent` gets rejected on principle.

## Links

- **Steam Workshop:** [InfoLCD - Apex Update](https://steamcommunity.com/sharedfiles/filedetails/?id=3580736330)
- **Source:** [`gitpush-mod/se-infolcd-apex-update`](https://github.com/gitpush-mod/se-infolcd-apex-update)
- **Sibling variant:** [`InfoLCD - Apex Advanced`](https://github.com/gitpush-mod/se-infolcd-apex-advanced) — expanded readouts
