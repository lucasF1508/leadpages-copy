import {RxSection as icon} from 'react-icons/rx'
import {F, G, P} from '@/schema/tool'

export const heroComparisons = F.object({
  icon,
  name: 'heroComparisons',
  groups: [
    G.define('content', { title: 'Content', default: true }),
  ],
  fields: [
    ...G.group('content', [
      F.string({ name: 'label' }),
      F.field('blockContentHero', {
        name: 'content',
      }),
      F.string({ name: 'subheading' }),
    ]),
  ],
  preview: {
    select: {
      label: 'label',
      content: 'content',
      subheading: 'subheading',
    },
    prepare({ label = '', content = [], subheading = '' }) {
      const [titleBlock, ...rest] = content || []
      return {
        title: titleBlock ? P.richText([titleBlock]) : 'Hero Comparisons',
        subtitle: label || subheading || (rest?.length ? P.richText(rest) : ''),
        media: icon,
      }
    },
  },
})
