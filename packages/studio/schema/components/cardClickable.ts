import {BsCardText as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const cardClickable = F.object({
  name: 'cardClickable',
  icon,
  fields: [
    F.image({name: 'icon'}),
    F.string({name: 'label'}),
    F.string({name: 'heading'}),
    F.text({name: 'content'}),
    F.rawLink({name: 'link', args: {label: false}, required: true}),
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
