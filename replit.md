# Opporly AI — Opportunity Match AI

An opportunity-matching dashboard for students and professionals. It analyzes active local listings against a profile, explains potential fit, and balances match strength with deadline urgency.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (managed workflow supplies its port)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Optional env: `OPENAI_API_KEY` — enables live AI analysis; browsing, reminders, and listing management remain available without it.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/student-opportunities/src/App.tsx` — dashboard, profile, AI matching, reminders, and opportunity management
- `artifacts/student-opportunities/src/data.ts` — starter demo opportunities and browser-persistence helpers
- `artifacts/student-opportunities/src/index.css` — app theme and responsive styling

## Architecture decisions

- Profiles, saved reminders, and opportunity listings use browser local storage; there are no accounts or cross-device sync.
- AI analysis sends profile fields except the name, plus active listing details, to OpenAI only when the user requests analysis.
- Starter opportunities are illustrative sample listings and must be verified with the organizer before anyone relies on their dates, benefits, or eligibility.

## Product

Students and professionals can save a profile containing bio, education, profession, skills, interests, achievements, and locations; analyze scholarships, events, competitions, conferences, hackathons, grants, and career opportunities; review AI match and eligibility guidance; prioritize upcoming deadlines; and save in-app reminders. A listings manager supports creating, editing, archiving, restoring, and deleting opportunity entries.

## User preferences

Keep the experience user-friendly and easy for students and staff to manage.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
