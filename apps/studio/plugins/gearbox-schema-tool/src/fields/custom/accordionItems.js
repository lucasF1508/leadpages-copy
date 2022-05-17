import * as F from '../../fields'

export const accordionItems = ({
  name = 'accordionItems',
  of = [],
  ...props
} = {}) =>
  F.array({
    name,
    of: [
      F.object({
        name: 'accordionItem',
        fields: [F.title(), F.blockContent()],
      }),
      ...of,
    ],
    ...props,
  })

export default accordionItems
