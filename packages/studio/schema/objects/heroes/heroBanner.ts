import {RxSection as icon} from 'react-icons/rx'
import {F, G, P} from '@/schema/tool'

export const heroBanner = F.object({
  icon,
  name: 'heroBanner',
  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('media', {title: 'Media'}),
  ],
  fields: [...G.group('content', [F.string({name: 'label'}), F.string({name: 'heading'})])],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
    },
    prepare({heading = '', content}) {
      const subtitle = content ? P.richText(content) : ''
      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
      }
    },
  },
})
