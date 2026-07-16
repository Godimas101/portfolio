# AGENTS.md — portfolio

Chris Carpenter's portfolio site. MkDocs Material static site linked from his resume. Consolidates highlights from 20+ projects scattered across 3 GitHub orgs (Godimas101 personal, gitpush-mod, The-Canadian-Space) — the portfolio's job is to give a hiring manager ONE URL that shows range + depth without them having to click through 30 repos.

## What lives here

- **`mkdocs.yml`** — base MkDocs Material configuration (theme, nav, plugins)
- **`docs/`** — content (markdown pages, images, custom CSS)
- **`directions/`** — three aesthetic direction candidates for the initial pick:
  - **`A_cassette/`** — Cassette Core (Aliens franchise — worn industrial, amber/orange, Nostromo vibe)
  - **`B_cyberpunk/`** — Cyberpunk (2077 UI — neon glow, cyan+magenta, glitch)
  - **`C_hybrid/`** — Hybrid space-ops (modern engineer aesthetic, subtle retro accents, employer-safe)
- **`requirements.txt`** — Python deps (`mkdocs-material` + plugins)

## Where work lives (RULE — non-negotiable)

**Every task on this repo is a ticket on the [Personal Projects board](https://github.com/users/Godimas101/projects/2).**

- **Starting work?** Open a ticket, set Status = **In Progress**, then start.
- **Idea for later?** Ticket in **Backlog**.
- **Need Chris to check something before closing?** Move to **In QA** and comment. Do NOT set to Done.
- **Finished + verified yourself?** Close with a summary (what you did / problems / anything NOT done).

Ticket body shape: memory `[[feedback-ticket-body-shape]]`.

## How to verify (before flagging In QA or closing)

- **Content changes** — build locally (`mkdocs build`) + preview (`mkdocs serve`), eyeball on desktop viewport + a mobile viewport (Chrome DevTools 375px).
- **Styling changes** — screenshot via Playwright, compare against the intended direction's aesthetic reference. If it doesn't LOOK like Cassette Core / Cyberpunk / Hybrid, it doesn't ship.
- **Nav / structure changes** — verify search still works after mkdocs rebuild.
- **Content-truthfulness** — every project bullet, every metric, every date needs to reflect reality. Chris links this from his resume — fabrications = career damage. Cross-check against the actual repo's README before committing.

## MUST NOT

- **Fabricate project details** — repo star counts, download numbers, contribution stats, timelines. All numbers come from real sources (Steam Workshop pages, GitHub stats, etc.).
- **Commit assets from external sources** without checking license (Cyberpunk 2077 art assets, Aliens franchise images, etc.). Reference-only inspiration; original art or clearly-licensed alternatives only.
- **Publish (deploy) until Chris has picked a direction** — repo stays private during the 3-direction mockup phase.
- **Add Google Analytics or third-party tracking** without asking — Chris hasn't signaled he wants that.

## Related

- Portfolio ticket: on [Personal Projects board](https://github.com/users/Godimas101/projects/2)
- Companion doc: `personal-docs/git-infrastructure.md` (private) — full infra setup
- Source projects: [`gitpush-mod`](https://github.com/gitpush-mod), [`The-Canadian-Space`](https://github.com/The-Canadian-Space), [`Godimas101`](https://github.com/Godimas101) orgs

---

*Part of Chris's `Godimas101` personal repos. Repo stays private during initial build.*
