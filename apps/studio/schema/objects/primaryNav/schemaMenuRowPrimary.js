import { F, G } from 'part:gearbox-schema-tool/schema-builder'
import { CgMenuBoxed as icon } from 'react-icons/cg'

export const schemaMenuRowPrimary = F.object({
  icon,
  name: 'menuRowPrimary',
  title: 'Primary Row',
  groups: [G.content(), G.fieldGroup('options')],
  fields: [
    ...G.group('content', [
      F.field('menuHeading'),
      F.array({
        name: 'items',
        title: 'Mega Nav Menu Items',
        of: [F.field('menuItem')],
      }),
    ]),
    ...G.group('options', [
      F.number({
        name: 'columnCount',
        initialValue: 3,
        description: 'Number of columns to display',
        validation: (Rule) => Rule.min(2).max(3),
      }),
    ]),
  ],
  preview: {
    select: {
      label: 'menuHeading.heading',
    },
    prepare: ({ label = 'Primary Row' }) => ({
      title: label,
      media: icon,
    }),
  },
})
