import { F } from 'part:gearbox-schema-tool/schema-builder'
import { CgRename as icon } from 'react-icons/cg'

export const schemaInputText = F.formField({
  icon,
  name: 'input.text',
  title: 'Text Line',
})
