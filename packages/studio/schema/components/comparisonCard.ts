// packages/studio/schemas/components/comparisonCard.ts
import { RxCardStack as icon } from 'react-icons/rx'
import { F, G } from '@/schema/tool'

export const comparisonCard = F.object({
  icon,
  name: 'comparisonCard',
  groups: [
    G.define('content', { title: 'Content', default: true }),
    G.define('action', { title: 'CTA' }),
  ],
  fields: [
    ...G.group('content', [
      F.image({ name: 'logo', title: 'Logo', options: { hotspot: true }, required: true }),
      F.string({ name: 'logoAlt', title: 'Logo alt text' }),
      F.string({ name: 'title', title: 'Title', required: true }),
      F.string({ name: 'heading', title: 'Heading' }),
      F.text({ name: 'description', title: 'Description', rows: 3, required: true }),
    ]),
    ...G.group('action', [
      F.links({
        name: 'links',
        title: 'CTA',
        validation: (Rule) => Rule.max(1).required(),
      }),
    ]),
  ],
  preview: {
    select: { title: 'title', heading: 'heading', description: 'description', media: 'logo' },
    prepare: ({ title = 'Comparison Card', description = '', media }) => ({
      title,
      subtitle: (description || '').slice(0, 80),
      media,
    }),
  },
})
