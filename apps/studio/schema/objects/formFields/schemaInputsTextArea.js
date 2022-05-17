import { F } from 'part:gearbox-schema-tool/schema-builder'
// import { CgNotes as icon } from 'react-icons/cg'
import { CgDetailsMore as icon } from 'react-icons/cg'

export const schemaInputTextArea = F.formField({
  icon,
  name: 'input.textarea',
  title: 'Text Box',
})
