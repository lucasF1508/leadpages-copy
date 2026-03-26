import {F, P} from '@/schema/tool'
import {BiUserCheck as icon} from 'react-icons/bi'

export const testimonialFeaturedBlock = F.object({
  name: 'testimonialFeaturedBlock',
  title: 'Testimonials Featured Block',
  icon,
  fields: [
    F.radio(['dark', 'light'], {
      name: 'variant',
      title: 'Theme',
      description: 'Dark or light version',
      initialValue: 'dark',
    }),
    F.field('blockContentHero', {name: 'heading'}),
    F.field('blockContentHero', {name: 'subheading'}),
    F.array({
      name: 'testimonials',
      description:
        'Shows 3 testimonials with one featured (wider) card. Auto-rotates every 5 seconds.',
      of: [F.reference('testimonial')],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      image: 'testimonials.0.image',
      subtitleAlt: 'testimonials.0.title',
    },
    prepare({heading, subheading, image, subtitleAlt}) {
      const title = heading ? P.richText(heading) : 'Testimonial Featured'
      const subtitle = subheading ? P.richText(subheading) : subtitleAlt
      return {
        title: title || 'Testimonial Featured',
        subtitle: subtitle || '',
        media: image || icon,
      }
    },
  },
})
