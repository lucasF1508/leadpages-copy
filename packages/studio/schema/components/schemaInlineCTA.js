import {G, P} from '@/schema/tool'
import {BsCapslock as icon} from 'react-icons/bs'
import {fields} from '../shared/inlineCTA'

export const schemaInlineCTA = {
  icon,
  title: 'Inline CTA',
  name: 'inlineCTA',
  type: 'object',
  groups: [...G.fieldGroupComponentOptions(), G.define('links')],
  fields,
  preview: P.preview({
    title: 'title',
    image: 'image',
    content: 'content',
    prepare: ({title, image}) => {
      return {
        title: title || 'Inline CTA',
        media: image,
      }
    },
  }),
}
