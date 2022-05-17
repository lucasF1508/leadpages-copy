import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

export const fieldsToGroq = (fields) => {
  const array = Array.isArray(fields) ? fields : [fields]
  return array
    .map((object) =>
      Object.keys(object)
        .map((key) => {
          switch (true) {
            case key === object[key] || object[key] === true:
              return '...' in object && key !== '...' ? '' : key

            case object[key] === '->':
              return key + object[key]

            case isArray(object[key]):
              return `${key}[] {${fieldsToGroq(object[key])}}`

            case isObject(object[key]):
              return `${key} {${fieldsToGroq([object[key]])}}`

            default:
              return `"${key}": ${object[key]}`
          }
        })
        .filter(Boolean)
    )
    .join(',')
}

export default fieldsToGroq
