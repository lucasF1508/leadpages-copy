import { FaQuoteRight as icon } from 'react-icons/fa'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaQuote = F.object({
  icon,
  name: 'quote',
  groups: [...G.fieldGroupComponentOptions(), G.fieldGroup('legacy')],
  fields: [
    ...G.group('content', [F.text(), F.string({ name: 'underline' })]),
    ...G.group('options', [
      F.radio(['none', 'tan'], {
        name: 'backgroundColor',
        hidden: ({ parent }) => !!parent.legacyComponent,
      }),
      F.message(
        'The selected Legacy Component overrides all available options.',
        {
          hidden: ({ parent }) => !parent.legacyComponent,
        }
      ),
    ]),
    ...G.group('legacy', [
      F.dropdown(['customerQuoteKailei'], { name: 'legacyComponent' }),
      F.radio(['left', 'right'], {
        name: 'align',
        title: 'Content Alignment',
        initialValue: 'left',
        hidden: ({ parent }) =>
          !['customerQuoteKailei'].includes(parent.legacyComponent),
      }),
      F.field('media', {
        hidden: ({ parent }) =>
          !['customerQuoteKailei'].includes(parent.legacyComponent),
      }),
    ]),
  ],
  preview: P.titleImage({ title: 'text', subtitle: 'underline' }),
})
