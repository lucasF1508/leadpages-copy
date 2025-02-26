import {BsBell as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaAlertBar = {
  icon,
  name: 'alertBar',
  title: 'Alert Bar',
  type: 'document',
  fields: [
    F.string({name: 'name', validation: (Rule) => Rule.required()}),
    F.string({name: 'id', validation: (Rule) => Rule.required()}),
    F.string({
      name: 'placementRegex',
      description: 'This Alert Bar will be included on any paths matching this regex',
    }),
  ],
  preview: {
    select: {
      id: 'id',
      name: 'name',
    },
    prepare: ({id, name}) => ({
      title: name,
      subtitle: `AlertBar: ${id}`,
    }),
  },
}
