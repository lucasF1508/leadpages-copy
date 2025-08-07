import isEmpty from 'lodash/isEmpty'
import {RxSpaceEvenlyHorizontally as icon} from 'react-icons/rx'
import {F, G} from '@/schema/tool'

export const marquee = F.object({
  icon,
  name: 'marquee',
  groups: [G.define('content', {default: true}),  G.define('options')],
  fields: [
    ...G.group('content', [
      F.radio(['logo', 'image'],{name: 'type'}),
      F.number({
        name: 'maxHeight',
        title: 'Marquee Max Height',
        description: 'If blank the default of 577 will be used.',
        hidden: ({parent}) => parent?.type !== 'image',
      }),
      F.message('Max height can be applied to each logo below, as logos may vary in size', {hidden: ({parent}) => parent?.type !== 'logo'}),
      F.array({
        name: 'images',
        hidden: ({parent}) => parent?.type !== 'image',
        of: [
          F.image({
            fields: [
              F.link({
                args: {
                  linkStyle: false,
                  label: false,
                },
              })
            ],
          }),
        ],
        options: {layout: 'grid'},
      }),
      F.array({
        name: 'logos',
        hidden: ({parent}) => parent?.type !== 'logo',
        of: [
          F.image({
            fields: [
              F.link({
                args: {
                  linkStyle: false,
                  label: false,
                },
              })
            ],
          }),
        ],
        options: {layout: 'grid'},
      }),
    ]),
    ...G.group('options', [
      F.number({
        name: 'duration',
        title: 'Duration (seconds) for a full loop.',
        description: 'A longer duration is needed for more items. A good starting point is 5× the number of items. If left empty, this default will be used.',
      }),
    ])
  ],

  preview: {
    select: {
      logos: 'logos',
      type: 'type',
      images: 'images',
    },
    prepare({logos, images, type}) {
      if (type === 'image' && !isEmpty(images)) {
        return {
          title: `Image Marquee ${isEmpty(images) ? '(empty)' : ''}`,
          subtitle: `${images.length} image${images.length === 1 ? '' : 's'}`,
          media: icon,
        }
      }

      return {
        title: `Logo Marquee ${isEmpty(logos) ? '(empty)' : ''}`,
        subtitle: `${logos.length} logo${logos.length === 1 ? '' : 's'}`,
        media: icon,
      }
    },
  },
})