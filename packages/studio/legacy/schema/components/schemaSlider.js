import {IoMdImages as icon} from 'react-icons/io'
import {F} from '@/legacy/schema/tool'
import isEmpty from 'lodash/isEmpty'

export const schemaSlider = F.object({
  icon,
  title: 'Image Slider',
  name: 'imageSlider',
  description: 'Drag and Drop to upload multiple images at once',
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
        title: `Image Slider ${isEmpty(images) ? '(empty)' : ''}`,
      }
    },
  },
})
