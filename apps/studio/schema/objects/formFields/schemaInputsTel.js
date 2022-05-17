import { F } from 'part:gearbox-schema-tool/schema-builder'
import { CgPhone as icon } from 'react-icons/cg'

export const schemaInputTel = F.formField({
  icon,
  name: 'input.tel',
  title: 'Phone',
})
