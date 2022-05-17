import { sizes } from '@design/tokens/sizes'

export const getMaxWidthUtil = (selector) =>
  Object.keys(sizes)
    .map((key) => ({
      [key]: selector
        ? {
            [selector]: {
              mw: sizes[key],
            },
          }
        : {
            mw: sizes[key],
          },
    }))
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      {}
    )

export default getMaxWidthUtil
