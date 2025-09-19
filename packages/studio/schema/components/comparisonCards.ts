import {F, G, P} from '@/schema/tool'
import { MdOutlineFeaturedVideo as icon } from 'react-icons/md'

export const comparisonCards = F.object({
  name: 'comparisonCards',
  icon,
  groups: [
    G.define('cta', { title: 'CTA' }),
    G.define('content', { title: 'Content', default: true }),
  ],
  fields: [
    ...G.group('content', [
      F.array({
        name: 'cards',
        validation: (Rule) => Rule.min(1),
  of: [
    { type: 'comparisonCard' }, 
    ],
      }),
    ]),
    ...G.group('cta', [F.field('cta')]),
  ],
  preview: {
    select: { cta: 'cta', cards: 'cards' },
    prepare: ({ cta, cards = [] }) => {
      const { heading, content = [], backgroundImage } = cta || {}
      return {
        title: heading || 'Comparison Cards',
        subtitle: P.richText([...content]) || `(${cards.length} card(s))`,
        media: backgroundImage || icon,
      }
    },
  },
})
