# CSUtilities

A single-page reference site for computer science students: LeetCode problems tagged by company, CS university rankings, tech company rankings, and sample internship, new grad, and hackathon listings. Live at https://cs-utilities.vercel.app.

## Features

- DSA practice: LeetCode problems with difficulty, topics, and the companies known to ask them, filterable by name, topic, difficulty, and company.
- University rankings: 50 CS programs across the US, UK, Canada, Germany, and Switzerland, with rank, prestige score, and a country filter.
- Company rankings: 50 tech companies with prestige score, industry, and location.
- Jobs and Hackathons tabs with search and filters over example listings.
- Support tab linking to email, GitHub Issues, and GitHub Discussions.

All data is static and ships with the app. The problem set is small (10 problems in `src/data/mockData.ts`), and the job and hackathon listings are hardcoded examples inside their components, not a live feed.

## Tech stack

- Next.js 16 (App Router), React 18, TypeScript
- Tailwind CSS 3, shadcn/ui components on Radix UI
- TanStack Query, Vercel Analytics

## Getting started

Requires Node 20 (the version CI uses). No environment variables are needed to run the site.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Checks:

```bash
npm run lint
npm run type-check
npm run build
```

There is no test suite. The `dev:admin`, `build:admin`, and `db:*` scripts in `package.json` `cd` into a sibling `../CSUtilitiesAdmin` project that is not part of this repository; they will fail unless you have that project checked out next to this one.

## How it works

- `app/page.tsx` is the whole UI: a tab switcher (`src/components/Navigation.tsx`) that renders one component per tab from `src/components/` (`DSAPractice`, `UniversityRankings`, `CompanyRankings`, `Jobs`, `Hackathons`, `Support`).
- `src/data/mockData.ts` holds the problems, universities, and companies. The ranking components import it directly; `DSAPractice` fetches `/api/problems` (via `src/api/problems.ts`), which serves the same data.
- `app/api/` has route handlers for problems, universities, and companies backed by `mockData.ts`. The `internships` and `hackathons` routes currently return empty arrays.
- `prisma/schema.prisma` and `prisma/seed.ts` describe a PostgreSQL schema intended for the separate admin project. This app does not connect to a database.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/opengraph-image.tsx`, and `src/lib/metadata.ts` handle SEO metadata.

## Contributing

Issues and pull requests are welcome. Before opening a PR, run `npm run lint`, `npm run type-check`, and `npm run build`; CI runs the same checks.

The project was started from a Lovable (gpt-engineer-app) scaffold, which accounts for the two bot commits in the history.

## License

MIT, see [LICENSE](LICENSE).
