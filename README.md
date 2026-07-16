# portfolio

Chris Carpenter's portfolio site. **In development — repo is private until aesthetic direction is picked.**

## Preview locally

```bash
pip install -r requirements.txt

# Base (no direction — plain material theme):
mkdocs serve

# Direction A — Cassette Core:
mkdocs serve -f directions/A_cassette/mkdocs.yml

# Direction B — Cyberpunk:
mkdocs serve -f directions/B_cyberpunk/mkdocs.yml

# Direction C — Hybrid space-ops:
mkdocs serve -f directions/C_hybrid/mkdocs.yml
```

Opens at `http://localhost:8000`. Live reload on edits.

## Deploy target *(after direction pick)*

Options being weighed:
- **GitHub Pages** via `mkdocs gh-deploy` (simplest, `.github.io` subdomain or custom domain)
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
