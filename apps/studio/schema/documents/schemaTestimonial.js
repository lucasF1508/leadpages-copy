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
    F.number({
      name: 'rating',
      validation: (Rule) => Rule.min(1).max(5).positive().precision(1),
      initialValue: 5,
      options: {
        list: [
          { title: '5', value: 5 },
          { title: '4.5', value: 4.5 },
          { title: '4', value: 4 },
          { title: '3.5', value: 3.5 },
          { title: '3', value: 3 },
          { title: '2.5', value: 2.5 },
          { title: '2', value: 2 },
          { title: '1.5', value: 1.5 },
          { title: '1', value: 1 },
          { title: '0.5', value: 0.5 },
        ],
        layout: 'dropdown',
      },
    }),
    F.image(),
    F.multiReference('categoryTestimonial', { name: 'category' }),
  ],
  preview: P.titleImage({
    title: 'authorName',
    subtitle: 'authorTitle',
  }),
}
