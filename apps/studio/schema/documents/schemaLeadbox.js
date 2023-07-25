import { BsBell as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaLeadbox = {
  icon,
  name: 'leadbox',
  type: 'object',
  fields: [
    F.string({ name: 'name', validation: (Rule) => Rule.required() }),
    F.string({ name: 'id', validation: (Rule) => Rule.required() }),
    F.string({
      name: 'trigger',
      options: {
        list: [
          { title: 'Exit Intent', value: 'exitIntent' },
          { title: 'Pop Up', value: 'popUp' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'exitIntent',
    }),
    F.string({
      name: 'placementRegex',
      description:
        'This Leadbox will be included on any paths matching this regex',
    }),
    F.number({
      name: 'delay',
      description: 'in seconds',
      initialValue: 0,
      validation: (Rule) => Rule.min(0).integer().positive(),
    }),
    F.number({
      name: 'views',
      initialValue: 0,
      validation: (Rule) => Rule.min(0).integer().positive(),
    }),
    F.number({
      name: 'dontShowFor',
      description: 'in days',
      initialValue: 0,
      validation: (Rule) => Rule.min(0).integer().positive(),
    }),
  ],
  preview: {
    select: {
      id: 'id',
      name: 'name',
    },
    prepare: ({ id, name }) => ({
      title: name,
      subtitle: `Leadbox: ${id}`,
    }),
  },
}
