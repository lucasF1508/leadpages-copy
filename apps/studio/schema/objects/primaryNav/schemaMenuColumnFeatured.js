import { F, P } from 'part:gearbox-schema-tool/schema-builder'
import { FiChevronDown as icon } from 'react-icons/fi'

export const schemaMenuColumnFeatured = F.object({
  icon,
  name: 'menuColumnFeatured',
  fields: [
    F.array({
      name: 'items',
      of: [
        F.field('menuHeading'),
        F.field('menuItem'),
        F.field('menuStackedCard'),
        F.field('menuHorizontalCard'),
      ],
    }),
    F.radio(['left', 'right'], {
      name: 'position',
      title: 'Align Feature Column',
      initialValue: 'right',
    }),
  ],
  preview: {
    select: {
      image: 'image',
      label: 'label',
      content: 'content',
    },
    prepare: ({ image, label = 'Featured Link', content }) => ({
      title: label,
      subtitle: P.richText({ content }),
      media: image || icon,
    }),
  },
})
