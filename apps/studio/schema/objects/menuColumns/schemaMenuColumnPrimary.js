import { F, P } from 'part:gearbox-schema-tool/schema-builder'
import {
  FiChevronDown as icon,
  FiChevronRight as itemIcon,
} from 'react-icons/fi'

export const schemaMenuColumnPrimary = F.object({
  icon,
  name: 'menuColumnPrimary',
  title: 'Primary Column',
  fields: [
    F.string({ name: 'label' }),
    F.array({
      name: 'items',
      title: 'Menu Links',
      of: [
        F.object({
          title: 'Menu Link',
          fields: [
            F.image({ name: 'icon', title: 'Icon' }),
            F.field('link'),
            F.blockContent({ name: 'content', title: 'Description' }),
          ],
          preview: {
            select: {
              image: 'icon',
              label: 'link.label',
              content: 'content',
            },
            prepare: ({ image, label = 'Column Link', content }) => ({
              title: label,
              subtitle: content ? P.richText(content) : '',
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
      content: 'content',
    },
    prepare: ({ label = 'Primary Column', content }) => ({
      title: label,
      subtitle: content ? P.richText(content) : '',
      media: itemIcon,
    }),
  },
})
