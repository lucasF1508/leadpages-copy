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

  if (processing === 'tags') {
    return parsedValue
  }

  if (processing === 'category') {
    const arr = values.map((value) => {
      const { _id } = value
      return {
        _ref: _id,
        _type: 'reference',
      }
    })

    return filterDuplicateByKey(arr, '_ref')
  }

  const arr = values.map((value) => {
    if (!isString(value) && !labelKey) return value
    return { label: labelKey ? value[labelKey] : value, value }
  })

  return filterDuplicateByKey(arr, 'label')
}
