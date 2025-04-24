import {AiOutlineForm as icon} from 'react-icons/ai'
import {F} from '@/schema/tool'

export const formComponent = F.object({
  icon,
  title: 'Form',
  name: 'formComponent',
  fields: [F.reference('form', {name: 'form'})],
  preview: {
    select: {
      title: 'form.name',
    },
    prepare: ({title = 'Form (empty)'}) => ({title, media: icon}),
  },
})
