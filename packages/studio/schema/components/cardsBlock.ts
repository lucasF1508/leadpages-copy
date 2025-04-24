import {F} from '@/schema/tool'
import { TbCards as icon } from "react-icons/tb";

export const cardsBlock = F.object({
  name: 'cardsBlock',
  icon,
  fields: [
    F.array({
      name: 'cards',
      of: [
        F.object({
          name: 'card',
          fields: [
            F.image({name: 'icon'}), 
            F.field('blockContent', {name: 'content'}), 
            F.image({name: 'backgroundImage'})
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
        title: "Feature Cards"
    })
  },
})