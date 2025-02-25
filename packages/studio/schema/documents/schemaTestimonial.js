import {BsBookmarkHeart as icon} from 'react-icons/bs'
import {F, P} from '@/schema/tool'

export const schemaTestimonial = {
  icon,
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    F.string({
      name: 'titleSecondary',
      description: 'Used when the testimonial is displayed on Template Detail Page',
    }),
    F.string({name: 'title', description: 'Authors Name'}),
    F.string({name: 'authorTitle', description: 'Job title of the author'}),
    F.string({
      name: 'authorName',
      hidden: true,
      deprecated: 'Migrated to title for use in multireference',
    }),
    F.text({name: 'testimonial'}),
    F.field('rating'),
    F.image(),
    F.links({
      name: 'source',
      validation: (Rule) => Rule.max(1),
      link: {args: {linkStyle: false, hasIcon: false}},
    }),
    F.multiReference('categoryTestimonial', {name: 'category'}),
  ],
  preview: P.titleImage({
    title: 'title',
    subtitle: 'authorTitle',
  }),
}
