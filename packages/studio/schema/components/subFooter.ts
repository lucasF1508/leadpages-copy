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
      F.links({
        name: 'links',
        signUpOption: true,
        validation: (Rule) => Rule.max(1),
        description: 'Use sign up option for email form with 4 redirection options (Standard Annual, Standard Monthly, Pro Annual, Pro Monthly). Otherwise use CTA fields below.',
      }),
      F.string({ name: 'ctaLabel', initialValue: 'Start Free Trial', hidden: ({parent}) => parent?.links?.length > 0 }),
      F.url({ name: 'ctaHref', hidden: ({parent}) => parent?.links?.length > 0 }),
      F.dropdown(['_self','_blank'], { name: 'target', initialValue: '_self', hidden: ({parent}) => parent?.links?.length > 0 }),
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
