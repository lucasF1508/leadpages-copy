import {F, G} from '@/schema/tool'
import cta from './cta'

const featureCards = F.object({
  name: 'featureCards',
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
    ...G.group('cta', [cta]),
  ],
})

export default featureCards