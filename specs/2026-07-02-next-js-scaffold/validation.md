# Validation — Phase 1: Next.js Scaffold

How to know implementation succeeded and branch can merge.

---

## Prerequisites

```bash
npm install
```

---

## Required checks (merge gate)

### 1. Dev server starts

```bash
npm run dev
```

**Pass when:** Server starts without fatal errors; default port (usually 3000) is reachable.

---

### 2. Home route works

Open `http://localhost:3000/` (or printed port).

**Pass when:**

- [ ] Page loads (no 500 / blank fatal error)
- [ ] "AgentClinic" (or equivalent product name) visible
- [ ] At least one playful tagline present
- [ ] Placeholder body text present (not required to be final Phase 8 copy)

---

### 3. Dashboard route works

Open `http://localhost:3000/dashboard`.

**Pass when:**

- [ ] Page loads (no 500)
- [ ] Dashboard shell visible (heading + placeholder; no real data required)
- [ ] Clearly a staff/clinic area, not a duplicate of home

---

### 4. Navigation

From home, reach dashboard; from dashboard, return home (nav links or equivalent).

**Pass when:**

- [ ] Both directions work without manual URL typing only
- [ ] No broken links or 404 on `/` or `/dashboard`

---

### 5. Automated checks (Vitest)

```bash
npm test
```

**Pass when:**

- [ ] Command exits 0
- [ ] Scaffold tests pass (see `tests/scaffold/`)

---

## Explicitly not required for Phase 1 merge

| Check | Notes |
|-------|-------|
| `npm run build` | Out of scope per requirements; add when APIs ship |
| TypeScript errors in CI | No CI yet (Phase 9) |
| ESLint / Prettier | Deferred |
| shadcn/ui | Deferred |
| SQLite / `/api/health` | Phase 2 |
| Responsive booth layout | Phase 7 |
| Full satirical copy | Phase 8 |

Vitest is required for Phase 1 merge (`npm test`); see check **5** above.

---

## Manual smoke script (~2 min)

1. `git checkout phase-1-next-js-scaffold`
2. `npm install && npm test && npm run dev`
3. Visit `/` — confirm branding
4. Click nav to `/dashboard` — confirm shell
5. Click nav back to `/` — confirm return
6. Stop dev server

**Merge when:** All required checkboxes above pass and implementation matches `requirements.md` scope (minimal, light branding, no out-of-scope features slipped in).

---

## Post-merge

- Update `specs/roadmap.md` Phase 0/1 status if team tracks "current phase" in that file
- Next spec work: **Phase 2 — SQLite foundation** (`specs/` dated folder + branch)
