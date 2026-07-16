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
