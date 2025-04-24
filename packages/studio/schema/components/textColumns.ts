import {F, P, PortableTextBlock} from '@/schema/tool'
import { GoColumns as icon } from "react-icons/go";


export const textColumns = F.object({
  icon,
  title: 'Text Columns',
  name: 'textColumns',
  fields: [
    F.array({
      name: 'columns',
      title: 'Columns',
      of: [
        F.object({
          icon,
          title: 'Column',
          name: 'column',
          fields: [
            F.title(),
            F.field('blockContentSimple', {name: 'content'}),
          ],
          preview: {
            select: {
              title: 'title',
              content: 'blockContentSimple',
            },
            prepare({title, content = []}) {
              return {
                title: title || 'Text Columns',
                subtitle: P.richText(content),
              }
            },
        }}),
      ]
    }),
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare({columns}) {
      const subtitle = columns?.map(({title}: {title: string}) => title)

      return {
        title: `Text Columns`,
        subtitle: subtitle?.join(', '),
        media: icon,
      }
    }
  },
})