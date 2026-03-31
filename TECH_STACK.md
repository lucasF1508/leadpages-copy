# Technology Stack - Leadpages Marketing Site

Quick reference of the real project stack for interview walkthroughs.

## Runtime and monorepo

- Node.js: `>=20.0.0`
- Package manager: `yarn@1.19.1`
- Monorepo orchestration: Turborepo (`turbo`)
- Structure: workspaces in `apps/*` and `packages/*`

## Web frontend

- Framework: Next.js (`^14.2.35`)
- UI: React (`18`) + React DOM (`18`)
- Language: TypeScript (across most of the codebase)
- Styling: Tailwind CSS (`3`), Stitches, variant utilities
- Motion/dynamic UI: Framer Motion, Motion, Lottie, Embla Carousel

## CMS and content

- CMS: Sanity (`@sanity/client`, `next-sanity`)
- Rich content and utilities: `@sanity/block-content-to-react`, `@portabletext/block-tools`
- Dedicated Studio workspace: `packages/studio`

## State, data, and integrations

- Client state: Zustand
- Forms: React Hook Form
- Data fetching: SWR
- HTTP client: Axios
- Marketing integrations: HubSpot, Mailchimp, SendGrid
- Security/bot protection: hCaptcha and reCAPTCHA

## Tooling and quality

- Linting: ESLint (Next + Airbnb + React/TS plugins)
- Formatting: Prettier (+ Tailwind plugin)
- Build and analysis: Next build, bundle analyzer
- Images: Sharp

## Infrastructure and deployment

- Hosting/deploy: Vercel
- Analytics/performance: `@vercel/analytics`, `@vercel/speed-insights`
- Environment variables and project linking via Vercel CLI

## Relevant internal monorepo packages

- `apps/web`: main website application
- `packages/studio`: Sanity Studio configuration
- `packages/client`: shared client utilities
- `packages/icons`, `packages/indices`, `packages/redirects`, and others

## Useful commands for technical demos

- Install dependencies: `yarn install`
- Start project: `yarn start`
- Web only (workspace): `yarn workspace web start`
- Lint: `yarn lint`
- Build web app: `yarn build:web`
