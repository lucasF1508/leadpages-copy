import {FaRegObjectGroup as icon} from 'react-icons/fa'
import {MdOutlineQueryStats as statIcon} from 'react-icons/md'
import {F, G, P} from '@/schema/tool'

export const schemaStatsAlternate = F.object({
  icon,
  title: 'Stats Alternate',
  name: 'statsAlternate',
  groups: [...G.fieldGroupDefaults(), G.define('options'), G.define('media')],
  fields: [
    ...G.group('content', [
      F.string({name: 'overline'}),
      F.blockContent(),
      F.links({
        validation: (Rule) => Rule.max(1),
        signUpOption: true,
      }),
      F.array({
        title: 'Stats Array',
        name: 'stats',
        validation: (Rule) => Rule.min(3).max(4),
        of: [
          F.object({
            icon: statIcon,
            fields: [
              F.string({
                name: 'stat',
              }),
              F.string({
                name: 'label',
              }),
            ],
          }),
        ],
      }),
    ]),
    ...G.group('options', [
      F.string({
        name: 'backgroundColor',
        initialValue: 'transparent',
        options: {
          list: [
            {title: 'Dark Purple', value: 'purpleDark'},
            {title: 'Transparent', value: 'transparent'},
          ],
          layout: 'radio',
          direction: 'horizontal',
        },
      }),
      F.string({
        name: 'imageBackgroundColor',
        initialValue: '$lavenderLight',
        options: {
          list: [
            {title: 'Purple', value: '$purple'},
            {title: 'Dark Blue (Primary Navy)', value: '$darkBlue'},
            {title: 'Dark Purple', value: '$purpleDark'},
            {
              title: 'Lavender Light',
              value: '$lavenderLight',
            },
          ],
          layout: 'radio',
          direction: 'horizontal',
        },
      }),
    ]),
    ...G.group('media', [F.image({name: 'featuredImage'})]),
  ],
  preview: P.preview({
    content: 'content',
    prepare: ({content}) => ({
      title: 'Stats Alternate',
      subtitle: content ? P.richText(content) : '[Empty]',
    }),
  }),
})
