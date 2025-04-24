import isEmpty from 'lodash/isEmpty'
import {BiImages as icon} from 'react-icons/bi'
import {F} from '@/schema/tool'

export const logoGrid = F.object({
  icon,
  name: 'logoGrid',
  fields: [
    F.array({
      name: 'logos',
      options: {layout: 'grid'},
      of: [
        F.object({
          name: 'logo',
          fields: [
            F.image({
              fields: [F.url()],
            }),
          ],
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
        media: icon,
      }
    },
  },
})
