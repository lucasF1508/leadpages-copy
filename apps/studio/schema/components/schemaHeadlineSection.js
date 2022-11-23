import { BsTextareaT as icon } from 'react-icons/bs'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeadlineSection = F.object({
  icon,
  title: 'Headline Section',
  name: 'headlineSection',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.field('blockContentHeadline', { name: 'content' }),
    ]),
    ...G.group('options', [F.field('backgroundColor')]),
  ],
  preview: P.blockContent(),
})
