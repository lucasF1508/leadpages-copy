import { MdOutlineFeaturedPlayList as icon } from 'react-icons/md'
import { F } from '@/schema/tool'

export const featureShowcase = F.object({
  fields: [
    F.radio(['light', 'dark'], {
      name: 'variant',
      title: 'Theme',
      description: 'Light or dark version',
      initialValue: 'light',
    }),
    F.string({
      name: 'heading',
      title: 'Heading',
      description: 'Main section heading (e.g., A Landing Page Builder Rebuilt From Scratch.)',
    }),

    F.string({
      name: 'subheading',
      title: 'Subheading',
      description: 'Section description text below the heading',
    }),

    F.array({
      name: 'items',
      title: 'Feature Items',
      description: 'Selectable feature items with images',
      of: [
        F.object({
          name: 'featureItem',
          title: 'Feature Item',
          fields: [
            F.string({
              name: 'eyebrow',
              title: 'Eyebrow',
              description: 'Small label above the title (e.g., DEVICE-SPECIFIC DESIGN)',
            }),

            F.string({
              name: 'title',
              title: 'Title',
              description: 'Large heading shown when this item is active',
              validation: (Rule) => Rule.required(),
            }),

            F.string({
              name: 'label',
              title: 'Label',
              description: 'Short text shown in the feature list (e.g., Pixel Perfect Positioning)',
              validation: (Rule) => Rule.required(),
            }),

            F.string({
              name: 'description',
              title: 'Description',
              description: 'Description shown when this item is active',
              validation: (Rule) => Rule.required(),
            }),

            F.image({
              name: 'icon',
              title: 'Icon',
              description: 'Small icon displayed next to the title',
            }),

            F.image({
              name: 'image',
              title: 'Image',
              description: 'Large image displayed on the right side when this item is active',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
            prepare({ title, media }) {
              return {
                title: title || 'Untitled Feature',
                media: media || icon,
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  icon,
  name: 'featureShowcase',
  preview: {
    select: {
      heading: 'heading',
      items: 'items',
    },
    prepare({ heading, items }) {
      const count = items?.length || 0
      return {
        title: heading || 'Feature Showcase',
        subtitle: `${count} items`,
        media: icon,
      }
    },
  },
  title: 'Feature Showcase',
})
