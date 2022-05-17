import * as F from '../../fields'

export const category = (types, { name = 'category', ...props } = {}) =>
  F.reference(types, { name, ...props })

export default category
