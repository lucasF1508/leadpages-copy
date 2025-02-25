import {BsFilePerson as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/schema/tool'

const [title, slug] = F.fieldDefaultsCustom()

export const schemaCategoryCustomer = {
  icon,
  name: 'categoryCustomer',
  title: 'Customer Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [...F.fieldDefaultsCustom({parent: false, path: false})],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Category'}),
  }),
}
