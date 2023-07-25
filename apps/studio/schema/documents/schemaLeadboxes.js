import { BsGraphUp as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaLeadboxes = {
  icon,
  name: 'leadboxes',
  title: 'Leadboxes & Alert Bars',
  type: 'document',
  fields: [
    F.array({
      name: 'leadboxData',
      of: [{ type: 'leadbox' }],
    }),
    F.array({
      name: 'alertBarData',
      of: [{ type: 'alertBar' }],
    }),
  ],
}
