import {CgSelectR as icon} from 'react-icons/cg'
import {F} from '@/schema/tool'

export const inputsSelect = F.formField({
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
