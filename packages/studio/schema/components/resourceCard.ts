import {F} from '@/schema/tool'
import {BiHighlight as icon} from 'react-icons/bi'

export const resourceCard = F.object({
  name: 'resourceCard',
  icon,
  fields: [
    F.string({name: 'heading'}),
    F.string({name: 'title'}),
    F.link({
      args: {
        linkSize: false,
        hasHash: false,
      },
    }),
    F.image(),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title,
        media: image,
      }
    },
  },
})