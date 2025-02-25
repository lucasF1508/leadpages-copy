import {BsFilePerson as icon} from 'react-icons/bs'
import {F, P} from '@/schema/tool'

export const schemaHeroCustomer = F.hero({
  name: 'heroCustomer',
  title: 'Customer Hero',
  icon,
  args: {
    label: false,
    link: false,
    align: false,
  },
  fields: [],
  preview: P.preview({
    content: 'content',
    prepare: ({content = []}) => ({
      title: 'Customer Hero',
      subtitle: P.richText(content),
    }),
  }),
})
