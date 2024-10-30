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
      F.field('rating'),
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
