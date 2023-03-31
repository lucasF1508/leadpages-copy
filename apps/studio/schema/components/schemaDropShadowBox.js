import { F, P } from 'part:gearbox-schema-tool/schema-builder'
import { BsCardHeading as icon } from 'react-icons/bs'

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
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }) {
      return {
        title: 'Dropshadow Box',
        subtitle: P.richText({ content }),
      }
    },
  },
}
