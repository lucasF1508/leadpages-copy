import { BsBookmarkHeart as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTestimonial = {
  icon,
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    F.string({ name: 'authorName' }),
    F.string({ name: 'authorTitle' }),
    F.text({ name: 'testimonial' }),
    F.image(),
    F.multiReference('categoryTestimonial', { name: 'category' }),
  ],
  preview: P.titleImage({
    title: 'authorName',
    subtitle: 'authorTitle',
  }),
}
