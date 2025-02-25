import {BsCapslock as icon} from 'react-icons/bs'
import {P, G} from '@/schema/tool'
import {fields} from '../shared/inlineCTA'

export const schemaInlineCTAGlobal = {
  icon,
  name: 'inlineCTAGlobal',
  title: 'Blog CTA',
  type: 'document',
  groups: [...G.fieldGroupComponentOptions(), G.define('links')],
  fields,
  preview: {
    select: {
      content: 'content',
      image: 'image',
      contentRight: 'contentRight',
      imageBottom: 'imageBottom',
    },
    prepare: ({content, image, contentRight, imageBottom}) => ({
      title: P.richText(content),
      media: image || icon,
      subtitle: `${contentRight ? 'Content Right' : 'Content Left'}${
        imageBottom ? ' Image Bottom' : ''
      }`,
    }),
  },
}
