import { F } from 'part:gearbox-schema-tool/schema-builder'
import { CgCardSpades as icon } from 'react-icons/cg'

export const schemaMenuRowCards = F.object({
  icon,
  name: 'menuRowCards',
  title: 'Secondary Column',

  fields: [
    F.field('menuHeading'),
    F.array({
      name: 'cards',
      of: [F.field('menuCard')],
      icon,
    }),
  ],
  preview: {
    select: {
      label: 'menuHeading.heading',
    },
    prepare: ({ label = 'Cards Row' }) => ({ title: label }),
  },
})
