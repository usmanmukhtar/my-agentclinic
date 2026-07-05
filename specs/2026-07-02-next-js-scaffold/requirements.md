# Requirements — Phase 1: Next.js Scaffold

**Roadmap ref:** Phase 1 — Next.js scaffold  
**Branch:** `phase-1-next-js-scaffold`  
**Date:** 2026-07-02

---

## Context

AgentClinic currently has a bare TypeScript scaffold (`src/index.ts`, `tsc` build). Phase 0 constitution (`specs/mission.md`, `specs/tech-stack.md`, `specs/roadmap.md`) is complete. This phase replaces the bare scaffold with a runnable Next.js App Router app — the foundation for dashboard, API routes, and SQLite in later phases.

Stakeholder alignment (from mission):

| Stakeholder | Need this phase addresses |
|-------------|---------------------------|
| Mary | TypeScript strict, server-side TS |
| Steve | Modern browser UI via React + Tailwind |
| Susan | Shell for future agents/ailments/therapies/appointments flows |

---

## Scope (in)

- **Next.js 15+** App Router project structure
- **TypeScript strict** mode (preserve existing strictness)
- **Tailwind CSS** for styling
- **Home page** (`/`) with AgentClinic name, one playful tagline, placeholder body text
- **Dashboard shell** (`/dashboard`) — empty route with nav placeholder (no data, no API)
- **Basic layout** — shared root layout; minimal nav between home and dashboard
- **Dev workflow** — `npm run dev` serves both routes
- **Vitest baseline** — `npm test` validates scaffold branding and nav routes (`lib/site.ts` + tests per `specs/tech-stack.md`)

---

## Scope (out)

Deferred to later phases per stakeholder decisions:

| Item | Deferred to |
|------|-------------|
| shadcn/ui components | Phase 7 (dashboard polish) or when UI complexity warrants |
| ESLint + Prettier | Early phase before API ships (not this phase) |
| Keeping `src/index.ts` dual scaffold | N/A — replace bare `tsc` entry with Next.js |
| Full satirical copy pass | Phase 8 |
| SQLite, API routes, entities | Phases 2–6 |
| Production build gate | Not required for Phase 1 merge (dev-only validation) |
| Responsive polish / booth-ready layout | Phase 7 |

---

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Scope depth | Minimal scaffold | Ship runnable shell fast; avoid premature UI library setup |
| Branding tone | Light touch | Name + tagline + placeholder body; save full satire for Phase 8 |
| Merge validation | Dev server + Vitest | `npm run dev` proves home + dashboard; `npm test` proves scaffold contracts |
| Package manager | npm (existing `package-lock.json`) | Match repo; tech-stack allows pnpm or npm |
| Framework | Next.js App Router | Per `specs/tech-stack.md` |
| Styling | Tailwind CSS | Per tech stack; fast iteration for Steve's marketing bar |

---

## Non-goals

- Real clinic data or forms
- Authentication
- Database or health-check API
- Demo-ready polish or comprehensive microcopy

---

## Success statement

After this phase, a developer runs `npm test` and `npm run dev`, opens the browser, sees AgentClinic branding on `/`, navigates to `/dashboard`, and finds an empty staff shell ready for Phase 2 (SQLite) and Phase 3 (Agents).
