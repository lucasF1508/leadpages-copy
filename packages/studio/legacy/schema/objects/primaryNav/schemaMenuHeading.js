import {F} from '@/legacy/schema/tool'
import {FaHeading as icon} from 'react-icons/fa'

export const schemaMenuHeading = F.object({
  icon,
  name: 'menuHeading',
  fields: [
    F.string({name: 'heading'}),
    F.array({
      name: 'links',
      title: 'Heading link',
      description: 'Add a link to the right hand side of the heading',
      of: [
        F.link({
          args: {
            linkStyle: false,
            file: false,
            hasIcon: false,
            target: false,
          },
        }),
      ],
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subTitle: 'link.label',
    },
    prepare: ({title, subTitle}) => ({
      title,
      subTitle,
    }),
  },
})
