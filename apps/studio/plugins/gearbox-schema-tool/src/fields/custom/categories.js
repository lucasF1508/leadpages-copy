import multiReference from './multiReference'

export const categories = (types, { name = 'categories', ...props } = {}) =>
  multiReference(types, { name, ...props })

export default categories
