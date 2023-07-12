import { BiCard as icon } from 'react-icons/bi'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaAnimatedCards = F.object({
  icon,
  title: 'Animated Cards',
  name: 'animatedCards',
  fields: [
    F.string({ name: 'heading' }),
    F.array({
      name: 'cards',
      of: [
        F.object({
          icon,
          name: 'card',
          groups: [G.content(), G.fieldGroup('media'), G.fieldGroup('options')],
          fields: [
            ...G.group('content', [
              F.string({ name: 'heading' }),
              F.text({ name: 'subheading' }),
              F.link({ name: 'link' }),
            ]),
            ...G.group('media', [
              F.media({ name: 'media', args: { wistia: false, video: false } }),
            ]),
            ...G.group('options', [
              F.string({
                name: 'backgroundColor',
                initialValue: '#f9f9f9',
                options: {
                  list: [
                    { title: 'Gray', value: '#f9f9f9' },
                    { title: 'Teal Light', value: 'rgba(143,239,239,0.25)' },
                    {
                      title: 'Lavender Light',
                      value: 'rgba(228,222,252,0.5)',
                    },
                  ],
                  layout: 'radio',
                  direction: 'horizontal',
                },
              }),
            ]),
          ],
          preview: {
            select: {
              heading: 'heading',
            },
            prepare: ({ heading = 'Untitled' }) => ({
              title: `Card: ${heading}`,
            }),
          },
        }),
      ],
      validation: (Rule) => Rule.min(3).max(3),
    }),
    F.number({
      name: 'delay',
      description: 'Length of time between cards in seconds',
      initialValue: 5,
      validation: (Rule) => Rule.min(0).max(60).positive(),
    }),
  ],
})
