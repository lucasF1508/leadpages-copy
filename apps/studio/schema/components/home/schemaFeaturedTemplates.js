import { AiOutlineStar as icon } from 'react-icons/ai'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFeaturedTemplates = F.object({
  icon,
  name: 'featuredTemplates',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    F.field('blockContentHeadline', { name: 'content', group: 'content' }),
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
  preview: P.blockContent(),
})
