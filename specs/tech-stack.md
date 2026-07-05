# Tech Stack

Server-side TypeScript throughout. **Next.js (App Router)** is the recommended framework — it satisfies Mary's TypeScript requirement, Steve's modern-browser UI, and a single-repo full-stack shape suitable for demos and coursework.

## Core

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Language** | TypeScript | Stakeholder requirement; shared types across UI and API |
| **Framework** | Next.js 15+ (App Router) | Server-side TS, React UI, API routes, fast local dev, familiar to students |
| **Runtime** | Node.js 20+ LTS | Stable, well-supported for Next.js |
| **Database** | SQLite | Zero-config, portable, ideal for local dev, coursework, and booth demos |
| **DB access** | `better-sqlite3` or `libsql` + lightweight query layer | Simple migrations, no external DB server |
| **Styling** | Tailwind CSS | Fast iteration, modern look for Steve's marketing bar |
| **UI components** | shadcn/ui (optional) | Accessible primitives, dashboard-friendly |

## Architecture

```
Browser (React / Next.js client components)
        ↓
Next.js App Router (server components + Server Actions where fit)
        ↓
API routes / route handlers (/app/api/...)
        ↓
SQLite (single file, e.g. data/agentclinic.db)
```

- **Dashboard** — App Router pages under `/dashboard` (or similar); server components for data-heavy lists, client components for interactive forms.
- **API** — Next.js Route Handlers for REST-style JSON endpoints consumed by the dashboard and future clients.
- **Data** — SQLite schema for agents, ailments, therapies, appointments; migrations checked into repo.

## Tooling

| Tool | Purpose |
|------|---------|
| `pnpm` or `npm` | Package management |
| `tsc` / Next.js build | Type checking and production build |
| ESLint + Prettier | Consistency (add in early roadmap phase) |
| **Vitest** | Automated validation — unit/integration tests for APIs, DB helpers, and critical UI logic |

### Validation (Vitest)

Phase specs (`specs/*/validation.md`) define merge gates. **Vitest** is the standard runner for automated checks; manual smoke steps stay where UI/browser verification is required.

| Script | Command | When to use |
|--------|---------|-------------|
| `npm test` | `vitest run` | Merge gate / CI — single pass, non-interactive |
| `npm run test:watch` | `vitest` | Local dev — re-run on file change |

Add tests alongside features (e.g. `/api/health` in Phase 2). Each phase validation doc should list which `npm test` cases must pass before merge.

Test files live under `tests/` — grouped by phase or domain (e.g. `tests/scaffold/`, future `tests/api/`). Shared setup in `tests/setup.ts`.

## Deployment (later)

Not required for v1 local/demo use. When needed:

- **Vercel** — Natural fit for Next.js
- **SQLite** — Use Turso/libSQL, or swap to PostgreSQL with minimal schema change

## Explicit non-choices (v1)

- No separate Express/Fastify server — Next.js API routes keep the stack small
- No PostgreSQL/Redis until deployment demands it
- No GraphQL — REST/JSON is enough for dashboard + demos

## Environment

```bash
DATABASE_URL=file:./data/agentclinic.db   # or path convention
NODE_ENV=development
```

Secrets and `.env` files stay out of version control.
