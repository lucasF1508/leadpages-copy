import { F } from 'part:gearbox-schema-tool/schema-builder'
import { BiImageAdd as icon } from 'react-icons/bi'

export const schemaMenuStackedCard = F.object({
  icon,
  name: 'menuStackedCard',
  fields: [
    F.image({ required: true }),
    F.string({ name: 'heading' }),
    F.text({ name: 'content' }),
    F.link(),
  ],
  preview: {
    select: {
      title: 'heading',
      subTitle: 'content',
      image: 'image',
    },
    prepare: ({ title, subTitle, image }) => ({
      title: title || 'Stacked Card',
      subTitle,
      media: image || icon,
    }),
  },
})
