import { BsBookmarkHeart as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTestimonial = {
  icon,
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    F.string({
      name: 'title',
      description:
        'Optional title used when the testimonial is displayed on Template Detail Page',
    }),
    F.string({ name: 'authorName' }),
    F.string({ name: 'authorTitle' }),
    F.text({ name: 'testimonial' }),
    F.field('rating'),
    F.image(),
    F.links({
      name: 'source',
      validation: (Rule) => Rule.max(1),
      link: { args: { linkStyle: false, hasIcon: false } },
    }),
    F.multiReference('categoryTestimonial', { name: 'category' }),
  ],
  preview: P.titleImage({
    title: 'authorName',
    subtitle: 'authorTitle',
  }),
}
