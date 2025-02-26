import {F} from '@/schema/tool'
import {CgMenuBoxed as icon} from 'react-icons/cg'

export const schemaMenuRowTemplates = F.object({
  icon,
  name: 'menuRowTemplates',
  title: 'Templates Row',
  fields: [
    F.field('menuHeading'),
    F.array({
      name: 'items',
      title: 'Template Mega Nav Menu Items',
      of: [F.field('templateMenuItem')],
    }),
  ],
  preview: {
    select: {
      label: 'menuHeading.heading',
    },
    prepare: ({label = 'Templates Row'}) => ({
      title: label,
      media: icon,
    }),
  },
})
