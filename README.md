# portfolio

Chris Carpenter's portfolio site, live at <https://godimas101.github.io/portfolio/>.

## Preview locally

```bash
pip install -r requirements.txt
zensical serve
```

Opens at `http://localhost:8000`. Live reload on edits.

The site is built with [Zensical](https://zensical.org), which reads `mkdocs.yml` as it is.
The direction overlays (`directions/A_cassette/`, `stashed/B_cyberpunk/`, `stashed/C_hybrid/`)
set `docs_dir: ../../docs`, and Zensical only accepts a docs folder inside the config file's
own folder, so `zensical serve -f` can't preview them as they are.

## Deploy

Every push to `main` deploys the site. `.github/workflows/deploy.yml` runs `zensical build --strict`, then
`ghp-import` pushes `site/` to the `gh-pages` branch, which GitHub Pages serves at
<https://godimas101.github.io/portfolio/>.

## Directions

Direction A, Cassette Core, was picked on 2026-07-16. Since 2026-11-05 the live look is Phosphor Console, an amber
CRT console (`docs/assets/stylesheets/phosphor.css`, set in the root `mkdocs.yml`).

| Direction | Vibe | Where |
|---|---|---|
| **A — Cassette Core** | Aliens franchise industrial, worn amber/orange, Nostromo-era terminals | `directions/A_cassette/` (picked) |
| **B — Cyberpunk** | 2077 UI neon + magenta + cyan, glitch effects, high-tech dystopia | `stashed/B_cyberpunk/` (not picked, kept for reference) |
| **C — Hybrid** | Modern space-ops, dark mode with subtle retro accents | `stashed/C_hybrid/` (not picked, kept for reference) |

## Source of content

Projects to feature come from three GitHub owners:
- [`Godimas101`](https://github.com/Godimas101) — standalone tools + personal
- [`gitpush-mod`](https://github.com/gitpush-mod) — game mods (SE + MW5)
- [`The-Canadian-Space`](https://github.com/The-Canadian-Space) — automated aerospace newsroom

Each project needs a per-project page with description, screenshots, tech stack, outcome.
