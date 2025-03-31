import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import xorWith from 'lodash/xorWith'

export const isArrayEqual = (x: any[], y: any[]) =>
  isEmpty(xorWith(x, y, isEqual))
export default isArrayEqual
