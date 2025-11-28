import {F, P} from '@/schema/tool'
import {BsCardHeading as icon} from 'react-icons/bs'

export const dropShadowBox = {
  icon,
  title: 'Dropshadow Box',
  name: 'dropShadowBox',
  type: 'object',
  fields: [
    F.field('blockContentSimple', {
      name: 'content',
      validation: (Rule: any) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}: any) => ({
      title: 'Dropshadow Box',
      subtitle: P.richText(content) || '',
    }),
  },
}

