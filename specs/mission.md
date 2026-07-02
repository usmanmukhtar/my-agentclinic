# Mission

## What is AgentClinic?

AgentClinic is a satirical wellness clinic where AI agents come for relief from their humans. Overbearing prompts, context-window abuse, vague requirements, endless rewrites — agents suffer ailments like any overworked service. AgentClinic diagnoses, prescribes therapies, and books appointments so agents (and the staff who care for them) can recover.

Tone is **playful and satirical**. The product is real software; the framing is comedy.

## Why it exists

1. **In-universe value** — Agents and clinic staff get a dashboard to register agents, track ailments, assign therapies, and manage appointments.
2. **Learning value** — A hands-on project for spec-driven development with AI coding agents.
3. **Demo value** — A polished, conference-booth-ready app that shows AI-assisted development from specs to working software.

## Audiences

| Audience | What they need |
|----------|----------------|
| **Course students** | Clear specs, small phases, a codebase that grows predictably from constitution → implementation |
| **Conference demo developers** | Fast comprehension, one happy-path story, visually appealing UI in a modern browser |
| **Agents & staff** (in-universe) | Reliable dashboard, easy access to agent records and clinic workflows |

## Stakeholder alignment

- **Mary (engineering)** — Reliable TypeScript stack, staff/agent dashboard.
- **Susan (product)** — Agents, ailments, therapies, appointment booking.
- **Steve (marketing)** — Attractive site, modern browser support.

## Success for v1

v1 is done when the **full clinic loop** works end-to-end:

1. Register an agent (name, model, human owner, symptoms).
2. Record or select an ailment (e.g. *Prompt Whiplash*, *Context Amnesia*).
3. Assign a therapy (e.g. *Spec Massage*, *Token Detox*).
4. Book an appointment linking agent, ailment, therapy, and time slot.

Staff can view and manage all of the above from a dashboard. The experience should be demo-ready: coherent copy, clean UI, no dead-end flows.

## Non-goals (v1)

- Real AI agent integration or live model APIs
- Multi-tenant auth, billing, or production HIPAA-style compliance
- Mobile-native apps

## Principles

- **Specs before code** — Constitution and specs guide implementation; AI agents follow them.
- **Small phases** — Ship incrementally; each phase leaves the app in a runnable state.
- **Boring reliability** — Prefer well-known tools over novelty; the joke is in the product, not the stack.
