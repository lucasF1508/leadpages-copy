import * as parsers from '../parsers'
import { applyRegexFromMap } from '../utils'

const mapItem = (valueOrg, map) => {
  const { from, to: toOrg, processing } = map
  const [to] = toOrg.split('::')

  const stringValue = from.match(/^['"](.*)['"]$/) // check if the "from" value is wrapped in quotes
  const value = valueOrg || (stringValue && stringValue[1])

  // Parse the value as per the selected option
  const parser = parsers[processing]

  const parsedValue = parser
    ? parser(value, map)
    : applyRegexFromMap(value, map)

  if (!parsedValue) return false

  return { [to]: parsedValue }
}

export default mapItem
