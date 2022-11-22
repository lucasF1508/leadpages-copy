import isArray from 'lodash/isArray'
import isPlainObject from 'lodash/isPlainObject'
import isString from 'lodash/isString'

const maybeMerge = ({ to, processing, result, item }) => {
  switch (true) {
    case processing === 'slugify':
      return { [to]: [result[to], item[to]].filter(Boolean).join('-') }
    case isArray(result[to]):
      return { [to]: [...result[to], ...item[to]] }
    case isPlainObject(result[to]):
      return { [to]: { ...result[to], ...item[to] } }
    case isString(result[to]):
      return { [to]: [result[to], item[to]].join(', ') }
    default:
      return item
  }
}

export default maybeMerge
