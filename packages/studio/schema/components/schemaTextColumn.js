import {FiColumns as icon} from 'react-icons/fi'
import {F} from '@/schema/tool'

export const schemaTextColumn = F.object({
  icon,
  title: 'Text',
  name: 'textColumn',
  fields: [F.string({name: 'heading'}), F.blockContent()],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({heading}) => ({
      title: heading || 'Text Column',
    }),
  },
})
