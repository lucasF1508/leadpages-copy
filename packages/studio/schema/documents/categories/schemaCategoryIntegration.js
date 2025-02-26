import {BsPlug as icon} from 'react-icons/bs'
import {F, P, G} from '@/schema/tool'

export const schemaCategoryIntegration = {
  icon,
  name: 'categoryIntegration',
  title: 'Integration Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [
    F.number({
      name: 'categoryOrder',
      hidden: true,
      initialValue: -1,
    }),
    ...F.fieldDefaultsCustom({parent: false}),
  ],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Category'}),
  }),
}
