import {BsBookmarkHeart as icon} from 'react-icons/bs'
import {F, P, G} from '@/schema/tool'
import { orderRankField } from '@sanity/orderable-document-list'

export const categoryTestimonial = {
  icon,
  name: 'categoryTestimonial',
  title: 'Testimonial Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [
    orderRankField({ type: "categoryTestimonial" }),
    F.title({group: 'content'}), 
    F.slug({group: 'meta'})
  ],
  preview: P.titleImage({
    prepare: ({title}: {title: string}) => ({title, subtitle: 'Category'}),
  }),
}
