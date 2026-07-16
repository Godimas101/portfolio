# Tools + Utilities

Standalone tools I built because I wanted them to exist. All free, all MIT-licensed, all in daily use.

## Universal Image Converter

<div class="grid" markdown>
Windows app for Space Engineers modders. Converts images to `.dds` textures for LCD mods, and generates pasteable LCD text strings for in-game art. Handles the DDS quality dance via optional texconv integration; degrades to reasonable output without it.

**Repo:** [`Godimas101/universal-image-converter`](https://github.com/Godimas101/universal-image-converter)
**Download:** [Latest release](https://github.com/Godimas101/universal-image-converter/releases/latest)
</div>

## Universal Audio Converter

<div class="grid" markdown>
Full SE audio workflow in one tool. Converts WAV / OGG / MP3 / etc → WAV or XWM. Visual audio editor (trim, fade, normalize, stereo→mono). Generates `Audio.sbc` + `SoundBlock.sbc` for SE mod definitions. xWMAEncode integration for real XWM output.

**Repo:** [`Godimas101/universal-audio-converter`](https://github.com/Godimas101/universal-audio-converter)
**Download:** [Latest release](https://github.com/Godimas101/universal-audio-converter/releases/latest)
</div>

## Claude Usage Monitor

<div class="grid" markdown>
Windows widget for Claude Code sessions. Amber-phosphor overlay near the system clock, or a taskbar strip, or a tray icon — pick one. Pauses polling when the screen locks. Hides when a game goes fullscreen. Right-click for the full stats + configuration panel.

**Repo:** [`Godimas101/claude-usage-monitor`](https://github.com/Godimas101/claude-usage-monitor)
**Download:** [Latest release](https://github.com/Godimas101/claude-usage-monitor/releases/latest)
</div>

## Table-to-Chart

<div class="grid" markdown>
GitHub Action that watches specific markdown files for a table + comment marker, then generates + commits an SVG chart of that table. Powers the weight-trend chart in Chris's personal health log. `[skip ci]` on the commits prevents infinite Actions loops.

**Repo:** [`Godimas101/table-to-chart`](https://github.com/Godimas101/table-to-chart)
</div>

## Automatic Weight Recording

<div class="grid" markdown>
n8n workflow + Python helper. Reads a Wyze Scale via `wyze_sdk` (HMAC-signed API), logs weight + body composition (fat, muscle, water, protein, metabolic age) as structured markdown rows. Runs on OVH VPS via SSH call. Feeds `table-to-chart` for the chart output.

**Key gotcha captured in the AGENTS.md: weight comes back in lbs already — don't multiply by 2.20462.**

**Repo:** [`Godimas101/automatic-weight-recording`](https://github.com/Godimas101/automatic-weight-recording)
</div>

## sedb-reloaded-again

<div class="grid" markdown>
Fork of the SEDB-RELOADED Discord bridge Torch plugin. Fixes a specific bug: when the SE dedicated server pauses (no players connected), the plugin's heartbeat dies and the Discord bridge stops. Fix: watchdog that detects heartbeat death and restarts it. Fork scope narrow on purpose.

**Repo:** [`Godimas101/sedb-reloaded-again`](https://github.com/Godimas101/sedb-reloaded-again)
</div>

## Space Engineers Modders' Tool Kit

<div class="grid" markdown>
Curated download hub for the SE modding tools above. GitHub Releases page bookmark — "download what you need and get building." Version-tracked so releases stay in sync.

**Repo:** [`Godimas101/space-engineers-modders-tool-kit`](https://github.com/Godimas101/space-engineers-modders-tool-kit)
</div>

## SE Claude Skill

<div class="grid" markdown>
Space Engineers modding skill for Claude Code. Teaches Claude the SE modding conventions, SBC formats, common pitfalls, and points at the SDK + workshop directories when it's invoked in an SE mod repo. In active use by Chris + collaborators.

**Repo:** [`Godimas101/se-claude-skill`](https://github.com/Godimas101/se-claude-skill)
</div>
