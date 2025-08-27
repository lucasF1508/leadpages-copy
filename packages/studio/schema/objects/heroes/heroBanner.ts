import {RxSection as icon} from 'react-icons/rx'
import {F, G, P} from '@/schema/tool'

export const heroBanner = F.object({
  icon,
  name: 'heroBanner',
  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('media', {title: 'Media'}),
  ],
  fields: [
    ...G.group('content', [
      F.string({name: 'label'}),
      F.string({name: 'heading'}),
      F.string({name: 'subheading'}),
    ]),
  ],
  preview: {
    select: {
      label: 'label',
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({label = '', heading = '', subheading = ''}) {
      return {
        title: heading || 'Hero Banner',
        subtitle: label || subheading,
      }
    },
  },
})
