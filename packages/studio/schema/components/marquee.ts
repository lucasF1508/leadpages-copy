import isEmpty from 'lodash/isEmpty'
import {RxSpaceEvenlyHorizontally as icon} from 'react-icons/rx'
import {F} from '@/schema/tool'

export const marquee = F.object({
  icon,
  name: 'marquee',
  fields: [
    F.array({
      name: 'logos',
      of: [
        F.image({
          fields: [
            F.number({
              name: 'maxHeight',
              description: 'If blank the default of 32 will be used.',
            }),
          ],
        }),
      ],
      options: {layout: 'grid'},
    }),
  ],

  preview: {
    select: {
      logos: 'logos',
    },
    prepare({logos}) {
      return {
        title: `Logo Marquee ${isEmpty(logos) ? '(empty)' : ''}`,
        media: icon,
      }
    },
  },
})
