import {F} from '@/schema/tool'
import {CgRadioChecked as icon} from 'react-icons/cg'

export const schemaInputRadio = F.formField({
  icon,
  name: 'input.radio',
  title: 'Radio Buttons',
  fields: [
    {
      name: 'choices',
      title: 'Choices',
      type: 'text',
      description: 'Separate each choice with a new line. eg: Red : red',
    },
  ],
})
