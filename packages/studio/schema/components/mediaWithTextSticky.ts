import {F, P, G, PortableTextBlock} from '@/schema/tool'
import {BiIdCard as icon} from 'react-icons/bi'

export const mediaWithTextSticky = F.object({
  name: 'mediaWithTextSticky',
  title: 'Media With Text Sticky',
  icon,
  fields: [
    F.array({
      name: 'items',
      of: [
        F.object({
          name: 'item', 
          groups: [G.define('content', {default: true}), G.define('media'), G.define('options')],
          fields: [
            ...G.group('content', [
              F.string({name: 'pillContent'}),
              F.field('blockContent', {name: 'content'}),
            ]),
            ...G.group('media', [
              F.media({
                args: {caption: false}
              }), 
            ]),
          ],
          preview: {
            select: {
              content: 'content',
              media: 'media',
            },
            prepare: ({content, media}) => {
              const [heading, ...subtitle] = content || []

              return {
                title: P.richText([heading]) || 'Media With Text',
                subtitle: subtitle ? P.richText(subtitle) : '',
                media: media?.image || icon,
              }
            }
          }
        })
      ],
    }),
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      const subtitle = items?.map(({content}: {content : PortableTextBlock[]}) => content[0])

      return {
        title: `Media with Text`,
        subtitle: P.richText(subtitle), 
        media: icon,
      }
    },
  },
})