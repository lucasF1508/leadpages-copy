import {F} from '@/legacy/schema/tool'
import {BiStats as icon, BiTrophy as statIcon} from 'react-icons/bi'

export const schemaStats = F.object({
  icon,
  name: 'stats',
  title: 'Stats',
  fields: [
    F.array({
      name: 'stats',
      of: [
        F.object({
          name: 'stat',
          fields: [F.string({name: 'headline'}), F.string({name: 'caption'})],
          preview: {
            select: {
              title: 'headline',
              subtitle: 'caption',
            },
            prepare: ({title = 'Stat', subtitle = ''}) => ({
              title,
              subtitle,
              media: statIcon,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: ({title = 'Stats'}) => ({
      title,
    }),
  },
})
