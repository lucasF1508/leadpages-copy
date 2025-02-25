import {BsCardText as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaCards = F.object({
  name: 'cardsBlock',
  icon,
  fields: [
    ...F.contentGroup(),
    F.object({
      icon,
      name: 'cards',
      parseType: 'cards',
      fields: [
        F.radio(['mostRecent', 'selection'], {
          name: 'condition',
          title: 'Type',
          initialValue: 'mostRecent',
        }),
        F.string({
          name: 'contentType',
          initialValue: 'post',
          hidden: () => true,
        }),
        F.radio(['none', 'category'], {
          name: 'filter',
          title: 'Filter By:',
          initialValue: 'none',
          hidden: ({parent}) => parent?.condition !== 'mostRecent',
        }),
        F.reference('categoryPost', {
          name: 'category',
          hidden: ({parent}) => parent?.filter !== 'category' || parent?.condition !== 'mostRecent',
        }),
        F.field('number', {
          name: 'limit',
          initialValue: 3,
          validation: (Rule) => Rule.greaterThan(1).integer(),
          hidden: ({parent}) => parent?.condition !== 'mostRecent',
        }),
        F.multiReference('post', {
          name: 'selectionDocs',
          title: 'Cards',
          hidden: ({parent}) => parent?.condition !== 'selection',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      cards: 'cards',
    },
    prepare: ({heading = '', cards = {}}) => {
      const {condition, contentType, limit = ''} = cards
      let title = ''
      switch (condition) {
        case 'mostRecent':
          title = `${limit === -1 ? 'All' : `${limit} most recent`} ${contentType}s`
          break
        case 'selection':
          title = 'Custom selection'
          break
        default:
          title = 'Cards (empty)'
          break
      }

      return {title: heading || title, subtitle: heading ? title : ''}
    },
  },
})
