# Leadpages.com - Rack & Pinion

Powering modern websites with [Sanity](https://www.sanity.io/), [Next.js](https://nextjs.org/docs/), [Tailwind CSS](https://tailwindcss.com/), and opinionated patterns.

> [!WARNING]
>
> #### This Project Contains Private Packages from the Leadpages Team:
>
> - In order to `yarn install` please ensure you add a `.npmrc` file to the root of the project
> - This `.npmrc` file should contain the value from the `NPM_RC` environment variable. This can be pulled from Vercel.
>
> ```
> @lp:registry=https://leadpages.jfrog.io/leadpages/api/npm/npm/
> // contents
> ```

## Explore R&P 🚀

- [Getting Started](#getting-started)
- [The R&P Stack](#the-rp-stack)
- [Commands](#commands)
- [Packages](#packages)
- [Quick Start](#quick-start)
- [Documentation Links](#documentation-links)

# Getting Started

> [!NOTE]
> TLDR; See [Quick Start](#quick-start) below.

# The R&P Stack

Developed from decades of experience building websites for the modern web.

### Core

- [React](https://react.dev/) – Foundation ([gh](https://github.com/facebook/react) • [npm](https://www.npmjs.com/package/react))
- [TypeScript](https://www.typescriptlang.org/) – Typing ([gh](https://github.com/microsoft/TypeScript) • [npm](https://www.npmjs.com/package/typescript))
- [Next.js](https://nextjs.org/) – Platform ([gh](https://github.com/vercel/next.js/) • [npm](https://www.npmjs.com/package/next))
- [Sanity](https://www.sanity.io/) – CMS ([gh](https://github.com/sanity-io/sanity))
- [Vercel](https://vercel.com/) – Infrastructure ([gh](https://github.com/vercel/vercel))
- [Turborepo](https://turbo.build/repo/docs) – Monorepo ([gh](https://github.com/vercel/turborepo) • [npm](https://www.npmjs.com/package/turbo))

### UI & Styling

- [Tailwind CSS](https://tailwindcss.com/) – Styling ([gh](https://github.com/tailwindlabs/tailwindcss) • [npm](https://www.npmjs.com/package/tailwindcss))
- [Radix UI](https://www.radix-ui.com/primitives) – UI Primitives ([gh](https://github.com/radix-ui/primitives))
- [React Icons](https://react-icons.github.io/react-icons/) – Icons ([gh](https://github.com/react-icons/react-icons) • [npm](https://www.npmjs.com/package/react-icons))
- [Embla Carousel](https://www.embla-carousel.com/) – Carousel ([gh](https://github.com/davidjerleke/embla-carousel) • [npm](https://www.npmjs.com/package/embla-carousel))
- [React Select](https://react-select.com/) – Dropdowns ([gh](https://github.com/JedWatson/react-select) • [npm](https://www.npmjs.com/package/react-select))
- [Motion](https://motion.dev/) – Motion & Animation ([gh](https://github.com/motiondivision/motion) • [npm](https://www.npmjs.com/package/motion))
- [LottieFiles](https://lottiefiles.com/) – Complex Animations ([gh](https://github.com/LottieFiles/lottie-react) • [npm](https://www.npmjs.com/package/lottie-react))

### State & Forms

- [Zustand](https://zustand.docs.pmnd.rs/) – State Management ([gh](https://github.com/pmndrs/zustand) • [npm](https://www.npmjs.com/package/zustand))
- [React Hook Form](https://react-hook-form.com/) – Forms ([gh](https://github.com/react-hook-form/react-hook-form) • [npm](https://www.npmjs.com/package/react-hook-form))

### Utilities

- [Lodash](https://lodash.com/) – Utilities ([gh](https://github.com/lodash/lodash) • [npm](https://www.npmjs.com/package/lodash))
- [clsx](https://github.com/lukeed/clsx) – Classnames Utility ([gh](https://github.com/lukeed/clsx) • [npm](https://www.npmjs.com/package/clsx))
- [React Use](https://github.com/streamich/react-use) – React Hooks Collection ([gh](https://github.com/streamich/react-use) • [npm](https://www.npmjs.com/package/react-use))
- [Gearbox Housing ⚡️](https://github.com/gearbox-built/housing) – Utilities & Plugins ([gh](https://github.com/gearbox-built/housing))

### Sanity Plugins

- [Sanity Schema Tool](https://github.com/gearbox-built/sanity-schema-tool) – Schema Utilities ([gh](https://github.com/gearbox-built/sanity-schema-tool) • [npm](https://www.npmjs.com/package/@gearbox-built/sanity-schema-tool))
- [Sanity Path Input](https://github.com/gearbox-built/sanity-path-input) – Custom Path Input ([gh](https://github.com/gearbox-built/sanity-path-input) • [npm](https://www.npmjs.com/package/@gearbox-built/sanity-path-input))
- [Sanity Admin Message](https://github.com/gearbox-built/sanity-admin-message) – Admin Alerts ([gh](https://github.com/gearbox-built/sanity-admin-message) • [npm](https://www.npmjs.com/package/@gearbox-built/sanity-admin-message))
- [Sanity Plugin Media](https://github.com/sanity-io/sanity-plugin-media) – Asset Management ([gh](https://github.com/sanity-io/sanity-plugin-media) • [npm](https://www.npmjs.com/package/sanity-plugin-media))
- [Sanity Plugin SEO Pane](https://github.com/sanity-io/sanity-plugin-seo-pane) – SEO Metadata ([gh](https://github.com/sanity-io/sanity-plugin-seo-pane) • [npm](https://www.npmjs.com/package/sanity-plugin-seo-pane))
- [Sanity Plugin Iframe Pane](https://github.com/sanity-io/sanity-plugin-iframe-pane) – Live Previews ([gh](https://github.com/sanity-io/sanity-plugin-iframe-pane) • [npm](https://www.npmjs.com/package/sanity-plugin-iframe-pane))
- [Sanity Table](https://github.com/sanity-io/table) – Table Input Field ([gh](https://github.com/sanity-io/table) • [npm](https://www.npmjs.com/package/@sanity/table))
- [Sanity Vision](https://www.sanity.io/docs/vision) – Query Playground ([gh](https://github.com/sanity-io/vision) • [npm](https://www.npmjs.com/package/@sanity/vision))

# Commands

ie. `yarn [command]`

- `start` – Starts project in development mode
- `build` – Builds a static project bundle for production use
- `build:web` – Builds Next.js app only
- `serve` – Serves `build` or `analyze` outputs locally
- `lint` – Run linters across the project

**Optimization**

- `analyze` – Runs `build:web` with the bundle analyzer

**Cache Blasting**

- `blast` – Blasts all `node_modules` and Next.js cache
- `blast:node` – Blasts all `node_modules`
- `blast:next` – Blasts all Next.js cache
- `blast:dist` – Blasts compiled `/packages` output where implemented
- `blast:turbo` – Blasts Turborepo cache
- `reset` — ⚠️ **Use with caution:** Runs `blast` and removes the `yarn.lock`

## Document Migration

- `docs:map` – Runs scripts from the migration package using the Sanity CLI and Node.js to iterate over and patch documents in Sanity.
- `docs:import` – Executes scripts from the migration package to import documents and assets into Sanity using the Sanity CLI.
- `docs:delete` – ⚠️ **Use with caution:** Deletes specified document types from Sanity.

# Packages

Workspace specific commands need to be formatted as `yarn workspace [workspace] [command]` (eg. `yarn workspace web start`)

## Next.js – `web`

Main web application – `yarn workspace web [command]`

- `start` – Starts Next.js app in local dev mode
- `build` – Builds static Next.js app
- `build:favicon` – Generates favicon
- `build:sitemap` – Generates app sitemap
- `lint` – Runs Next.js linter
- `analyze` – Runs `build:web` with the bundle analyzer

## Studio – `studio`

Sanity Studio – `yarn workspace studio [command]`

- `start` – Starts Studio in local dev mode
- `build` – Builds static Studio app

## Icons – `icons`

SVG → Icon generator – `yarn workspace icons [command]`

- `start` – Builds icons on Turborepo `start`
- `build` – Builds icons
- `clean` – Cleans build files

## Indices – `indices`

Index generator – `yarn workspace indices [command]`

- `build` – Builds indices

## Client - `client`

Global Sanity client – `yarn workspace client [command]`

- `start` – Builds and watches client
- `build` – Builds client

## Bolts - `bolts`

Local development space for `@gearbox-built/bolts` type of utilities and plugins – `yarn workspace bolts [command]`

## Config - `config`

Global R&P configuration – `yarn workspace config [command]`

## Getting Started

### From an existing project

#### 1. Clone the repo

```
git clone [...]
```

#### 2. Ensure you are on Node 20+

#### 3. Connect the repo to Vercel using the [Vercel CLI](https://vercel.com/docs/cli):

```
vercel link
```
NOTE: To properly work, you must link to the `leadpages-rack-pinion` project.

#### 4. Pull the env vars from production from Vercel

```
vercel env pull --environment production
```

#### 5. Create a .npmrc in the root folder with the contents of the NPM_RC env variable [read more](https://vercel.com/guides/using-private-dependencies-with-vercel)

```
source .env.local
echo "$NPM_RC" > ./.npmrc
```

#### 6. Install dependencies, build indices and start development

```
yarn install && yarn workspace indices build && yarn start
```

## 🚀 Release Checklist

1. **Merge to `develop`**
   - Once your PR has been approved, merge your changes into `develop`.
   - ✅ Always _"Squash and Merge"_ to maintain a clean history.

2. **Test in Development**
   - After deployment, verify your changes in the [development environment](https://leadpages-rack-pinion.vercel.app/).

3. **Create a Local Release Branch**
   - From the recently merged `develop` branch, create:
     ```bash
     git checkout -b release/1.27.0
     ```
   - ⚠️ This branch does **not** need to be pushed to GitHub.

4. **Bump Version & Tag**
   - Update the version in the root `package.json`.
   - Create a tag using:
     ```bash
     yarn version --minor
     ```
     - Use `--patch` for hotfixes or `--major` for breaking changes.

5. **Merge Release to `master`**
   - Merge the release branch into `master` with a commit message like:
     ```
     v1.27.0
     ```

6. **Push `master` and Tags**
   - Run:
     ```bash
     git push origin master --tags
     ```

7. **Test in Production**
   - After deployment, verify your changes in the [production environment](https://www.leadpages.com/).

8. **Create GitHub Release**
   - In GitHub, create a new release for the tag using the **Generate release notes** option.

9. **Back-Merge `master` into `develop`**
   - Ensure that any production hotfixes are reflected in `develop`.

10. **Push `develop`**
    - Run:
      ```bash
      git push origin develop
      ```

11. **Announce the Release**
    - Publish the release in the **#leadpages** Slack channel for team-wide visibility.

12. **Celebrate!** 🎉

# Documentation Links

- [Next](https://nextjs.org/docs/)
- [Sanity](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Sanity CLI](https://www.sanity.io/docs/)
- [Vercel Cli](https://vercel.com/docs/cli)

<img src="https://user-images.githubusercontent.com/4299551/229001290-f1b4d3f8-5eeb-4941-837d-787a608a548c.svg" width="300">
