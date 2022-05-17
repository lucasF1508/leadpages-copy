import * as F from '../../fields'

export const title = (props = {}) =>
  F.string({
    name: 'title',
    ...props,
  })

export default title
