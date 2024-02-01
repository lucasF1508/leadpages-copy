import { IoIosImages as icon } from 'react-icons/io'
import { F, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaMediaTextQuote = F.field('object', {
  icon,
  name: 'mediaTextQuote',
  fields: [
    F.array({
      name: 'sections',
      of: [
        F.object({
          icon,
          groups: [
            G.fieldGroup('content', { default: true }),
            G.fieldGroup('options'),
            G.fieldGroup('media'),
          ],
          name: 'section',
          fields: [
            ...G.group('content', [
              F.field('blockContentSimple', {
                name: 'content',
                validation: (Rule) => Rule.required(),
                group: 'content',
              }),
              F.reference('testimonial', {
                name: 'testimonial',
                options: {
                  titleField: 'authorName',
                },
              }),
            ]),
            ...G.group('media', [
              F.media({
                name: 'image',
                args: { wistia: false, video: false },
                validation: (Rule) => Rule.required(),
                fields: [
                  F.string({
                    name: 'alt',
                    group: 'content',
                  }),
                ],
              }),
            ]),
            ...G.group('options', [
              F.field('backgroundColorFull', {
                name: 'backgroundColor',
                initialValue: 'teal',
                description: null,
              }),
              F.string({
                name: 'quoteColor',
                initialValue: 'lavenderLight',
                options: {
                  list: [
                    { title: 'Gray', value: 'gray' },
                    { title: 'Light Lavender', value: 'lavenderLight' },
                    { title: 'Lightest Teal', value: 'tealLighter' },
                  ],
                },
                layout: 'radio',
                direction: 'horizontal',
              }),
            ]),
          ],
          preview: {
            select: {
              content: 'content',
              media: 'image',
            },
            prepare: ({ content = [], media = {} }) => {
              const { image } = media
              const [heading, ...subtitle] = content

              return {
                title:
                  P.richText({
                    content: [heading],
                    title: 'Media with Text',
                  }) || 'Media with Text',
                subtitle: P.richText({ content: subtitle }),
                media: image,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Media Text & Quote',
    }),
  },
})
