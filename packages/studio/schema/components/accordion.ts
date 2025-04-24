import {BsArrowsExpand as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const accordion = F.object({
  fields: [
    F.array({
      name: 'accordionItems',
      of: [
        F.object({
          fields: [F.title(), F.blockContent()],
          name: 'accordionItems',
        }),
      ],
    }),
  ],
  icon,
  name: 'accordion',
  preview: {
    prepare: ({items = []}) => {
      const title = items
        .map(({title = ''}) => title)
        .filter(Boolean)
        .join(', ')
      return {
        media: icon,
        title: title || 'Accordion (empty)',
      }
    },
    select: {
      items: 'accordionItems',
    },
  },
})
