import { F } from 'part:gearbox-schema-tool/schema-builder'
import { CgMail as icon } from 'react-icons/cg'

export const schemaInputsEmail = F.formField({
  icon,
  name: 'input.email',
  title: 'Email',
})
