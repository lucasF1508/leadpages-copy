import {BsQuestionCircle as icon} from 'react-icons/bs'
import {F, P, G} from '@/legacy/schema/tool'

export const schemaCategoryFaq = {
  icon,
  name: 'categoryFaq',
  title: 'FAQ Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [...F.fieldDefaultsCustom({parent: false, path: false})],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Category'}),
  }),
}
