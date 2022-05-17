import { F } from 'part:gearbox-schema-tool/schema-builder'
import {
  FiChevronDown as icon,
  FiChevronRight as itemIcon,
} from 'react-icons/fi'

export const schemaMenuColumnSecondary = F.object({
  icon,
  name: 'menuColumnSecondary',
  title: 'Secondary Column',
  fields: [
    F.string({ name: 'label' }),
    F.array({
      name: 'items',
      title: 'Menu Links',
      of: [
        F.object({
          title: 'Menu Link',
          fields: [F.image({ name: 'icon', title: 'Icon' }), F.field('link')],
          preview: {
            select: {
              image: 'icon',
              label: 'link.label',
            },
            prepare: ({ image, label = 'Column Link' }) => ({
              title: label,
              media: image || itemIcon,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare: ({ label = 'Secondary Column' }) => ({ title: label }),
  },
})
