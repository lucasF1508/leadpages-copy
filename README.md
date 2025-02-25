<img src="https://user-images.githubusercontent.com/4299551/229001290-f1b4d3f8-5eeb-4941-837d-787a608a548c.svg" width="300">

# Rack & Pinion - Next.js app

A custom CMS app built with [Sanity](https://www.sanity.io/), [Next JS](https://nextjs.org/docs/) and [Stitches](https://stitches.dev/).

## Requirements

To create a new Sanity instance install the [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) and run `sanity init`

After initializing the project remove the entire boilerplate project created by the CLI from the root directory and clone the contents of Rack & Pinion repo in.

Once Rack & Pinion repo contents have been cloned into your project directory rename the example.env file at the root of the project to .env

Inside .env Sanity Studio Project ID, from the [Sanity dashboard](https://www.sanity.io/manage) to the SANITY_STUDIO_API_PROJECT_ID environment variable.

From the root of the project make sure all dependencies have been installed before moving on, ensure you have used the preferred package manager [Yarn](https://yarnpkg.com/en/docs/install).

### Build commands

| Command           | Description                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | --- |
| `yarn start`      | Starts Next.js and Sanity Studio in development mode                                                        |     |
| `yarn build`      | Builds the Next.js application and the current Sanity configuration to a static bundle for production usage |
| `yarn serve`      | Starts a Next.js production server and serves the output of `yarn build` or `yarn analyze`.                 |
| `yarn link`       | Runs the Next.js linter.                                                                                    |
| `yarn blast`      | Blasts all `node_modules` and Next.js cache.                                                                |
| `yarn blast:node` | Blasts all `node_modules`.                                                                                  |
| `yarn blast:next` | Blasts Next.js cache.                                                                                       |
| `yarn analyze`    | Builds the Next.js application and runs the Webpack budle analyzer.                                         |
| `yarn reset`      | Runs `yarn blast` and removes the `yarn.lock` file. **⚠️ Use with caution ⚠️**                              |

## Getting Started

### From an existing project

#### 1. Clone the repo

```
git clone [...]
```

#### 2. Install dependencies

```
yarn install
```

#### 3. Link to Vercel project

```
vercel link
```

#### 4. Pull environment variables

```
vercel env pull
```

#### 5. Start development

```
yarn start
```

## Cutting a Release

1. Once your PR has been approved, merge your changes into `develop`.
   1. Always "squash and merge" to maintain a clean history
1. Test your changes in [the development environment](https://leadpages-rack-pinion.vercel.app/) once they've deployed.
1. Create a local release branch `release/1.27.0` (or whatever the next version is) from the recently merged `develop` branch
   1. ⚠️ Note this branch doesn't need to be pushed back up to GitHub
1. Bump the version in the root `package.json` and create a tag (e.g. `v1.27.0`)
   1. `yarn version --mior` (or `--patch` for hotfixes / `--major` for breaking changes)
1. Merge the release branch into `master` (commit message `v1.27.0`)
1. Push up `master`, push up tags.
   1. `git push origin master --tags`
1. Test your changes in [the production environment](https://www.leadpages.com/) once they've deployed.
1. Create a new release in GitHub for the tag using the `Generate release notes`
1. Merge `master` back to `develop`
1. Push `develop` up.
1. Publish the release to the **#leadpages** channel in Slack for team-wide visibility.
1. Celebrate 🎉

### Documentation Links

- [Next](https://nextjs.org/docs/)
- [Sanity](https://www.sanity.io/)
- [Stitches](https://stitches.dev/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Sanity CLI](https://www.sanity.io/docs/)

_Built for speed by the Gearbox Team_:zap:
