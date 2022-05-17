import * as F from '../../fields'

export const checkbox = ({ options, ...props } = {}) =>
  F.boolean({
    ...props,
    options: {
      ...options,
      layout: 'checkbox',
    },
  })

export default checkbox
