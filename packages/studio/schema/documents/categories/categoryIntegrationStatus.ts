import {BsPlug as icon} from 'react-icons/bs'
import {F, P, G} from '@/schema/tool'
import {orderRankField} from '@sanity/orderable-document-list'

export const categoryIntegrationStatus = {
  icon,
  name: 'categoryIntegrationStatus',
  title: 'Integration Status',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [F.title(), F.slug(), orderRankField({type: 'categoryIntegrationStatus'})],
  preview: P.titleImage({
    prepare: ({title}: any) => ({title, subtitle: 'Status'}),
  }),
}
