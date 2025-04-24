import {BsCardText as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const cards = F.object({
  name: 'cardsBlock',
  icon,
  fields: [
    ...F.contentGroup({
      link: {
        conditions: {
          none: [],
        },
      },
    }),
    F.radio(['mostRecent', 'selection', 'custom'], {
      name: 'condition',
      title: 'Type',
      initialValue: 'mostRecent',
    }),
    F.radio(['post'], {
      name: 'contentType',
      initialValue: 'post',
      hidden: () => true,
    }),
    F.multiReference('post', {
      name: 'posts',
      title: 'Cards',
      hidden: ({parent}) => parent?.condition !== 'selection',
    }),
    F.array({
      name: 'cards',
      title: 'Cards',
      hidden: ({parent}) => parent?.condition !== 'custom',
      of: [
        F.object({
          name: 'card',
          fields: [
            F.media({args: {caption: false}}),
            ...F.contentGroup({
              label: false,
              link: {
                conditions: {
                  none: [],
                },
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      condition: 'condition',
      contentType: 'contentType',
      post1: 'posts.0.title',
      post2: 'posts.1.title',
      post3: 'posts.2.title',
      limit: 'limit',
      cards: 'cards',
    },
    prepare: ({heading, condition, contentType, limit = 3, post1, post2, post3, cards}) => {
      let title = ''
      switch (condition) {
        case 'mostRecent':
          title = `${limit === -1 ? 'All' : `${limit} most recent`}${
            contentType ? ` ${contentType}s` : ''
          }`
          break
        case 'selection':
          title = [post1, post2, post3].join(', ') || 'Custom Selection'
          break
        case 'custom':
          title = cards.map(({heading = ''}) => heading).join(', ') || 'Custom Cards'
          break
        default:
          title = 'Cards (empty)'
          break
      }

      return {title: heading || title, subtitle: heading ? title : '', media: icon}
    },
  },
})
