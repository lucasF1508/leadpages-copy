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
        title: 'Background Color',
        name: 'variant',
        options: {
          list: ['white', 'gray'],
        },
        initialValue: 'gray',
      }),
      F.string({
        name: 'quoteColor',
        options: {
          list: [
            { title: 'Gray', value: 'gray' },
            { title: 'Light Lavender', value: 'lavenderLight' },
            { title: 'Lightest Teal', value: 'tealLighter' },
          ],
        },
      }),
      F.number({
        name: 'limit',
        description:
          'Limit the number of testimonials to be displayed. Leave blank to display all.',
      }),
      F.boolean({
        name: 'includeRating',
        initialValue: false,
      }),
      F.field('animate', {
        description: 'Include fade in-up animation for section contents.',
      }),
    ]),
  ],
  preview: P.text('Testimonials'),
})
