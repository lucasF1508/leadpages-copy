import {FaPeopleCarry as icon} from 'react-icons/fa'
import {F, P} from '@/schema/tool'

export const cards = F.object({
  name: 'jobPostings',
  icon,
  fields: [
    F.string({name: 'heading'}),
    F.array({
      name: 'items',
      title: 'Job Postings',

      of: [
        F.object({
          name: 'item',
          fields: [
            F.string({name: 'heading'}),
            F.string({name: 'subheading'}),
            F.rawLink({
              initialValue: {
                label: 'Apply',
              },
            }),
          ],
          preview: {
            select: {
              heading: 'heading',
              subheading: 'subheading',
              link: 'link',
            },
            prepare: ({heading, subheading, link}) => {
              return {
                title: heading || 'Job Posting',
                subtitle: subheading,
                media: icon,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      items: 'items',
    },
    prepare: ({heading, items}: any) => {
      const subtitle = items?.map(({heading}: any) => heading).join(', ')
      return {title: heading || 'Job Postings', subtitle, media: icon}
    },
  },
})
