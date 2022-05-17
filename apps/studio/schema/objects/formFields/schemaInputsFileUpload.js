import { F } from 'part:gearbox-schema-tool/schema-builder'
import { CgFileAdd as icon } from 'react-icons/cg'

export const schemaInputFile = F.formField({
  icon,
  name: 'input.file',
  title: 'File Upload',
})
