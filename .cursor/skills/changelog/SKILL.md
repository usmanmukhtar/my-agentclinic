---
name: changelog
description: >-
  Update CHANGELOG.md at project root with date headings and user-facing bullets.
  Backfill from git history when missing or stale. Use when the user says
  "update changelog", "/changelog", or invokes this skill before merging a PR
  or branch.
disable-model-invocation: true
---

# Changelog

Maintain `CHANGELOG.md` at the repo root. Invoke manually before merge.

## Format

```markdown
# Changelog

User-facing changes to AgentClinic. Newest dates first.

## YYYY-MM-DD

- Short bullet: what changed and why it matters to users/devs
- Another bullet
```

Rules:

- **Date headings**: `## YYYY-MM-DD` (ISO date, no time)
- **Order**: newest date at top
- **Bullets**: user-facing; skip merge commits, WIP, typo-only unless notable
- **Tone**: past tense, concise; group related commits into one bullet when sensible
- **Scope**: shipped work only — committed changes on the branch being merged unless user asks to include uncommitted work

## Workflow

Copy this checklist and track progress:

```
Changelog update:
- [ ] Read CHANGELOG.md (create from template if missing)
- [ ] Identify commits to cover
- [ ] Write or update date sections
- [ ] Confirm no duplicate bullets
- [ ] Show diff summary to user
```

### Step 1 — Read existing changelog

Open `CHANGELOG.md`. Note the newest date already documented.

### Step 2 — Find commits to cover

**Before merge (default):** commits on current branch not yet on the merge base.

```bash
git merge-base HEAD main 2>/dev/null || git merge-base HEAD master
git log --format='%ad|%h|%s' --date=short <merge-base>..HEAD
```

If no `main`/`master`, use full history:

```bash
git log --format='%ad|%h|%s' --date=short
```

**Backfill (no changelog or empty):** full log, oldest-first for reading, write newest-first:

```bash
git log --format='%ad|%h|%s' --date=short --reverse
```

For each commit, skim the diff if the message is vague:

```bash
git show --stat <hash>
```

### Step 3 — Group and write bullets

1. Group commits by `--date=short`
2. Turn each group into 1–5 bullets (not 1:1 with commits unless each is distinct)
3. Prefer outcomes over implementation detail

| Commit says | Changelog says |
|-------------|----------------|
| Add vitest.config.ts and tests/setup.ts | Add Vitest test suite with scaffold tests |
| Refactor site constants | Refactor site constants for shared branding and navigation |
| Mark Phase N complete in roadmap | Mark Phase N complete in roadmap; Phase N+1 is current |

### Step 4 — Merge into CHANGELOG.md

- **New date**: insert `## YYYY-MM-DD` block immediately after the intro lines (below `# Changelog` and optional subtitle), above older dates
- **Existing date**: append new bullets to that section; do not duplicate bullets already present
- **Same work, two dates**: keep under the date the work landed (commit date)

### Step 5 — Verify

- Newest date is first
- Every bullet under a date heading
- No empty date sections
- Bullets describe user-visible or developer-visible value (features, fixes, docs, tests, roadmap milestones)

Report to user: dates touched, bullet count added, and whether uncommitted changes were excluded.

## Before-merge mode

When user says "before merge" or "pre-merge":

1. Run workflow for `merge-base..HEAD` only
2. Do not rewrite historical sections unless user asks
3. Remind user to commit `CHANGELOG.md` with the merge PR

## Examples

**Input:** one commit on 2026-07-05 — "Implement Next.js scaffold… Tailwind… README"

**Output:**

```markdown
## 2026-07-05

- Implement Next.js App Router scaffold with Tailwind CSS
- Add home page with AgentClinic branding and `/dashboard` staff shell
- Update README with development instructions
```

**Input:** CHANGELOG already has `## 2026-07-05` with scaffold bullets; new commit adds Vitest

**Output:** append to existing `## 2026-07-05` section:

```markdown
- Add Vitest test suite with scaffold tests for home page, dashboard, and nav
```

## Do not

- Invent changes not in git (unless user explicitly describes unreleased work to add)
- List every file touched
- Include internal refactors with no outward effect unless user asks for full detail
- Auto-run on every commit — only when user invokes this skill
