// packages/studio/schemas/components/subFooter.ts
import {RxSection as icon} from 'react-icons/rx'
import {F, G} from '@/schema/tool'

export const subFooter = F.object({
  icon,
  name: 'subFooter',
  groups: [
    G.define('content', { title: 'Content', default: true }),
    G.define('actions', { title: 'Actions' }),
  ],
  fields: [
    ...G.group('content', [
      F.string({ name: 'label' }),
      F.string({ name: 'heading', required: true }),
      F.string({ name: 'subheading' }),
    ]),
    ...G.group('actions', [
      F.string({ name: 'ctaLabel', required: true, initialValue: 'Start Free Trial' }),
      F.url({ name: 'ctaHref', required: true }),
      F.dropdown(['_self','_blank'], { name: 'target', initialValue: '_self' }),
    ]),
  ],
  preview: {
    select: { label: 'label', heading: 'heading', subheading: 'subheading', ctaLabel: 'ctaLabel' },
    prepare({ label = '', heading = '', subheading = '', ctaLabel = '' }) {
      return {
        title: heading || 'subFooter',
        subtitle: label || subheading || ctaLabel,
        media: icon,
      }
    },
  },
})
