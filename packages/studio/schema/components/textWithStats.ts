import { MdOutlineQueryStats as icon } from "react-icons/md";
import {F, P} from '@/schema/tool'

export const textWithStats = F.object({
  icon,
  title: 'Text With Stats',
  name: 'textWithStats',
  fields: [
    F.blockContent(),
    F.array({
      name: 'stats',
      of: [
        F.object({
          icon,
          name: 'stat',
          fields: [
            F.dropdown([
              'small',
              'large'
            ], {
              name: 'statSize', 
              initialValue: 'small'
            }),
            F.string({name: 'stat'}), 
            F.string({name: 'content'})
          ],
          preview: {
            select: {
              title: 'stat',
              subtitle: 'content',
            },
            prepare({title, subtitle}) {
              return {
                title: title || '',
                subtitle: subtitle || '',
              }
            },
          }
        }),
      ],
    }),
  ],
  preview: P.titleImage({
    title: 'Text With Stats',
    content: 'content',
    prepare: ({content = []}) => {
      const [heading, ...subtitle] = content      
      
      return {
        title: heading ? P.richText([heading]) : 'Text With Stats',
        subtitle: P.richText(subtitle),
      }
    },
  })
})