import { AiOutlineForm as icon } from 'react-icons/ai'
import { F, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTestimonials = F.object({
  icon,
  name: 'testimonials',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.multiReference('testimonial', {
        name: 'testimonials',
        options: {
          titleField: 'authorName',
        },
      }),
    ]),
    ...G.group('options', [
      F.string({
        name: 'variant',
        options: {
          list: ['gray', 'tan'],
        },
        initialValue: 'gray',
      }),
      F.number({
        name: 'limit',
        description:
          'Limit the number of testimonials to be displayed. Leave blank to display all.',
      }),
    ]),
  ],
  preview: P.text('Testimonials'),
})
