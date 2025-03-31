import {F} from '@/schema/tool'
import {blockContent} from './blockContent'

const mediaWithTextSticky = F.object({
  name: 'mediaWithTextSticky',
  fields: [
    F.array({
      name: 'items',
      of: [
        F.object({
          name: 'item', 
          fields: [
            F.media({
              args: {caption: false}
            }), 
            F.string({name: 'pillContent'}),
            blockContent
          ]
        })
      ],
    }),
  ],
})

export default mediaWithTextSticky