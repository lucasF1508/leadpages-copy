import * as F from '../../fields'

export const links = ({ name = 'links', link, ...props } = {}) =>
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
    ],
    ...props,
  })

export default links
