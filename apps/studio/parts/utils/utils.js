import isEmpty from 'lodash/isEmpty'
import isNumber from 'lodash/isNumber'
import isNaN from 'lodash/isNaN'

export const isBlank = (value) =>
  (!isEmpty(value) && !value.trim().length) ||
  (isEmpty(value) && !isNumber(value)) ||
  isNaN(value)
