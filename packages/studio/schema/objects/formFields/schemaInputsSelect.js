import {F} from '@/schema/tool'
import {CgSelectR as icon} from 'react-icons/cg'

export const schemaInputSelect = F.formField({
  icon,
  name: 'input.select',
  title: 'Dropdown',
  fields: [
    F.text({
      name: 'choices',
      description: 'Separate each choice with a new line. eg: Red : red',
    }),
  ],
})
