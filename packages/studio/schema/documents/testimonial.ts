import {BsBookmarkHeart as icon} from 'react-icons/bs'
import {F, P} from '@/schema/tool'

export const schemaTestimonial = F.document({
  icon,
  name: 'testimonial',
  title: 'Testimonial',
  fields: [
    F.string({
      name: 'titleSecondary',
      description: 'Used when the testimonial is displayed on Template Detail Page',
    }),
    F.string({name: 'title', description: 'Authors Name'}),
    F.string({name: 'authorTitle', description: 'Job title of the author'}),
    F.text({name: 'testimonial'}),
    F.field('rating'),
    F.image(),
    F.links({
      name: 'source',
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {  
    select: {
      title: 'title',
      subtitle: 'authorTitle',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Testimonial',
        subtitle,
        media: media || icon,
      }
    },
  }
})
