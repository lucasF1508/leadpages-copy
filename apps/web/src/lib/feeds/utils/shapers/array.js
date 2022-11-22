import isString from 'lodash/isString'
import { filterDuplicateByKey } from '../utils'

export const array = (parsedValue, map) => {
  if (!parsedValue) return null
  const { processing } = map
  const values = Array.isArray(parsedValue) ? parsedValue : [parsedValue]
  let labelKey = false

  if (['category', 'tags'].includes(processing)) {
    labelKey = 'label'
  }

  const arr = values.map((value) => {
    if (!isString(value) && !labelKey) return value
    return { label: labelKey ? value[labelKey] : value, value }
  })

  return filterDuplicateByKey(arr, 'label')
}
