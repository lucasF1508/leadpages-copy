import merge from 'lodash/merge'
import spacingValues from '@design/tokens/spacing'

const createBoxTokens = ({ multiplier = 1, property = 'p', spacingAxis }) => {
  const { spacingX, spacingY } = spacingValues
  const stepValue = 0.5
  const spacing = []

  if (
    (['l', 'r', 'x'].some((dir) => property.includes(dir)) &&
      property.length === 2) ||
    spacingAxis === 'x'
  ) {
    spacing.push(spacingX)
  }

  if (
    (['t', 'b', 'y'].some((dir) => property.includes(dir)) &&
      property.length === 2) ||
    spacingAxis === 'y'
  ) {
    spacing.push(spacingY)
  }

  return spacing
    .map((spacingValue) =>
      Object.keys(spacingValue)
        .map((key) => {
          const value = spacingValue[key] * Math.abs(multiplier) * stepValue
          const query = key === 'initial' ? key : `@>${key}`
          const prefix = multiplier < 0 ? '-' : ''

          return {
            [query]: {
              [property]: `${prefix}${value}rem`,
            },
          }
        })
        .reduce(
          (object, field) => ({
            ...object,
            ...field,
          }),
          {}
        )
    )
    .reduce(
      (object, field) => ({
        ...object,
        ...field,
      }),
      {}
    )
}

export const getBoxSpacing = (orgValues) => {
  const values = Array.isArray(orgValues) ? orgValues : [orgValues]
  const { initial, ...spacings } = merge(
    ...values.map((value) => createBoxTokens(value))
  )

  return {
    ...initial,
    ...spacings,
  }
}

export default getBoxSpacing
