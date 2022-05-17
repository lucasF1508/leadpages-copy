import { MdSettings as icon } from 'react-icons/md'
import { F, FS, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCompanyInfo = {
  icon,
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  fields: [
    F.string({ name: 'companyTitle' }),
    F.address(),
    F.field('email'),
    F.string({ name: 'phone' }),
    F.field('social'),
  ],
}
