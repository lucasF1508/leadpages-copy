import { BsGrid3X3 as icon } from 'react-icons/bs'
import { F, P } from '@/schema/tool'

export const featureGrid = F.object({
  fields: [
    F.radio(['light', 'dark'], {
      name: 'variant',
      title: 'Theme',
      description: 'Light or dark version',
      initialValue: 'light',
    }),
    F.string({
      name: 'eyebrow',
      title: 'Eyebrow',
      description: 'Small label above the heading (e.g., FEATURES)',
    }),

    F.field('blockContentSimple', {
      name: 'heading',
      title: 'Heading',
      description: 'Main heading text',
      validation: (Rule) => Rule.required(),
    }),

    F.array({
      name: 'items',
      title: 'Grid Items',
      description: 'Feature items displayed in 3-column grid',
      of: [
        F.object({
          fields: [
            F.image({
              name: 'photo',
              title: 'Photo',
              description: 'Feature image or icon',
              validation: (Rule) => Rule.required(),
            }),
            F.string({
              name: 'title',
              title: 'Title',
              validation: (Rule) => Rule.required(),
            }),
            F.field('blockContentSimple', {
              name: 'description',
              title: 'Description',
            }),
          ],
          name: 'gridItem',
          preview: {
            select: { title: 'title', media: 'photo' },
          },
          title: 'Grid Item',
        }),
      ],
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
  icon,
  name: 'featureGrid',
  preview: {
    select: {
      heading: 'heading',
      items: 'items',
    },
    prepare: ({ heading = [], items = [] }) => ({
      media: icon,
      subtitle: items?.length ? `${items.length} items` : '',
      title: P.richText(heading) || 'Feature Grid',
    }),
  },
  title: 'Feature Grid',
})
