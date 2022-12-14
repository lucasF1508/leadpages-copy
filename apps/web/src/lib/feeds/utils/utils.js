import round from 'lodash/round'
import { performance } from 'perf_hooks'

// eslint-disable-next-line prefer-destructuring
export const now = performance.now

export const filterDuplicateByKey = (array, key) =>
  array.filter(
    (v, i, a) => a.findIndex((t) => (key ? t[key] === v[key] : t === v)) === i // Remove duplicates
  )

export const applyRegexFromMap = (value, map) => {
  const { processingRegex } = map || {}

  if (!processingRegex) return value

  const regex = processingRegex ? new RegExp(processingRegex) : false
  const [match, substring] = regex ? regex.exec(value) || [] : []

  return substring || match || value
}

export const logPerformance = (title, start, end = now()) => {
  const ms = end - start
  const seconds = round(ms / 1000, 2)
  const performanceString = `${title} took ${seconds} seconds`
  // eslint-disable-next-line no-console
  console.log(performanceString)
}
