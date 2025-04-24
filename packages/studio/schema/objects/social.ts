import {getPlatformNameByUrl} from '@gearbox-built/bolts'
import {platformIcons} from 'bolts/utils'
import {AiOutlineShareAlt as icon} from 'react-icons/ai'
import {F} from '@/schema/tool'

export const social = F.array({
  name: 'social',
  title: 'Platforms',
  of: [
    F.object({
      name: 'platform',
      fields: [
        F.string({
          name: 'url',
          description: 'Please include the full url eg: https://facebook.com/YourProfile/',
        }),
      ],
      preview: {
        select: {
          url: 'url',
        },
        prepare: ({url}) => {
          if (!url || url.length < 10 || (!url.includes('http://') && !url.includes('https://'))) {
            return {
              title: url || '',
              media: icon,
            }
          }

          const platform = getPlatformNameByUrl(url)
          const socialIcon = platform && platformIcons[platform as keyof typeof platformIcons]

          return {
            title: url || '',
            media: socialIcon || icon,
          }
        },
      },
    }),
  ],
})
