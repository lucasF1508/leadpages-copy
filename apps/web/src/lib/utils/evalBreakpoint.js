import { breakpoints } from '@design/tokens/mediaQueries'
import { getCSSvar } from './getCSSvar'

export const signRegex = /^[<=>]+/

export const evalBreakpoint = (breakpoint) => {
  const [sign] = breakpoint.match(signRegex) || ['>']
  const target = breakpoint.replace(signRegex, '')
  const value = breakpoints[target]
  const currentValue = breakpoints[getCSSvar('current-breakpoint')]
  const statement = `${currentValue} ${sign} ${value}`

  // Only using eval because of sanitization. Don't use eval.
  return /^\d+\s(==|>=?|<=?)\s\d+$/.test(statement) ? eval(statement) : false // eslint-disable-line no-eval
}

export default evalBreakpoint
