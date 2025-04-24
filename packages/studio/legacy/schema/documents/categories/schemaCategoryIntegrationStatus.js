import {BsPlug as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

export const schemaCategoryIntegrationStatus = {
  icon,
  name: 'categoryIntegrationStatus',
  title: 'Integration Status',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [
    ...F.fieldDefaultsCustom({parent: false, path: false}),
    ...G.group('content', [F.text()]),
  ],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Status'}),
  }),
}
