import { BsCapslock as icon } from 'react-icons/bs'
import { F, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaSocialProof = F.object({
  icon,
  name: 'socialProof',
  groups: [...G.fieldGroupComponentOptions(), G.fieldGroup('media')],
  fields: [
    ...G.group('content', [
      F.string({ name: 'overline' }),
      F.blockContent({ name: 'content' }),
      F.links(),
    ]),
    ...G.group('options', [
      F.field('backgroundColorFull', {
        name: 'bgColor',
        title: 'Background Color',
        initialValue: 'purple',
        description: null,
      }),
      F.number({
        name: 'rating',
        validation: (Rule) => Rule.min(1).max(5).positive().precision(1),
        initialValue: 5,
        options: {
          list: [
            { title: '5', value: 5 },
            { title: '4.5', value: 4.5 },
            { title: '4', value: 4 },
            { title: '3.5', value: 3.5 },
            { title: '3', value: 3 },
            { title: '2.5', value: 2.5 },
            { title: '2', value: 2 },
            { title: '1.5', value: 1.5 },
            { title: '1', value: 1 },
            { title: '0.5', value: 0.5 },
          ],
          layout: 'dropdown',
        },
      }),
    ]),
    ...G.group('media', [
      F.media({
        name: 'image',
        args: { wistia: false, video: false },
        validation: (Rule) => Rule.required(),
      }),
      F.image({
        name: 'background',
        validation: (Rule) => Rule.required(),
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
})
