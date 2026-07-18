---
hide:
  - navigation
---

# Work

**Current-day professional projects.** What I'm actually shipping in the day-job, roughly in order of impact.

---

## prodigy-qa-skills

<div class="grid cards" markdown>

-   :material-robot-industrial:{ .lg .middle } **AI-assisted QA workflow suite**

    ---

    Seven production Claude Code slash-command skills, plus two more in development. Solo build during a company-wide layoff, designed to hold QA velocity with reduced headcount. Adopted by all 7 Prodigy QAers + their manager. Being rolled out org-wide.

    **The 7 skills:**

    - `/qa-feature-context` — organizes design docs + tickets + Miro + spreadsheets into a working journal
    - `/qa-pr-analysis` — runs against every PR, surfaces risk, suggests debug steps, catches localization changes
    - `/qa-file-bug` — knows Prodigy bug templates + project routing, called as a subroutine by other skills
    - `/qa-test-cases` — reads Jira + Confluence + Figma, writes to AIO Tests standard, ~20 min per feature
    - `/qa-release-rpg` — end-to-end release wrapper: PR analysis → cycles → threaded Slack summary
    - `/qa-translation-analysis` — multilingual QA (pt-BR, es, fr, de, ja) against a custom Prodigy glossary
    - `/qa-sentry-analysis` — pulls errors, classifies against known patterns, offers to file

    **Impact:** test case writing collapsed 2–3 days → ~30 min. 5+ hrs/week/QAer on PR review + bug filing. 5 P1 issues caught pre-QA via `/qa-pr-analysis`. Multiple major RPG releases run end-to-end. Localization QA is now the team standard.

    **Philosophy:** the suite handles typing + pattern-matching. The QAers do the investigation. AI as force-multiplier, not replacement.

    [:material-linkedin: Public walkthrough](https://www.linkedin.com/posts/rustygear_how-an-ai-assisted-qa-ecosystem-i-built-at-ugcPost-7474998497478352896-hIq8/){ .md-button .md-button--primary }

</div>

---

## Captain's Log

<div class="grid cards" markdown>

-   :material-notebook-heart:{ .lg .middle } **Journaling → performance-review prep, macOS-native**

    ---

    Solo build with an AI collaborator (Claude) over roughly 5 weeks. Tauri 2 + Rust + Svelte. Empty repo to **company-wide Prodigy HR adoption**. ~47,000 lines of application source, 554 automated tests, 110 commits, 21 shipped phases, 8.8 MB signed DMG.

    **What it is:** menu-bar tray app that captures weekly work notes as plain markdown on disk, then assembles that material into review-prep documents for whichever LLM you point at them. No SMTP, no OAuth, no vendor lock-in — your journal is a folder of normal markdown files.

    **The design decision that won HR adoption:** the app does not write your performance review. Phase 5's Prep-Self-Review wizard assembles source material and instructs the receiving LLM to produce point-form suggestions with week numbers and Jira ticket links — never draft answers. The human still writes the review, which is the entire point of a performance review.

    **Pillars worth naming:**
    - **Markdown-on-disk as the single source of truth** — Slack-grade rich text in the editor; canonical CommonMark on disk. Storage format and display format are independent axes.
    - **Failure as a value** — enrichment / mail / reminder subsystems return graceful-degrade empty results instead of `Result::Err`. Five failure modes collapsed into one path.
    - **Sidecar JSON posture** — always rebuildable from the markdown; atomic-rename writes; delete `.metadata/` and the app rebuilds itself.

    **Collaboration patterns that stood out:** altitude-shift interrupts when the debugging loop stops responding, adversarial verification as a first-class build step (skeptics beat self-review), plans-out-then-build with locked design memories that survived multi-session compactions.

</div>

---

## QA Cub

<div class="grid cards" markdown>

-   :material-test-tube:{ .lg .middle } **Rebuilding Prodigy's E2E test infrastructure**

    ---

    Ongoing Playwright rebuild replacing legacy QA Wolf coverage across Prodigy Math (RPG). ~472 test targets in the tracker; migration + net-new authoring streams running in parallel.

    **Personal contribution across the year:**
    - **~14 Bonfire Spire quest migrations** — QA Wolf → Playwright, running clean on staging
    - **4 Firefly Forest net-new specs** authored under MAGE-1876 (Q7 mandrakes, Q9 Gerald, Q10 flute, Q11 Forest Thief)
    - **~10 shared helper tickets** — battle-tolerant world-item collection, guide-hand click hardening, FTUE preempt, `waitForAny` primitive. All non-breaking to existing callers.
    - **2 game-source bugs filed + fixed** via test infrastructure work (Worker Slime `nameParent`; Highlight Arrow `.name` rename unblocking 8 downstream call sites)

    **Two patterns that changed the workflow:**
    - **Batch migration skill** — coordinator subagent spawns N workers, each doing one migration end-to-end in isolated worktrees, reports pass/block. Cut migration wall-clock time by ~5× for the Bonfire batch.
    - **Helper smoke-test convention** — every new helper in `e2e/helpers/` gets a sibling smoke test tagged `@helper-smoke` before PR review. MINIMUM / THOROUGH / ADVERSARIAL tiers, plus a documented "async boot state" gate that solves the `signUpAsNewGameStudent` timing trap.

    **Class-of-bug philosophy:** the Firefly Q7 flake could have been fixed with `waitForTimeout(5000)` before every click. Instead, chased root cause — stale mock scene graph + inference from absence — and shipped a reusable helper. Adopted by another author within 24 hours of merge for a completely different zone.

</div>

---

## Also on the bench

<div class="grid cards" markdown>

-   :material-file-eye:{ .lg .middle } **QA Test Case Viewer**

    ---

    Custom VS Code extension. Renders the structured JSON that `prodigy-qa-skills` produces into a human-readable, searchable, inline-editable interface. Split-view markdown editor with live preview, TOC sidebar, in-source search with synced highlighting, document-undo integration via `WorkspaceEdit`.

    Closes the loop on the AI workflow for non-technical reviewers.

-   :material-note-multiple:{ .lg .middle } **Custom patch notes bot**

    ---

    Automation for Jira bot. Fires on every `fixVersion` release, queries resolved tickets, generates formatted patch notes in Confluence.

    Outperformed the paid patch notes extensions we evaluated — more focused output, easier customization of distribution, runs reliably with zero intervention.

-   :material-account-wrench:{ .lg .middle } **Company Atlassian admin (6+ years)**

    ---

    Sole / primary owner of company-wide workflows and the majority of Automation for Jira bots at both Big Viking Games and Prodigy Education. Founded and ran the internal Jira help desk. Wrote and implemented the company's Jira Admin + Project Admin training program.

    Designed integrated Jira ↔ Confluence ↔ Git ↔ Slack automations still in production.

</div>

---

## The stack

<p align="center">
  <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" alt="Jira" />
  <img src="https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white" alt="Confluence" />
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack" />
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Claude-DC7B4C?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude" />
</p>

**Also fluent in:** Automation for Jira, Automation for Confluence, AIO Tests REST API, TestRail (migration lead), Sentry MCP, Figma MCP, GitHub API (gh CLI), Slack API, WordPress REST API, VS Code Extension API, MCP server integration patterns, outsource + vendor management (QA Wolf, TestIO).
