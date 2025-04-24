import {GrGallery as icon} from 'react-icons/gr'
import {F} from '@/legacy/schema/tool'
import isEmpty from 'lodash/isEmpty'

export const schemaGallery = F.object({
  icon,
  name: 'gallery',
  fields: [
    F.array({
      name: 'images',
      options: {layout: 'grid'},
      of: [F.image()],
    }),
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare({images}) {
      return {
        title: `Image Gallery ${isEmpty(images) ? '(empty)' : ''}`,
      }
    },
  },
})
