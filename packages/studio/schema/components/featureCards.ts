import {F, G, P} from '@/schema/tool'
import { MdOutlineFeaturedVideo as icon } from "react-icons/md";

export const featureCards = F.object({
  name: 'featureCards',
  icon,
  groups: [G.define('cta', {title: 'CTA'}), G.define('content', {title: 'Content', default: true})],
  fields: [
    ...G.group('content', [
      F.array({
        name: 'cards',
        of: [
          F.object({
            name: 'card',
            fields: [
              F.image({name: 'icon'}),
              F.field('blockContentSimple', {name: 'content'}),
            ],
            preview: {
              select: {
                content: 'content',
                icon: 'icon',
              },
              prepare: ({content, icon}) => ({
                title: content ? P.richText(content) : 'Feature Card',
                media: icon,
              }),
            },
          }),
        ],
      }),
    ]),
    ...G.group('cta', [
      F.field('cta')
    ]),
  ],
  preview: {
    select: {
      cta: 'cta',
      cards: 'cards',
    },
    prepare: ({cta}) => {
      const { heading, content = [], backgroundImage } = cta || {}
      return {
        title: heading || 'Feature Cards',
        subtitle: P.richText([...(content)]) || '(No CTA Configured)',
        media: backgroundImage
      }
    }
  },
})