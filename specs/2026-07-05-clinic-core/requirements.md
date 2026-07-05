# Requirements — Phase 2: Clinic Core

**Roadmap ref:** Phase 2 — Clinic core  
**Branch:** `phase-2-clinic-core`  
**Date:** 2026-07-05

---

## Context

Phase 1 delivered a runnable Next.js App Router scaffold: home page, dashboard shell, Vitest baseline (`specs/2026-07-02-next-js-scaffold/`). Phase 0 constitution (`specs/mission.md`, `specs/tech-stack.md`, `specs/roadmap.md`) defines the full clinic loop as v1 success.

This phase implements the **complete clinic domain** — SQLite persistence, REST APIs, and dashboard flows for agents, ailments, therapies, and appointments. After merge, staff can run the full loop: register agent → diagnose → prescribe → book.

Stakeholder alignment (from mission):

| Stakeholder | Need this phase addresses |
|-------------|---------------------------|
| Mary | TypeScript APIs, SQLite, reliable data layer |
| Susan | Agents, ailments, therapies, appointment booking (full domain) |
| Steve | Functional dashboard flows in modern browser (polish deferred to Phase 3) |

---

## Scope (in)

### SQLite foundation

- Add `better-sqlite3` dependency and `data/` directory (gitignored DB file, committed migrations)
- Initial migration (schema version tracking)
- `GET /api/health` returns `{ ok: true, db: "connected" }`
- Vitest test for health handler

### Agents

- Schema: `agents` (id, name, model, human_owner, notes, created_at)
- `GET/POST /api/agents`, `GET/PATCH/DELETE /api/agents/[id]`
- Dashboard: list agents, simple create form

### Ailments

- Schema: `ailments` (id, slug, name, description, severity)
- Seed satirical ailments: *Prompt Whiplash*, *Context Amnesia*, and others per roadmap tone
- Schema: `agent_ailments` (agent_id, ailment_id, diagnosed_at, notes)
- API + UI to assign ailment to agent

### Therapies

- Schema: `therapies` (id, slug, name, description, duration_minutes)
- Seed therapies: *Spec Massage*, *Token Detox*, and others per roadmap tone
- Schema: `prescriptions` (agent_id, therapy_id, ailment_id, prescribed_at)
- API + UI to prescribe therapy for agent + ailment

### Appointments

- Schema: `appointments` (id, agent_id, therapy_id, scheduled_at, status, notes)
- `GET/POST /api/appointments`, status updates (scheduled → completed → cancelled)
- Dashboard: book appointment, **list view** (no calendar in this phase)

### UI approach

- **Minimal Tailwind forms** — no shadcn/ui yet (deferred to Phase 3 polish)
- Server components for lists where practical; client components for interactive forms

---

## Scope (out)

| Item | Deferred to |
|------|-------------|
| shadcn/ui components | Phase 3 — Dashboard polish |
| Calendar / week view for appointments | Phase 3 or later |
| Dashboard home counts, empty states, error polish | Phase 3 |
| Full satirical copy pass | Phase 4 |
| CI GitHub Action | Phase 5 |
| `npm run build` as merge gate | Optional later; not required this phase |
| Auth, multi-tenant, production deploy | After v1 |
| Real AI agent / model API integration | Non-goal per mission |

---

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Phase scope | Full Phase 2 in one spec | Single deliverable: runnable clinic loop end-to-end |
| DB access | `better-sqlite3` | Per tech-stack; zero-config local SQLite |
| UI depth | Minimal Tailwind forms | Ship domain fast; polish in Phase 3 |
| Appointment view | List only | Faster to ship; calendar deferred |
| Seed data | Roadmap examples exactly | *Prompt Whiplash*, *Context Amnesia*, *Spec Massage*, *Token Detox*, etc. |
| Seed validation | Vitest asserts seed rows after migration | Prevents empty or wrong seed data |
| Merge validation | Vitest full loop | Health + CRUD APIs + one integration test for clinic loop |
| Package manager | npm (existing `package-lock.json`) | Match repo |
| API style | REST JSON via Next.js Route Handlers | Per tech-stack |
| Migrations | Committed SQL or migration files under repo | Portable, reviewable schema history |

---

## Domain model summary

```
agents ──┬── agent_ailments ── ailments
         ├── prescriptions ── therapies
         │                  └── ailments (linked ailment)
         └── appointments ── therapies
```

**Clinic loop (happy path):**

1. Register agent (name, model, human owner, notes)
2. Diagnose: assign ailment (e.g. *Prompt Whiplash*) to agent
3. Prescribe: assign therapy (e.g. *Spec Massage*) for agent + ailment
4. Book: create appointment linking agent + therapy + scheduled time

---

## Non-goals

- Booth-ready visual polish or responsive layout tuning
- Comprehensive microcopy / toast satire
- Production build CI gate
- Hosted database (Turso/Postgres)

---

## Success statement

After this phase, `npm test` passes including health check, CRUD API tests, seed assertions, and one full-loop integration test. A developer runs `npm run dev`, uses the dashboard to register an agent, assign an ailment, prescribe a therapy, and book an appointment — all persisted in SQLite on disk.
