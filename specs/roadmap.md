# Roadmap

High-level implementation order in **very small phases** (~1–2 hours each). Each phase ends with something runnable or reviewable. Feature order follows Susan's domain: **Agents → Ailments → Therapies → Appointments**.

---

## Phase 0 — Constitution ✓

**Deliverable:** `specs/mission.md`, `specs/tech-stack.md`, `specs/roadmap.md` (this file).

**Done when:** Stakeholder input captured; team agrees on tone, stack, and phase plan.

---

## Phase 1 — Next.js scaffold ✓

**Deliverable:** Next.js App Router project, TypeScript strict, Tailwind, basic layout shell.

**Tasks:**
- Replace bare `tsc` scaffold with Next.js app structure
- Add home page with AgentClinic branding (playful tagline)
- Add empty `/dashboard` route with nav placeholder

**Done when:** `npm run dev` serves home + dashboard shell; `npm test` passes scaffold checks.

---

## Phase 2 — Clinic core (current)

**Deliverable:** SQLite foundation, full domain model (agents, ailments, therapies, appointments), CRUD APIs, and dashboard flows for the complete clinic loop.

**Tasks:**

*SQLite foundation*
- Add SQLite dependency and `data/` directory (gitignored DB file, committed migrations)
- Create initial migration (empty or `schema_version` table)
- `GET /api/health` returns `{ ok: true, db: "connected" }`
- Vitest test for health handler (add to `npm test` merge gate)

*Agents*
- Schema: `agents` (id, name, model, human_owner, notes, created_at)
- `GET/POST /api/agents`, `GET/PATCH/DELETE /api/agents/[id]`
- Dashboard: list agents, simple create form

*Ailments*
- Schema: `ailments` (id, slug, name, description, severity)
- Seed satirical ailments (*Prompt Whiplash*, *Context Amnesia*, etc.)
- Schema: `agent_ailments` (agent_id, ailment_id, diagnosed_at, notes)
- API + UI to assign ailment to agent

*Therapies*
- Schema: `therapies` (id, slug, name, description, duration_minutes)
- Seed therapies (*Spec Massage*, *Token Detox*, etc.)
- Schema: `prescriptions` (agent_id, therapy_id, ailment_id, prescribed_at)
- API + UI to prescribe therapy for agent + ailment

*Appointments*
- Schema: `appointments` (id, agent_id, therapy_id, scheduled_at, status, notes)
- `GET/POST /api/appointments`, status updates (scheduled → completed → cancelled)
- Dashboard: book appointment, calendar or list view

**Done when:** Health endpoint passes with DB on disk; full loop works: register agent → diagnose → prescribe → book; `npm test` passes.

---

## Phase 3 — Dashboard polish

**Deliverable:** Staff-friendly overview; demo-ready UI.

**Tasks:**
- Dashboard home: counts (agents, open appointments, common ailments)
- Consistent layout, empty states, error handling
- Responsive layout for booth laptop screens

**Done when:** Steve's "attractive modern browser" bar met; one-screen demo story clear.

---

## Phase 4 — Copy & satire pass

**Deliverable:** In-universe microcopy throughout.

**Tasks:**
- Ailment/therapy descriptions, form labels, success toasts
- Home page explainer for students and booth visitors

**Done when:** Tone reads playful, not placeholder.

---

## Phase 5 — CI & integration expansion

**Deliverable:** Automated merge gates on every push.

**Tasks:**
- GitHub Action: `npm test` (+ lint when ESLint lands) on push
- Expand Vitest coverage: API integration tests for agents + appointment happy path

**Done when:** PRs cannot merge with broken clinic loop or failing `npm test`.

---

## Phase 6 — Demo script & student docs

**Deliverable:** `docs/demo.md` or README section for booth + classroom.

**Tasks:**
- 3-minute demo script (register *Claude*, diagnose *Prompt Whiplash*, book *Spec Massage*)
- Student guide: how specs map to phases

**Done when:** Newcomer can run demo without author present.

---

## After v1 (not scheduled)

- Auth (staff login)
- Turso/Postgres for hosted deploy
- Public "agent self-check-in" page
- Export appointment ICS / calendar feed
