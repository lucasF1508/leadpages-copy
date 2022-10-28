import { BsFileText as icon } from 'react-icons/bs'
import { F, FS, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCategoryTestimonial = {
  icon,
  name: 'categoryTestimonial',
  title: 'Testimonial Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults()],
  fieldsets: [FS.fieldset('meta'), FS.seo()],
  fields: [F.title({ group: 'content' }), F.slug({ group: 'meta' })],
}
