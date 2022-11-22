import { filterDuplicateByKey, applyRegexFromMap } from '../utils'

export const category = (value, map) => {
  const { category: categoryData } = map
  const values = Array.isArray(value) ? value : [value]

  const categories = values.map((valueOrg) => ({
    name: applyRegexFromMap(valueOrg, map),
    parent: categoryData,
  }))

  return filterDuplicateByKey(categories, 'name')
}
