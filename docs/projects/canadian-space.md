# The Canadian Space

**Automated aerospace newsroom, live 24/7.** Discovers stories, researches them, edits them via an LLM pass, publishes to WordPress, posts to social. Runs on a self-hosted VPS. Zero human intervention on the happy path.

<div class="stat-grid" markdown>

- **39**{ .stat } n8n workflows
- **7**{ .stat } blog content streams
- **40+**{ .stat } news sources
- **24/7**{ .stat } uptime target

</div>

## What ships

**Seven blog streams**, each with its own scraper + writer + editor chain:

| Stream | Focus |
|---|---|
| Daily Broadcast | Cross-cutting aerospace for the day |
| NASA Overview | NASA missions + programs |
| SpaceX Report | Launches, Starship, Dragon |
| Commercial Space | Rocket Lab-adjacent commercial ventures |
| Bright Blue Origin | Blue Origin coverage |
| Rocket Lab Roundup | Rocket Lab-specific reporting |
| Canada From Orbit | Canadian satellite + payload data |

**Plus:** an Editor LLM pass (Claude Haiku primary, Grok 3 fallback), real-time cost tracking with weekly digest, automated X + LinkedIn posting, and multi-source ingestion via Crawl4AI + plain HTTP + WordPress REST APIs.

## The stack

**Orchestration** — n8n on Docker on OVH VPS2. Backup workflow copies every workflow definition to `The-Canadian-Space/tcs-workflows` hourly. Cost Sentinel snapshot runs weekly (moving to daily).

**LLMs** — Claude (Haiku primary, Opus for heavy analysis), Google Gemini, xAI Grok routed via OpenRouter. Cost tracking via a custom `tcs-scripts` code-node library.

**Ingestion** — 40+ sources. Two patterns: Pattern A (Crawl4AI for JS-heavy / Cloudflare-protected), Pattern B (plain HTTP + RSS for standard news sites). Space Daily article pages get routed through WordPress-API + RSS since their web pages are Cloudflare-blocked.

**Publishing** — WordPress REST API with Application Passwords. `wp_kses` strips inline `onclick`/`data-*` from posted content, so behavior binds via `id` attributes + `addEventListener` via the Code Snippets plugin.

**Infra** — OVH VPS2, Docker Compose, Redis, Caddy reverse proxy, Cloudflare Access-gated internal docs at [docs.thecanadian.space](https://docs.thecanadian.space), public wiki at [wiki.thecanadian.space](https://wiki.thecanadian.space).

## Notable engineering

**V2 → V3 conversion playbook.** Multi-agent V3 workflow architecture with chassis-overlay pattern + official-article subflows. Fixed a thinking-block-leak bug where an agent's gate-confirmation was landing in blog titles. Playbook + safeguards captured in the internal wiki.

**Editor LLM safeguards.** Chris + Claude built a canonical rule library (`AUTHOR_AGENT_SAFEGUARDS.md`) loaded at execution time by V2/V3 Write News nodes. Prevents fabrication of dates, quotes, launch statistics.

**Cost Sentinel dashboard.** Real-time LLM spend across three providers, aggregated into a rendered HTML dashboard published to the internal wiki.

## Links

- **Live blog:** [thecanadian.space](https://thecanadian.space)
- **Public wiki:** [wiki.thecanadian.space](https://wiki.thecanadian.space)
- **GitHub org:** [`The-Canadian-Space`](https://github.com/The-Canadian-Space)
- **Behind-the-scenes:** [Patreon project log](https://patreon.com/Godimas101)
