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
      F.links({
        additionalFields: [F.field('signUp')],
        validation: (Rule) =>
          Rule.custom((field) =>
            field?.some((link) => link._type === 'signUp') && field?.length > 1
              ? "When SignUp (Trial) link is present, Hero's cannot contain other links."
              : true
          ),
      }),
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
            title: 'Social Proof',
          }) || 'Social Proof',
        subtitle: P.richText({ content: subtitle }),
        media: image,
      }
    },
  },
})
