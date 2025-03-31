import type { PluginAPI } from 'tailwindcss/types/config'
import merge from 'lodash/merge'
import plugin from 'tailwindcss/plugin'

type Theme = PluginAPI['theme']

const getDefaultValues = ({
  theme,
  values = [],
}: {
  theme: Theme
  values: string[]
}) =>
  Object.keys(
    values.reduce(
      (obj, key) => ({
        ...obj,
        ...(theme(key) || {}),
      }),
      {}
    )
  ).reduce((obj, key) => ({ ...obj, [key]: key }), {})

const getTypeToken = ({
  keys = [],
  theme,
  value,
}: {
  keys: string[]
  theme: Theme
  value: string
}): Record<string, string> | undefined => {
  const typeValue = keys.reduce((obj, key) => {
    const tokens = theme(key) || {}
    return tokens[value] || obj
  }, {})

  return Object.entries(typeValue).length > 0 ? typeValue : undefined
}

const getTypeTokens = ({
  keys = [],
  theme,
  value,
}: {
  keys: string[]
  theme: Theme
  value: string
}) => {
  const tokens = keys
    .map((key) => getTypeToken({ keys: [key], theme, value }))
    .filter(Boolean)
  const token = tokens.reduce((obj, value) => merge(obj, value), {})

  return token || undefined
}

const getStyles = ({
  theme,
  token,
}: {
  theme: Theme
  token: Record<string, any>
}) => {
  const screens = Object.keys(theme('screens'))
  return Object.keys(token).reduce((obj, key) => {
    if (screens.includes(key)) {
      return {
        ...obj,
        [`@media (min-width: ${theme(`screens.${key}`)})`]: token[key],
      }
    }

    return {
      ...obj,
      [key]: token[key],
    }
  }, {} as any) // TODO: CSSRuleObject
}

export const type = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      ['type-size']: (value) => {
        const token = getTypeToken({
          keys: ['typeSizes'],
          theme,
          value,
        })

        return token ? getStyles({ theme, token }) : undefined
      },
    },
    {
      values: getDefaultValues({
        theme,
        values: ['typeSizes'],
      }),
    }
  )
  matchUtilities(
    {
      ['type-style']: (value) => {
        const token = getTypeToken({
          keys: ['typeStyles'],
          theme,
          value,
        })

        return token ? getStyles({ theme, token }) : undefined
      },
    },
    {
      values: getDefaultValues({
        theme,
        values: ['typeStyles'],
      }),
    }
  )
  matchUtilities(
    {
      type: (value) => {
        const token = getTypeTokens({
          keys: ['typeStyles', 'typeSizes'],
          theme,
          value,
        })

        return token ? getStyles({ theme, token }) : undefined
      },
    },
    {
      values: getDefaultValues({
        theme,
        values: ['typeStyles', 'typeSizes'],
      }),
    }
  )
})
