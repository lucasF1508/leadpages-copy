# studio

## 4.1.0

### Minor Changes

- Rack & Pinion v4.1.0 - TypeScript refactor

## 4.0.0

### Major Changes

- 1742572d: Rack & Pinion v3

  Design system overhaul, simplification of the queries, and leveraging all modern components provided by our infrastructure.

  🎉 🎉 🎉 Thank you team, This was a big achievement and we did it together 🎉 🎉 🎉

  Notables

  - Removed `stitches` in favor of `tailwind`. Refactored all components and updated styles.
  - Removed the query parser, and opted to prep the content prior to the query to get the most out of performance while keeping it simple.
  - Removed storybook. Not typically used for our sites, can be added if required by a project.
  - Abstracted studio plugins top their own packages and added them to [Housing](https://github.com/gearbox-built/housing)
  - Upgraded to Sanity v3
  - Added a live preview mode.
  - Upgraded to Next 13
  - Updated Image component to Next 13
  - Removed the dependency to expand assets in queries
  - Removed the dependency to shape links in queries
  - Added a new component query pattern. Component-level queries will live with their components and be imported/exported from the `Rack`.
  - Updated Font loading to Next 13's component
  - Bumped all packages. (Aside from `find-up`)
