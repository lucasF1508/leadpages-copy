import {BsChatQuote as icon} from 'react-icons/bs'
import {F, P} from '@/schema/tool'

export const blockquote = F.object({
  name: 'blockquote',
  icon,
  fields: [
    F.field('blockContentSimple', {name: 'content', title: 'Content'}),
    F.string({name: 'author', title: 'Author'}),
  ],
  preview: {
    select: {
      content: 'content',
      author: 'author',
    },
    prepare: ({content, author = ''}) => ({
      title: content ? P.richText(content) : '',
      subtitle: author,
      media: icon,
    }),
  },
})
