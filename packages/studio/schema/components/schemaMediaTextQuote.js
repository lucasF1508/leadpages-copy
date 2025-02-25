import {IoIosImages as icon} from 'react-icons/io'
import {F, G, P} from '@/schema/tool'

export const schemaMediaTextQuote = F.field('object', {
  icon,
  name: 'mediaTextQuote',
  fields: [
    F.array({
      name: 'sections',
      of: [
        F.object({
          icon,
          groups: [G.define('content', {default: true}), G.define('options'), G.define('media')],
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
              }),
            ]),
            ...G.group('media', [
              F.media({
                name: 'image',
                conditions: {
                  wistia: false,
                  video: false,
                },
                args: {
                  video: false,
                  wistia: false,
                },
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
                    {title: 'Gray', value: 'gray'},
                    {title: 'Light Lavender', value: 'lavenderLight'},
                    {title: 'Lightest Teal', value: 'tealLighter'},
                  ],
                },
                layout: 'radio',
                direction: 'horizontal',
              }),
            ]),
          ],
          preview: P.preview({
            content: 'content',
            media: 'image',

            prepare: ({content = [], media = {}}) => {
              const {image} = media
              const [heading, ...subtitle] = content

              return {
                title: heading ? P.richText([heading]) : 'Media with Text',
                subtitle: P.richText(subtitle),
                media: image,
              }
            },
          }),
        }),
      ],
    }),
  ],
  preview: P.preview({
    prepare: () => ({
      title: 'Media Text & Quote',
    }),
  }),
})
