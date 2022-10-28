import { F, P } from 'part:gearbox-schema-tool/schema-builder'
import { FiChevronDown as icon } from 'react-icons/fi'

export const schemaMenuColumnFeatured = F.object({
  icon,
  name: 'menuColumnFeatured',
  title: 'Featured Column Link',
  fields: [
    F.string({ name: 'label' }),
    F.image(),
    F.blockContent({ name: 'content', title: 'Description' }),
    F.field('link'),
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
