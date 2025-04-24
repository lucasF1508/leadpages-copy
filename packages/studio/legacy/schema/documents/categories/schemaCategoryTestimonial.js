import {BsBookmarkHeart as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

export const schemaCategoryTestimonial = {
  icon,
  name: 'categoryTestimonial',
  title: 'Testimonial Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fields: [F.title({group: 'content'}), F.slug({group: 'meta'})],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Category'}),
  }),
}
