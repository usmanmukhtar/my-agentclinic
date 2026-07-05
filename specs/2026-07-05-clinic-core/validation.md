# Validation — Phase 2: Clinic Core

How to know implementation succeeded and branch can merge.

---

## Prerequisites

```bash
npm install
```

Ensure `data/` is writable. Tests should use isolated DB (temp file or in-memory) per `tests/setup.ts` conventions.

---

## Required checks (merge gate)

### 1. Automated tests — full suite

```bash
npm test
```

**Pass when:**

- [ ] Command exits 0
- [ ] Health handler test passes (`/api/health` → `{ ok: true, db: "connected" }`)
- [ ] Agents API CRUD tests pass
- [ ] Ailments seed assertion tests pass (rows exist for roadmap names)
- [ ] Therapies seed assertion tests pass (rows exist for roadmap names)
- [ ] Ailment assignment API test passes
- [ ] Prescription API test passes
- [ ] Appointments API test passes (create + status update)
- [ ] **Full-loop integration test** passes: register agent → diagnose → prescribe → book

---

### 2. Seed data — exact roadmap examples

After migrations run (test or dev), query `ailments` and `therapies`.

**Pass when Vitest asserts (or manual SQL confirms):**

| Table | Required seed names (minimum) |
|-------|-------------------------------|
| `ailments` | *Prompt Whiplash*, *Context Amnesia* |
| `therapies` | *Spec Massage*, *Token Detox* |

Additional satirical rows encouraged; these four names are **required**.

---

### 3. Health endpoint (runtime)

```bash
npm run dev
```

```bash
curl -s http://localhost:3000/api/health
```

**Pass when:** Response is JSON with `ok: true` and `db: "connected"`.

---

### 4. Dashboard — full clinic loop (manual smoke)

With dev server running:

1. Open `/dashboard` (or agents section)
2. **Register agent** — e.g. name `Claude`, model `claude-3`, human owner `Susan`
3. **Diagnose** — assign *Prompt Whiplash* (or *Context Amnesia*) to that agent
4. **Prescribe** — assign *Spec Massage* (or *Token Detox*) for agent + ailment
5. **Book** — create appointment with future `scheduled_at`; confirm appears in **list view**
6. **Status** — mark appointment completed or cancelled via UI or API

**Pass when:**

- [ ] Each step persists (refresh page, data still there)
- [ ] No 500 errors on dashboard routes used in loop
- [ ] Appointment list shows booked row with correct agent/therapy/time/status

---

### 5. API smoke (optional but recommended)

With dev server running:

```bash
# List agents
curl -s http://localhost:3000/api/agents

# List ailments (catalog)
# List therapies (catalog)
# List appointments
```

**Pass when:** Endpoints return JSON arrays/objects without 500.

---

## Explicitly not required for Phase 2 merge

| Check | Notes |
|-------|-------|
| `npm run build` | Out of scope per requirements |
| shadcn/ui | Phase 3 |
| Calendar view | List view only this phase |
| Dashboard counts / empty states | Phase 3 |
| Full satirical copy | Phase 4 |
| GitHub Actions CI | Phase 5 |
| ESLint / Prettier | Deferred |
| Responsive booth layout | Phase 3 |

---

## Manual smoke script (~5 min)

1. `git checkout phase-2-clinic-core`
2. `npm install && npm test`
3. `npm run dev`
4. `curl` health endpoint — confirm DB connected
5. Dashboard: register agent → diagnose → prescribe → book
6. Confirm appointment in list view; update status
7. Stop dev server

**Merge when:** All required checkboxes pass and implementation matches `requirements.md` (full loop, better-sqlite3, minimal Tailwind UI, list-only appointments, roadmap seed names).

---

## Post-merge

- Mark Phase 2 complete in `specs/roadmap.md` (update "current" marker to Phase 3)
- Next spec work: **Phase 3 — Dashboard polish** (`specs/` dated folder + branch)
