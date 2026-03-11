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
      F.dropdown(['default', 'primary', 'secondary'], {
        name: 'backgroundColor',
        title: 'Background Color',
        description: 'Background color for the marquee section',
        initialValue: 'default',
      }),
      F.radio(['visible', 'invisible'], {
        name: 'visibility',
        title: 'Visibility',
        description: 'When set to invisible, the marquee will not render and will not take up space.',
        initialValue: 'visible',
        options: {layout: 'radio'},
      }),
      F.boolean({
        name: 'static',
        title: 'Static (no animation)',
        description: 'When on, the marquee is fixed and does not scroll. When off, it scrolls as usual.',
        initialValue: false,
      }),
      F.number({
        name: 'duration',
        title: 'Duration (seconds) for a full loop.',
        description: 'A longer duration is needed for more items. A good starting point is 5× the number of items. If left empty, this default will be used.',
        hidden: ({parent}) => parent?.static === true,
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