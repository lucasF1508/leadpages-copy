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
      F.links({
        additionalFields: [F.field('signUp')],
        validation: (Rule) => Rule.max(1),
      }),
    ]),
    ...G.group('options', [
      F.field('backgroundColor'),
      F.field('hasSocialize'),
    ]),
  ],
  preview: P.blockContent({ title: 'Text Headline' }),
})
