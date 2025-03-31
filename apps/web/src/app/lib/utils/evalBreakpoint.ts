import { screens } from '@/design/tokens'

type PrefixSigns<T extends Record<string, string>> = {
  [K in keyof T as `<${K & string}` | `>${K & string}`]: T[K]
}

export type Breakpoint = keyof PrefixSigns<typeof screens>

export const signRegex = /^[<>]+/

export const evalBreakpoint = (breakpoint: Breakpoint) => {
  if (typeof window === 'undefined') return undefined

  const [sign] = breakpoint.match(signRegex) || ['>']
  const target = breakpoint.replace(signRegex, '')
  const value = screens[target as keyof typeof screens] || target
  const minQuery = `(min-width: ${value})`
  const mediaQuery = sign === '<' ? `not all and ${minQuery}` : minQuery

  const { matches } = window.matchMedia(mediaQuery)
  return matches
}

export default evalBreakpoint
