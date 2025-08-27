import {BsPlug as icon} from 'react-icons/bs'
import {F, P, G} from '@/schema/tool'
import {orderRankField} from '@sanity/orderable-document-list'

export const categoryIntegration = {
  icon,
  name: 'categoryIntegration',
  title: 'Integration Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [F.title(), F.slug(), orderRankField({type: 'categoryIntegration'})],
  preview: P.titleImage({
    prepare: ({title}: any) => ({title, subtitle: 'Category'}),
  }),
}
