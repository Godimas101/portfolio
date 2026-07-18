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

-   :material-notebook-heart:{ .lg .middle } **Solo build → Prodigy HR company-wide adoption**

    ---

    **The trigger.** Prodigy migrated off Lattice (our HR platform). Overnight, the performance review cycle became 4+ days of digging through Jira, Slack, Confluence, and old emails trying to reconstruct what you'd actually done over six months. Everyone hated it.

    **The build.** A macOS tray app for capturing weekly work notes. Plain markdown on disk under the hood — no vendor lock-in — with a Slack-grade rich text editor on top so non-technical folks never see raw markdown syntax. Roughly 5 weeks solo with an AI collaborator (Claude). Tauri 2 + Rust + Svelte, ~47,000 lines of application source, 554 automated tests.

    **The party trick — Self Review primer generation.** A wizard walks you through picking a review window, a set of company OKRs, and an optional Jira scope. It assembles a single markdown handoff document containing:

    - Your journal entries for the chosen period
    - The OKRs you're being reviewed against
    - A list of Jira tickets you completed in that window
    - **Baked-in instructions telling the receiving LLM what to do with all of it** — read the source material, produce point-form notes cross-referenced to specific week numbers and ticket links, and NEVER draft answers on your behalf

    You paste the doc into whichever LLM you use. Out comes a series of notes cross-referenced to your own journal, tickets, and Confluence docs. You pick the points that matter, jump back to source when you need to remind yourself of specifics, and write. A 4-day slog turns into a single sitting.

    **The design decision that let HR say yes.** The app does not draft your review. It surfaces source material and structures the LLM handoff — the human writes the review, which is the entire point of a performance review. Prodigy HR saw the demo and adopted it company-wide.

</div>

---

## QA Cub

<div class="grid cards" markdown>

-   :material-test-tube:{ .lg .middle } **Bringing Prodigy's E2E test automation in-house**

    ---

    **Context.** Prodigy Math was running its automated end-to-end testing through **[QA Wolf](https://www.qawolf.com/)**, an external automation-as-a-service vendor. QA Cub is the internal project — an AI-assisted effort — to replace that setup by moving test authorship and execution in-house on Playwright.

    **What I contribute:**

    - **Converting QA Wolf tests to QA Cub** — reading the intent of the legacy spec, then rewriting it against our own helper library. ~14 Bonfire Spire quest coverage migrations shipped so far.
    - **Authoring net-new coverage** for gaps QA Wolf never touched. Four Firefly Forest quest specs shipped in the current sprint.
    - **Expanding the shared helper library** so future test authors don't reinvent the wheel — battle-tolerant world-item collection, guide-hand click hardening, FTUE preempt handling, `waitForAny` primitive. Roughly ten shared helper tickets across the year, all non-breaking to existing callers.
    - **Reducing flakes at the root cause level.** When a test breaks, the fix goes in the shared helper that all tests use — not a workaround pasted into the one broken spec. Two game-source bugs filed and fixed through this pattern.

    **How it works under the hood.** Playwright drives a Chromium runner against a self-hosted staging build of the game. Prodigy Math is a PixiJS canvas game (not a DOM app), so Playwright can't inspect sprites directly. The game maintains a shadow HTML "mock scene graph" mirroring the visible PIXI hierarchy, keyed by each sprite's name attribute — Playwright queries that mirror. Every check refreshes the mirror before reading so nothing asserts on stale state.

    **Why this matters beyond the day-job.** Every pattern that came out of QA Cub — the batch-migration coordinator/worker skill, the helper smoke-test convention, the "assert on state, not UI" discipline — has fed back into how Claude and I work together across every project on this site. Claude reaches for Playwright on non-QA work now as a direct result of what I learned here.

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
