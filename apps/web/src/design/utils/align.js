import { align } from '@design/tokens/align'

export const getAlignment = (value) => align[value]
export const getAlignmentUtil = (selector) =>
  Object.keys(align)
    .map((key) => ({
      [key]: selector
        ? {
            [selector]: align[key],
          }
        : align[key],
    }))
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      {}
    )

export default getAlignment
