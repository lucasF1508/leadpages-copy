import { G } from 'part:gearbox-schema-tool/schema-builder'
import { BsCapslock as icon } from 'react-icons/bs'
import { fields } from '../shared/inlineCTA'

export const schemaInlineCTA = {
  icon,
  title: 'Inline CTA',
  name: 'inlineCTA',
  type: 'object',
  groups: [
    ...G.fieldGroupComponentOptions(),
    G.fieldGroup('links', { title: 'Links' }),
  ],
  fields,
  preview: {
    select: {
      title: 'title',
      image: 'image',
      content: 'content',
    },
    prepare(selection) {
      const { title, image } = selection
      return {
        title: title || 'Inline CTA',
        media: image,
      }
    },
  },
}
