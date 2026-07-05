# Plan — Phase 2: Clinic Core

Numbered task groups. Complete in order; each group leaves repo in a runnable state.

---

## 1. SQLite foundation

- [ ] Add `better-sqlite3` and types; ensure native build works on dev machines
- [ ] Create `data/` directory; gitignore `data/*.db` (keep `data/.gitkeep` or migrations path)
- [ ] Add migration runner (lightweight — numbered SQL files or equivalent)
- [ ] Initial migration: `schema_version` table + version tracking
- [ ] Add DB helper module (connection, migrate on startup or explicit init)
- [ ] Implement `GET /api/health` → `{ ok: true, db: "connected" }`
- [ ] Vitest: health handler returns 200 with expected JSON when DB file exists

**Checkpoint:** `npm test` passes health test; DB file created on first request or test setup.

---

## 2. Agents

- [ ] Migration: `agents` table (id, name, model, human_owner, notes, created_at)
- [ ] `GET /api/agents` — list all agents
- [ ] `POST /api/agents` — create agent (validate required fields)
- [ ] `GET /api/agents/[id]` — single agent
- [ ] `PATCH /api/agents/[id]` — update agent
- [ ] `DELETE /api/agents/[id]` — delete agent
- [ ] Dashboard `/dashboard/agents` (or section): list + create form
- [ ] Vitest: agents API CRUD happy path

**Checkpoint:** Can create and list agents via API and dashboard.

---

## 3. Ailments

- [ ] Migration: `ailments` table (id, slug, name, description, severity)
- [ ] Seed ailments in migration or seed script — include at minimum:
  - *Prompt Whiplash*
  - *Context Amnesia*
  - Additional satirical ailments per roadmap tone
- [ ] Migration: `agent_ailments` (agent_id, ailment_id, diagnosed_at, notes)
- [ ] API: list ailments; assign ailment to agent (create `agent_ailments` row)
- [ ] API: list ailments for an agent
- [ ] Dashboard UI: view ailments catalog; assign ailment to selected agent
- [ ] Vitest: seed rows exist (*Prompt Whiplash*, *Context Amnesia*, etc.)
- [ ] Vitest: assign ailment to agent via API

**Checkpoint:** Agent can be diagnosed with a seeded ailment; seed names match roadmap.

---

## 4. Therapies

- [ ] Migration: `therapies` table (id, slug, name, description, duration_minutes)
- [ ] Seed therapies — include at minimum:
  - *Spec Massage*
  - *Token Detox*
  - Additional satirical therapies per roadmap tone
- [ ] Migration: `prescriptions` (agent_id, therapy_id, ailment_id, prescribed_at)
- [ ] API: list therapies; create prescription (agent + therapy + ailment)
- [ ] API: list prescriptions for an agent
- [ ] Dashboard UI: prescribe therapy for agent + ailment
- [ ] Vitest: seed rows exist (*Spec Massage*, *Token Detox*, etc.)
- [ ] Vitest: create prescription via API

**Checkpoint:** Agent with ailment can receive a therapy prescription.

---

## 5. Appointments

- [ ] Migration: `appointments` (id, agent_id, therapy_id, scheduled_at, status, notes)
- [ ] `GET /api/appointments` — list (filter by agent optional)
- [ ] `POST /api/appointments` — book appointment (default status: scheduled)
- [ ] `PATCH /api/appointments/[id]` — update status (scheduled → completed → cancelled)
- [ ] Dashboard: book appointment form (agent, therapy, datetime, notes)
- [ ] Dashboard: **list view** of appointments with status
- [ ] Vitest: create appointment via API; status transition

**Checkpoint:** Full clinic loop works in browser and via API.

---

## 6. Integration & branch hygiene

- [ ] Vitest: end-to-end integration test — register agent → assign ailment → prescribe therapy → book appointment
- [ ] Dashboard nav links all new sections (agents, ailments, therapies, appointments)
- [ ] Run through `validation.md` checklist before merge
- [ ] Merge `phase-2-clinic-core` when validation passes

**Checkpoint:** Phase 2 done; Phase 3 (dashboard polish) unblocked.
