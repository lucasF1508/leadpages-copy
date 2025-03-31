import plugin from 'tailwindcss/plugin'
import { sortScreensBySize } from '../utils/sortScreensBySize'

const values = {
  bottom: ['bottom'],
  left: ['left'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mr: ['marginRight'],
  mt: ['marginTop'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  pr: ['paddingRight'],
  pt: ['paddingTop'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
  right: ['right'],
  top: ['top'],
}

const getAxis = (properties: string[]) =>
  properties.some((prop) =>
    ['top', 'bottom'].some((direction) =>
      prop.toLowerCase().includes(direction)
    )
  )
    ? 'y'
    : 'x'

const getProperties = (value: string | string[]) => {
  if (Array.isArray(value))
    return {
      axis: getAxis(value),
      multiplier: 1,
      properties: value,
    }

  const [property, multiplier = 1] = value.replace(/\([^()]*\)/g, '').split('*')
  const properties = values[property as keyof typeof values] || [property]
  const [, params = ''] = /\(([^)]+)\)/.exec(value) || []
  const [, axis] = params.match(/\|([xy])/) || [
    ,
    ['x', 'y'].some((_axis) => _axis === params) ? params : undefined,
  ]
  const [type] = params.replace('|', '').split(/[xy]/) || [undefined]

  return {
    axis: axis || getAxis(properties),
    multiplier,
    properties,
    type: type || undefined,
  }
}

const getPropertyStyles = (
  properties: string[],
  size: string,
  multiplier: number
) =>
  properties.reduce(
    (styles, property) => ({
      ...styles,
      [property]: multiplier !== 1 ? `calc(${size} * ${multiplier})` : size,
    }),
    {}
  )

/**
 * Tailwind Box utility
 *
 * @example `box-mt` will apply token values from `pinion.y` to `margin-top`
 * @example `box-top` will apply token values from `pinion.y` to `top`
 * @example `box-left` will apply token values from `pinion.x` to `left`
 * @example `box-px` will apply token values from `pinion.x` to `padding-left` and `padding-right`
 * @example `box-[mt*2]` will apply token values from `pinion.y` to `margin-top` and multiply by `2`
 * @example `box-[left(y)*2]` will apply token values from `pinion.y` to `left` and multiply by `2`
 * @example `box-[mb(section)]` will apply token values from `section.y` to `margin-bottom`
 * @example `box-[pl(section)]` will apply token values from `section.x` to `padding-left`
 * @example `box-[pl(section|y)]` will apply token values from `section.y` to `padding-left`
 * @example `box-[top(component|x)*1.5]` will apply token values from `component.x` to `top` and multiply by `1.5`
 *
 * @see `tokens/box.ts` for token values
 */
export const box = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      box: (value) => {
        const {
          axis,
          multiplier,
          properties,
          type = 'pinion',
        } = getProperties(value)

        const spacing = theme('box') || {}
        const screens = theme('screens') || {}

        const styles = Object.keys(spacing[type][axis])
          .sort(sortScreensBySize)
          .reduce(
            (styles, key, index) => ({
              ...styles,
              ...(key === 'base' || index === 0
                ? getPropertyStyles(
                    properties,
                    spacing[type][axis][key],
                    multiplier as number
                  )
                : {
                    [`@media (min-width: ${screens[key]})`]: getPropertyStyles(
                      properties,
                      spacing[type][axis][key],
                      multiplier as number
                    ),
                  }),
            }),
            {}
          )

        return styles
      },
    },
    {
      values,
    }
  )
})
