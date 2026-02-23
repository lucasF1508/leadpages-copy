import { BsTable as icon } from 'react-icons/bs'
import { F, P } from '@/schema/tool'

export const pricingComparison = F.object({
  fields: [
    F.string({
      name: 'eyebrow',
      title: 'Eyebrow',
      description: 'Small label above the heading (e.g., PRICING)',
    }),

    F.field('blockContentSimple', {
      name: 'heading',
      title: 'Heading',
      description: 'Main heading text',
      validation: (Rule) => Rule.required(),
    }),

    F.string({
      name: 'leftColumnTitle',
      title: 'Left Column Title',
      description: 'Title for the left column (e.g., Included with Leadpages)',
      validation: (Rule) => Rule.required(),
    }),

    F.array({
      name: 'leftColumnItems',
      title: 'Left Column Items',
      description: 'List items for the left column',
      of: [
        F.object({
          fields: [
            F.image({
              name: 'icon',
              title: 'Icon',
              description: 'Small icon to display next to the item (e.g., checkmark)',
            }),
            F.string({
              name: 'text',
              title: 'Item Text',
              validation: (Rule) => Rule.required(),
            }),
          ],
          name: 'listItem',
          preview: {
            select: { title: 'text', media: 'icon' },
          },
          title: 'List Item',
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),

    F.string({
      name: 'rightColumnTitle',
      title: 'Right Column Title',
      description: 'Title for the right column (e.g., What others charge extra for)',
      validation: (Rule) => Rule.required(),
    }),

    F.array({
      name: 'rightColumnItems',
      title: 'Right Column Items',
      description: 'List items for the right column',
      of: [
        F.object({
          fields: [
            F.image({
              name: 'icon',
              title: 'Icon',
              description: 'Small icon to display next to the item (e.g., checkmark)',
            }),
            F.string({
              name: 'text',
              title: 'Item Text',
              validation: (Rule) => Rule.required(),
            }),
          ],
          name: 'listItem',
          preview: {
            select: { title: 'text', media: 'icon' },
          },
          title: 'List Item',
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),

    F.string({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      description: 'Text for the bottom button (e.g., Plans start at $37/mo. See pricing)',
    }),

    F.string({
      name: 'ctaHref',
      title: 'CTA Button Link',
      description: 'URL for the bottom button',
    }),
  ],
  icon,
  name: 'pricingComparison',
  preview: {
    select: {
      heading: 'heading',
      leftColumnTitle: 'leftColumnTitle',
    },
    prepare: ({ heading = [], leftColumnTitle }) => ({
      media: icon,
      subtitle: leftColumnTitle || '',
      title: P.richText(heading) || 'Pricing Comparison',
    }),
  },
  title: 'Pricing Comparison',
})
