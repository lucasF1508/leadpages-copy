import {BsNewspaper as icon, BsCardText as cardIcon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

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
          groups: [...G.fieldGroupComponentOptions(), G.define('media')],
          fields: [
            ...G.group('content', [
              F.string({name: 'heading'}),
              F.text({name: 'content'}),
              F.url({title: 'URL'}),
            ]),
            ...G.group('media', [F.image()]),
            ...G.group('options', [
              F.boolean({name: 'isHighlightedArticle', initialValue: false}),
              F.string({name: 'ariaLabel', title: 'aria-label'}),
            ]),
          ],
          preview: P.titleImage({title: 'heading', subtitle: 'content'}),
        }),
      ],
    }),
  ],
  preview: {
    prepare: ({title = 'Article Cards'}) => ({
      title,
    }),
  },
})
