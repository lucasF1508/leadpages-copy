export const getMediaQueries = (breakpoints) =>
  Object.assign(
    {},
    ...Object.keys(breakpoints).map((key) => ({
      [`>${key}`]: `(width >= ${breakpoints[key]}px)`,
      [`<${key}`]: `(width < ${breakpoints[key]}px)`,
    }))
  )

export const sortBreakpoints = (breakpoints) =>
  Object.keys(breakpoints)
    .map((breakpoint) => ({
      key: breakpoint,
      value: breakpoints[breakpoint],
    }))
    .sort((a, b) => (a.value > b.value ? 1 : -1))

export const getRootBreakpoints = (breakpoints) =>
  sortBreakpoints(breakpoints)
    .map(({ key }, index) =>
      index === 0
        ? {
            ['--current-breakpoint']: key,
          }
        : {
            [`@>${key}`]: {
              ['--current-breakpoint']: key,
            },
          }
    )
    .reduce((obj, field) => ({ ...obj, ...field }), {})

export default getMediaQueries
