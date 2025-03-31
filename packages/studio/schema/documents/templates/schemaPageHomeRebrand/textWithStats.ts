import {AiOutlineHome as icon} from 'react-icons/ai'
import {F} from '@/schema/tool'
import {blockContent} from './blockContent'

const textWithStats = F.object({
  icon,
  title: 'Text With Stats',
  name: 'textWithStats',
  fields: [
    blockContent,
    F.array({
      name: 'stats',
      of: [
        F.object({
          name: 'stat',
          fields: [F.string({name: 'stat'}), F.string({name: 'content'})],
        }),
      ],
    }),
  ],
})

export default textWithStats