import { F } from 'part:gearbox-schema-tool/schema-builder'
import { CgCheckR as icon } from 'react-icons/cg'

export const schemaInputsCheckbox = F.formField({
  icon,
  name: 'input.checkbox',
  title: 'Checkboxes',
  fields: [
    F.text({
      name: 'choices',
      description: 'Separate each choice with a new line. eg: Red : red',
    }),
  ],
})
