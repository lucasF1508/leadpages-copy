import isEmpty from 'lodash/isEmpty'
import isNumber from 'lodash/isNumber'
import isNaN from 'lodash/isNaN'

type ValueType = string | number | object | any[] | null | undefined

const isBlank = (value: ValueType) =>
  (typeof value === 'string' && !value.trim().length) ||
  (isEmpty(value) && !isNumber(value)) ||
  isNaN(value)

export default isBlank
