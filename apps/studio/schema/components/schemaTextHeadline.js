import { BsTextCenter as icon } from 'react-icons/bs'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTextHeadline = F.object({
  icon,
  title: 'Text Headline',
  name: 'headlineSection',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.field('blockContentHeadline', { name: 'content' }),
    ]),
    ...G.group('options', [F.field('backgroundColor')]),
  ],
  preview: P.blockContent({ title: 'Text Headline' }),
})
