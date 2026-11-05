# portfolio

Chris Carpenter's portfolio site. **In development — repo is private until aesthetic direction is picked.**

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

## Deploy target *(after direction pick)*

Options being weighed:
- **GitHub Pages** via `zensical build` + `ghp-import` (the deploy workflow; simplest, `.github.io` subdomain or custom domain)
- **Cloudflare Pages** via GitHub Action (faster global CDN, easier custom domain)

Will decide when direction is picked.

## Direction candidates

| Direction | Vibe | Employer-safe? |
|---|---|---|
| **A — Cassette Core** | Aliens franchise industrial, worn amber/orange, Nostromo-era terminals | Bold |
| **B — Cyberpunk** | 2077 UI neon + magenta + cyan, glitch effects, high-tech dystopia | Bold |
| **C — Hybrid** | Modern space-ops, dark mode with subtle retro accents | Safe |

Chris picks one → we ship. The others become reference material.

## Source of content

Projects to feature come from three GitHub owners:
- [`Godimas101`](https://github.com/Godimas101) — standalone tools + personal
- [`gitpush-mod`](https://github.com/gitpush-mod) — game mods (SE + MW5)
- [`The-Canadian-Space`](https://github.com/The-Canadian-Space) — automated aerospace newsroom

Each project needs a per-project page with description, screenshots, tech stack, outcome.
