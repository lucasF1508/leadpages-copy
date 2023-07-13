import { GrGallery as icon } from 'react-icons/gr'
import { FaHighlighter } from 'react-icons/fa'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaMarquee = F.object({
  icon,
  title: 'Marquee',
  name: 'marquee',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      ...F.contentGroup({ label: false, link: false }),
      F.array({
        name: 'servicePoints',
        of: [
          {
            icon: FaHighlighter,
            type: 'object',
            name: 'point',
            fields: [
              F.image(),
              F.string({ name: 'heading' }),
              F.text({ name: 'text' }),
            ],
          },
        ],
        validation: (Rule) => Rule.min(3).max(3),
      }),
      F.array({
        name: 'images',
        of: [
          {
            type: 'object',
            name: 'marqueeImage',
            fields: [
              F.image(),
              F.number({
                name: 'maxWidth',
              }),
              F.link({
                args: {
                  linkStyle: false,
                  file: false,
                  hasIcon: false,
                  target: false,
                  video: false,
                  label: false,
                },
              }),
            ],
            preview: {
              select: {
                media: 'image',
              },
              prepare: ({ media }) => ({
                media,
              }),
            },
          },
        ],
        options: {
          layout: 'grid',
        },
      }),
    ]),
    ...G.group('options', [
      F.number({
        name: 'duration',
        initalValue: 60,
        description: 'Duration of the animation in seconds.',
        validation: (Rule) => Rule.min(1).max(180).integer(),
      }),
      F.number({
        name: 'height',
        description:
          'Max Height of images in pixels. This value may be superceded if the item has a max width set.',
        validation: (Rule) => Rule.positive().integer(),
        initialValue: 125,
      }),
      F.number({
        name: 'spaceBetween',
        description:
          'Space between images in pixels. This value will be scaled to half on mobile.',
        validation: (Rule) => Rule.positive().integer(),
        initialValue: 60,
      }),
      F.boolean({
        name: 'hasShadow',
        title: 'Add Shadow to Images',
        initialValue: false,
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
    },
    prepare: ({ heading, content }) => {
      const subtitle = content ? P.richText(content) : ''

      return {
        title: heading || subtitle || 'Marquee',
        subtitle: heading ? subtitle : '',
        media: icon,
      }
    },
  },
})
