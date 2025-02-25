import {F} from '@/schema/tool'
import {BsFilterLeft as icon} from 'react-icons/bs'

export const schemaMenuHorizontalCard = F.object({
  icon,
  name: 'menuHorizontalCard',
  fields: [
    F.image({required: true}),
    F.string({name: 'heading'}),
    F.text({name: 'content'}),
    F.link({
      args: {
        label: false,
      },
    }),
    F.string({name: 'linkLabel'}),
  ],
  preview: {
    select: {
      title: 'heading',
      subTitle: 'content',
      image: 'image',
    },
    prepare: ({title, subTitle, image}) => ({
      title: title || 'Horizontal Card',
      subTitle,
      media: image || icon,
    }),
  },
})
