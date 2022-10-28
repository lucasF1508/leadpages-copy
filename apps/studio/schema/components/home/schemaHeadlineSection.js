import { BsTextareaT as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeadlineSection = F.object({
  icon,
  title: 'Headline Section',
  name: 'headlineSection',
  fields: [F.field('blockContentHeadline', { name: 'content' })],
  preview: P.blockContent(),
})
