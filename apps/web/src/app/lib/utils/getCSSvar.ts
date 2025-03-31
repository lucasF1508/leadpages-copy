import kebabCase from 'lodash/kebabCase'

export const getCSSvar = (cssVar: string) => {
  if (typeof window === 'undefined') return undefined

  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(`--${kebabCase(cssVar)}`)
}

export default getCSSvar
