import { BsCapslock as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCtaInline = F.object({
  icon,
  title: 'CTA',
  name: 'ctaInline',
  fields: [F.reference('cta', { title: 'Call to Action' })],
  preview: {
    select: {
      title: 'cta.title',
    },
    prepare: ({ title = '(empty)' }) => ({ title: `CTA: ${title}` }),
  },
})
