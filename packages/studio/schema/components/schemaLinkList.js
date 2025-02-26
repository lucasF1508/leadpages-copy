import {F} from '@/schema/tool'
import {BsCardList as icon, BsLink as linkIcon} from 'react-icons/bs'

export const schemaLinkList = F.object({
  icon,
  name: 'linkList',
  title: 'Link List',
  fields: [
    F.string({name: 'heading'}),
    F.array({
      name: 'links',
      title: 'Links',
      of: [
        F.object({
          icon: linkIcon,
          name: 'link',
          fields: [
            F.string({name: 'title'}),
            F.string({
              name: 'subtitle',
            }),
            F.url({title: 'URL'}),
          ],
        }),
      ],
    }),
  ],
})
