import * as F from '../../fields'

export const links = ({
  name = 'links',
  link,
  additionalFields = [],
  ...props
} = {}) =>
  F.array({
    name,
    of: [
      F.link({
        name: 'link',
        initialValue: {
          condition: 'none',
        },
        conditions: {
          none: [],
        },
        ...link,
      }),
      ...additionalFields,
    ],
    ...props,
  })

export default links
