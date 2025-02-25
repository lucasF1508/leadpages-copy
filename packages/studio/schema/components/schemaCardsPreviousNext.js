import {BsArrowLeftRight as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaCardsPreviousNext = F.object({
  name: 'cardsPreviousNext',
  icon,
  fields: [
    F.string({
      name: 'heading',
      placeholder: 'ie. Keep comparing',
    }),
    F.object({
      name: 'previous',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [F.string({name: 'heading', placeholder: 'ie. Back To'}), F.link({name: 'link'})],
    }),
    F.object({
      name: 'next',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [F.string({name: 'heading', placeholder: 'ie. Compare'}), F.link({name: 'link'})],
    }),
  ],
})
