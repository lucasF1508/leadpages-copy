import {BsTextareaT as icon} from 'react-icons/bs'
import {F, P} from '@/legacy/schema/tool'

export const schemaTextBlock = F.object({
  icon,
  title: 'Text Standard',
  name: 'textBlock',
  fields: [
    F.blockContent(),
    F.links({
      signUpOption: true,
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content}) => ({
      title: P.richText(content),
    }),
  }),
})
