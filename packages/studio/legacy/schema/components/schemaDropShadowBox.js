import {F, P} from '@/legacy/schema/tool'
import {BsCardHeading as icon} from 'react-icons/bs'

export const schemaDropShadowBox = {
  icon,
  title: 'Dropshadow Box',
  name: 'dropShadowBox',
  type: 'object',
  fields: [
    F.field('blockContentSimple', {
      name: 'content',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content}) => ({
      title: 'Dropshadow Box',
      subtitle: P.richText(content),
    }),
  }),
}
