import {F} from '@/schema/tool'
import {blockContent} from './blockContent'

const cardsBlock = F.object({
  name: 'cardsBlock',
  fields: [
    F.array({
      name: 'cards',
      of: [
        F.object({
          name: 'card',
          fields: [F.image({name: 'icon'}), blockContent, F.image({name: 'backgroundImage'})],
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

export default cardsBlock