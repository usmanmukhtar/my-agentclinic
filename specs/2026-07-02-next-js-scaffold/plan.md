# Plan — Phase 1: Next.js Scaffold

Numbered task groups. Complete in order; each group leaves repo in a consistent state.

---

## 1. Replace bare TypeScript scaffold with Next.js

- [ ] Add Next.js 15+, React, React DOM, and Tailwind dependencies
- [ ] Add Next.js config (`next.config.ts` or `.mjs`)
- [ ] Update `tsconfig.json` for Next.js (App Router paths, strict, `next` plugin)
- [ ] Add `app/` directory with root `layout.tsx` and `page.tsx`
- [ ] Add Tailwind config + `postcss.config` + global styles (`app/globals.css`)
- [ ] Update `package.json` scripts: `dev`, `build`, `start` (Next.js); remove or replace bare `tsc`-only `build`
- [ ] Remove obsolete `src/index.ts` and `dist/` output convention (or exclude from build)
- [ ] Update `.gitignore` for Next.js artifacts (`.next/`, etc.)

**Checkpoint:** `npm run dev` starts without errors; `/` returns a page (even if minimal).

---

## 2. Home page — light branding

- [ ] Build `/` (`app/page.tsx`) with:
  - AgentClinic product name (visible heading)
  - One playful, in-universe tagline (satirical but short)
  - Placeholder body text (1–2 sentences; not full Phase 8 copy)
- [ ] Apply Tailwind for clean, modern typography (Steve bar: readable in modern browser)
- [ ] Optional: link or CTA pointing staff toward dashboard (e.g. "Enter clinic" → `/dashboard`)

**Checkpoint:** Home page communicates what AgentClinic is at a glance without over-investing in copy.

---

## 3. Dashboard shell + navigation

- [ ] Add `app/dashboard/page.tsx` — empty staff area with heading (e.g. "Dashboard" or "Clinic floor")
- [ ] Add placeholder copy indicating future agents/appointments UI (no forms or data)
- [ ] Shared nav in root layout (or small nav component): Home ↔ Dashboard
- [ ] Consistent layout wrapper (header/nav + main content area)

**Checkpoint:** `/dashboard` loads; nav moves between `/` and `/dashboard` without full page breakage.

---

## 4. Dev workflow & README touch-up

- [ ] Verify `npm run dev` binds and serves `/` and `/dashboard`
- [ ] Update `README.md` with dev command and route summary (1–2 lines)
- [ ] Confirm no secrets or env requirements for this phase

**Checkpoint:** Newcomer can clone, `npm install`, `npm run dev`, and browse both routes.

---

## 5. Spec alignment & branch hygiene

- [ ] Implementation matches `requirements.md` decisions (minimal scope, light branding)
- [ ] Run through `validation.md` checklist before merge
- [ ] Merge `phase-1-next-js-scaffold` when validation passes

**Checkpoint:** Phase 1 done; roadmap Phase 2 (SQLite foundation) is unblocked.
