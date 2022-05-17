import { AiOutlineForm as icon } from 'react-icons/ai'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFormComponent = F.object({
  icon,
  title: 'Form',
  name: 'formComponent',
  fields: [F.reference('form', { name: 'form' })],
  preview: {
    select: {
      title: 'form.name',
    },
    prepare: ({ title = 'Form (empty)' }) => {
      return { title }
    },
  },
})
