import { BsNewspaper as icon, BsCardText as cardIcon } from 'react-icons/bs'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCardsArticle = F.object({
  icon,
  name: 'cardsArticle',
  title: 'Article Cards',
  fields: [
    F.array({
      icon: cardIcon,
      name: 'cards',
      of: [
        F.object({
          name: 'card',
          groups: G.fieldGroupComponentOptions(),
          fields: [
            ...G.group('content', [
              F.string({ name: 'heading' }),
              F.text({ name: 'content' }),
              F.url(),
              F.image(),
            ]),
            ...G.group('options', [
              F.boolean({ name: 'isHighlightedArticle', initialValue: false }),
              F.string({ name: 'ariaLabel', title: 'Link Alt Text' }),
            ]),
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'content',
            },
            prepare: ({ title = 'Article Card', subtitle = '' }) => ({
              title,
              subtitle,
              media: cardIcon,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: ({ title = 'Article Cards' }) => ({
      title,
    }),
  },
})
