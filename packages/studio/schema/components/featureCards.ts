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
    },
    prepare({cta}) {
      const {heading, content } = cta || {}
      return {
        title: heading || 'Feature Cards',
        subtitle: P.richText(content),
        media: icon,
      }
    },
  },
})