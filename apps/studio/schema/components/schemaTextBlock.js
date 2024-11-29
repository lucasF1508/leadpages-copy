import { BsTextareaT as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTextBlock = F.object({
  icon,
  title: 'Text Standard',
  name: 'textBlock',
  fields: [
    F.blockContent(),
    F.links({
      additionalFields: [F.field('signUp')],
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: P.blockContent({ title: 'Text Standard' }),
})
