import {AiOutlineStar as icon} from 'react-icons/ai'
import {F, G, P} from '@/schema/tool'

export const schemaFeaturedTemplates = F.object({
  icon,
  name: 'featuredTemplates',
  groups: [...G.fieldGroupComponentOptions(), G.define('media')],
  fields: [
    F.field('blockContentHeadline', {name: 'content', group: 'content'}),
    ...G.group('media', [
      F.object({
        name: 'images',
        fields: [
          F.array({
            name: 'large',
            title: 'Large Images',
            of: [
              F.image({
                fields: [
                  F.url({
                    title: 'Template URL',
                    options: {
                      isHighlighted: true,
                    },
                  }),
                ],
              }),
            ],
          }),
          F.array({
            name: 'small',
            title: 'Small Images',
            of: [
              F.image({
                fields: [
                  F.url({
                    title: 'Template URL',
                    options: {
                      isHighlighted: true,
                    },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ]),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content = []}) => ({
      title: content.length > 0 ? P.richText(content) : 'Featured Templates',
    }),
  }),
})
