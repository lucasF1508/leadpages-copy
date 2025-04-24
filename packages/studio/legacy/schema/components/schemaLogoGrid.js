import {GrGallery as icon} from 'react-icons/gr'
import {F} from '@/legacy/schema/tool'
import isEmpty from 'lodash/isEmpty'

export const schemaLogoGrid = F.object({
  icon,
  name: 'logoGrid',
  fields: [
    F.array({
      name: 'logos',
      options: {layout: 'grid'},
      of: [
        F.object({
          fields: [F.image(), F.url()],
          preview: {
            select: {
              image: 'image',
            },
            prepare: ({image}) => ({media: image}),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      logos: 'logos',
    },
    prepare({logos}) {
      return {
        title: `Logo Grid ${isEmpty(logos) ? '(empty)' : ''}`,
      }
    },
  },
})
