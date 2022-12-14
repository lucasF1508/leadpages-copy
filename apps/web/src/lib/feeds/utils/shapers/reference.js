import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'

export const reference = (values) => {
  const value = isArray(values) ? values[0] : values
  const { _id: _ref } = value || {}

  if (!isPlainObject(value) || !_ref) return value

  return {
    _type: 'reference',
    _ref,
  }
}
