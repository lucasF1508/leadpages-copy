import {F} from '@/schema/tool'
import { BiUserCheck as icon} from "react-icons/bi";

export const testimonialBlock =  F.object({
  name: 'testimonialBlock',
  title: 'Testimonials Block',
  icon,
  fields: [
    F.string({name: 'heading'}),
    F.string({name: 'subheading'}),
    F.multiReference(['testimonial'], {name: 'testimonials', description: 'If more than 1 testimonial is selected slider will be used to display testimonials'}),
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
  }
})