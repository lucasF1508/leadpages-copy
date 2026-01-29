import {F, P} from '@/schema/tool'
import {TbCards as icon} from 'react-icons/tb'

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
            F.image({name: 'backgroundImage'}),
          ],
          preview: {
            select: {
              content: 'content',
              image: 'image',
              icon: 'icon',
            },
            prepare: ({content, image, icon}) => {
              const [title, subtitle] = content ? P.richHeading(content, 'all') : []
              return {
                title: title || 'Card',
                subtitle,
                media: P.mediaIcon({condition: 'image', image: icon || image}),
              }
            },
          },
        }),
      ],
    }),
    F.radio(['default', 'dark', 'light'], {
      name: 'variant',
      title: 'Variant',
      initialValue: 'default',
      description: 'Choose the color theme for the cards',
    }),
    F.radio(['2', '3'], {
      name: 'columns',
      title: 'Columns',
      initialValue: '2',
      description: 'Number of columns for the cards grid',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Feature Cards',
    }),
  },
})
