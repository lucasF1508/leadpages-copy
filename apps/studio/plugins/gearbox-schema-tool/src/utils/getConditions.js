import isObject from 'lodash/isObject'
import isString from 'lodash/isString'

export const getConditions = (conditions) => {
  if (isString(conditions)) return [[conditions], []]
  if (isObject(conditions)) {
    const values = []
    const keys = Object.keys(conditions)
      .map((key) => {
        if (!conditions[key]) return false

        if (conditions[key].filter(Boolean)) {
          values.push(conditions[key])
        }

        return key
      })
      .filter(Boolean)
    return [keys, values]
  }

  // eslint-disable-next-line no-console
  console.log(
    'Your conditions should be objects or strings. Recieved:',
    conditions
  )
  return [[], []]
}

export default getConditions
