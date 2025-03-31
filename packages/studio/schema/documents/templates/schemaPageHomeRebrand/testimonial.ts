import {F} from '@/schema/tool'

const testimonial =  F.object({
  name: 'testimonial',
  fields: [
    F.string({name: 'heading'}),
    F.string({name: 'subheading'}),
    F.reference('testimonial')
  ],
})

export default testimonial