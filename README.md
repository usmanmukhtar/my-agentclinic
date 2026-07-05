# AgentClinic

A satirical wellness clinic for overworked AI agents. Staff register agents, diagnose ailments, prescribe therapies, and book appointments.

## Development

```bash
npm install
npm test
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the home page, or [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the staff dashboard shell.

Run `npm run test:watch` during development to re-run Vitest on file changes. Tests live under `tests/` (Phase 1 scaffold suite in `tests/scaffold/`). Phase validation docs in `specs/*/validation.md` list which checks must pass before merge.

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.
