import { filterDuplicateByKey, applyRegexFromMap } from '../utils'

export const category = (rawValue, map) => {
  const { category: categoryData } = map
  const values = Array.isArray(rawValue) ? rawValue : rawValue.split('|')

  const categories = values.map((valueOrg) => ({
    name: applyRegexFromMap(valueOrg, map),
    parent: categoryData,
  }))

  return filterDuplicateByKey(categories, 'name')
}
