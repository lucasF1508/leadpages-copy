import {FaQuoteRight as icon} from 'react-icons/fa'
import {F, G, P} from '@/legacy/schema/tool'

const customerQuoteKaileiFields = [
  F.radio(['left', 'right'], {
    name: 'align',
    title: 'Content Alignment',
    initialValue: 'left',
    hidden: ({parent}) => !['customerQuoteKailei'].includes(parent.legacyComponent),
  }),
]

const pricingWavesFields = [
  F.string({
    name: 'title',
    hidden: ({parent}) => !['pricingWaves'].includes(parent.legacyComponent),
  }),
  F.string({
    name: 'authorName',
    hidden: ({parent}) => !['pricingWaves'].includes(parent.legacyComponent),
  }),
  F.string({
    name: 'authorTitle',
    hidden: ({parent}) => !['pricingWaves'].includes(parent.legacyComponent),
  }),
]

export const schemaQuote = F.object({
  icon,
  name: 'quote',
  groups: [...G.fieldGroupComponentOptions(), G.define('legacy')],
  fields: [
    ...G.group('content', [F.text(), F.string({name: 'underline'})]),
    ...G.group('options', [
      F.radio(['none', 'tan'], {
        name: 'backgroundColor',
        hidden: ({parent}) => !!parent.legacyComponent,
      }),
      F.message('The selected Legacy Component overrides all available options.', {
        hidden: ({parent}) => !parent.legacyComponent,
      }),
    ]),
    ...G.group('legacy', [
      F.dropdown(
        [
          {title: 'Customer Quote Kailei', value: 'customerQuoteKailei'},
          {title: 'Pricing Waves', value: 'pricingWaves'},
        ],
        {
          name: 'legacyComponent',
        }
      ),
      ...customerQuoteKaileiFields,
      ...pricingWavesFields,
      F.field('image', {
        hidden: ({parent}) =>
          !['customerQuoteKailei', 'pricingWaves'].includes(parent.legacyComponent),
      }),
    ]),
  ],
  preview: P.titleImage({title: 'text', subtitle: 'underline'}),
})
