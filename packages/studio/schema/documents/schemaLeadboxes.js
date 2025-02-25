import {BsGraphUp as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaLeadboxes = {
  icon,
  name: 'leadboxes',
  title: 'Pop-ups & Alert Bars',
  type: 'document',
  fields: [
    F.array({
      name: 'leadboxData',
      title: 'Pop-up Data',
      of: [{type: 'leadbox'}],
    }),
    F.array({
      name: 'alertBarData',
      title: 'Alert Bar Data',
      of: [{type: 'alertBar'}],
    }),
  ],
}
