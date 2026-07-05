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

**Done when:** `npm run dev` serves home + dashboard shell.

---

## Phase 2 — SQLite foundation (current)

**Deliverable:** Database file, migration runner, health-check API.

**Tasks:**
- Add SQLite dependency and `data/` directory (gitignored DB file, committed migrations)
- Create initial migration (empty or `schema_version` table)
- `GET /api/health` returns `{ ok: true, db: "connected" }`

**Done when:** Health endpoint passes with DB on disk.

---

## Phase 3 — Agents entity

**Deliverable:** Agents table, CRUD API, minimal dashboard list.

**Tasks:**
- Schema: `agents` (id, name, model, human_owner, notes, created_at)
- `GET/POST /api/agents`, `GET/PATCH/DELETE /api/agents/[id]`
- Dashboard: list agents, simple create form

**Done when:** Staff can register and view agents.

---

## Phase 4 — Ailments catalog

**Deliverable:** Ailments reference data + link to agents.

**Tasks:**
- Schema: `ailments` (id, slug, name, description, severity)
- Seed satirical ailments (*Prompt Whiplash*, *Context Amnesia*, etc.)
- Schema: `agent_ailments` (agent_id, ailment_id, diagnosed_at, notes)
- API + UI to assign ailment to agent

**Done when:** Agent detail shows diagnosed ailments.

---

## Phase 5 — Therapies catalog

**Deliverable:** Therapies reference data + prescriptions.

**Tasks:**
- Schema: `therapies` (id, slug, name, description, duration_minutes)
- Seed therapies (*Spec Massage*, *Token Detox*, etc.)
- Schema: `prescriptions` (agent_id, therapy_id, ailment_id, prescribed_at)
- API + UI to prescribe therapy for agent + ailment

**Done when:** Agent detail shows prescribed therapies tied to ailments.

---

## Phase 6 — Appointments

**Deliverable:** Booking flow completing the clinic loop.

**Tasks:**
- Schema: `appointments` (id, agent_id, therapy_id, scheduled_at, status, notes)
- `GET/POST /api/appointments`, status updates (scheduled → completed → cancelled)
- Dashboard: book appointment, calendar or list view

**Done when:** Full loop works: register agent → diagnose → prescribe → book.

---

## Phase 7 — Dashboard polish

**Deliverable:** Staff-friendly overview; demo-ready UI.

**Tasks:**
- Dashboard home: counts (agents, open appointments, common ailments)
- Consistent layout, empty states, error handling
- Responsive layout for booth laptop screens

**Done when:** Steve's "attractive modern browser" bar met; one-screen demo story clear.

---

## Phase 8 — Copy & satire pass

**Deliverable:** In-universe microcopy throughout.

**Tasks:**
- Ailment/therapy descriptions, form labels, success toasts
- Home page explainer for students and booth visitors

**Done when:** Tone reads playful, not placeholder.

---

## Phase 9 — Tests & CI

**Deliverable:** Confidence for coursework and demos.

**Tasks:**
- API integration tests for agents + appointment happy path
- GitHub Action: lint + test on push

**Done when:** PRs cannot merge with broken clinic loop.

---

## Phase 10 — Demo script & student docs

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
