import { BsFileText as icon } from 'react-icons/bs'
import { F, FS, G } from 'part:gearbox-schema-tool/schema-builder'

const [title, slug] = F.fieldDefaults()

export const schemaCategoryCustomer = {
  icon,
  name: 'categoryCustomer',
  title: 'Customer Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fieldsets: [FS.fieldset('meta')],
  fields: [title, slug],
}
