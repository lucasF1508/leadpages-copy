import {FaListUl as icon, FaHighlighter} from 'react-icons/fa'
import {F, G} from '@/legacy/schema/tool'

export const schemaServicePoints = F.object({
  icon,
  title: 'Service Points',
  name: 'servicePoints',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.array({
        name: 'servicePoints',
        of: [
          {
            icon: FaHighlighter,
            type: 'object',
            name: 'point',
            fields: [
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
              }),
              F.string({name: 'heading'}),
              F.text({name: 'text'}),
            ],
            preview: {
              select: {
                heading: 'heading',
                media: 'image',
              },
              prepare: ({heading, media = {}}) => {
                const {condition, image} = media

                return {
                  title: heading || 'Media with Text',
                  media: condition === 'image' ? image : FaHighlighter,
                }
              },
            },
          },
        ],
        validation: (Rule) => Rule.max(6),
      }),
    ]),
    ...G.group('options', [F.field('animate')]),
  ],
  preview: {
    prepare: () => ({
      title: 'Service Points',
    }),
  },
})
