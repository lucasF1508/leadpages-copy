import {F} from '@/schema/tool'
import {BiUserCheck as icon} from 'react-icons/bi'

export const testimonialBlock = F.object({
  name: 'testimonialBlock',
  title: 'Testimonials Block',
  icon,
  fields: [
    F.string({name: 'heading'}),
    F.string({name: 'subheading'}),
    F.array({
      name: 'testimonials',
      description:
        'If more than 1 testimonial is selected slider will be used to display testimonials',
      of: [F.reference('testimonial')],
    }),
    F.string({
      name: 'variant',
      title: 'Variant',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Dark', value: 'dark'},
          {title: 'Light', value: 'light'},
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
      image: 'testimonial.image',
      subtitleAlt: 'testimonial.title',
    },
    prepare({title, subtitle, image, subtitleAlt}) {
      return {
        title: title || 'Testimonial',
        subtitle: subtitle || subtitleAlt,
        media: image || icon,
      }
    },
  },
})
