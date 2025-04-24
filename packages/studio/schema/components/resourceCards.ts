import {F} from '@/schema/tool'
import { IoMdBook as icon} from "react-icons/io";

export const resourceCards = F.object({
  name: 'resourceCards',
  icon,
  fields: [
    F.string({name: 'heading'}),
    F.string({name: 'title'}),
    F.links({
      signUpOption: true,
      validation: (Rule) => Rule.max(1),
    }),
    F.array({
      name: 'cards',
      title: 'Resource Cards',
      of: [
        F.object({ name: 'card', fields: [
          F.string({name: 'heading'}),
          F.string({name: 'title'}),
          F.boolean({name: 'fullWidth', initialValue: false}),
          F.link({
            args: {
              linkStyle: false,
              label: false,
              hasHash: false,
              linkSize: false,
            },
          }),
          F.image({
            hidden: ({parent}) => !parent.fullWidth,
          }),
        ]}),
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: "Resource Cards",
        subtitle: title,
      }
    },
  },
})