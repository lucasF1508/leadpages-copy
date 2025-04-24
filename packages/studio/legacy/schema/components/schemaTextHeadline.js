import {BsTextCenter as icon} from 'react-icons/bs'
import {F, G, P} from '@/legacy/schema/tool'

export const schemaTextHeadline = F.object({
  icon,
  title: 'Text Headline',
  name: 'headlineSection',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.field('blockContentHeadline', {name: 'content'}),
      F.links({
        additionalFields: [F.field('signUp')],
        validation: (Rule) => Rule.max(1),
      }),
    ]),
    ...G.group('options', [F.field('backgroundColor'), F.field('hasSocialize')]),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content}) => ({
      title: P.richText(content),
      media: icon,
    }),
  }),
})
