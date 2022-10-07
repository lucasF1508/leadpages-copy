import * as TI from 'react-icons/ti'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import { AiOutlineShareAlt } from 'react-icons/ai'

const platformIcons = {
  default: AiOutlineShareAlt,
}

export const schemaSocial = F.array({
  name: 'social',
  title: 'Platforms',
  of: [
    F.object({
      name: 'platform',
      fields: [
        F.string({
          name: 'url',
          description:
            'Please include the full url eg: https://facebook.com/YourProfile/',
        }),
      ],
      preview: {
        select: {
          url: 'url',
        },
        prepare: ({ url }) => {
          if (
            !url ||
            url.length < 10 ||
            (!url.includes('http://') && !url.includes('https://'))
          ) {
            return {
              title: url || '',
              media: platformIcons.default,
            }
          }

          const parseUrl = new URL(url)
          const [platform] = parseUrl.hostname.replace('www.', '').split('.')
          const icon =
            TI[
              `TiSocial${platform.charAt(0).toUpperCase() + platform.slice(1)}`
            ] || platformIcons.default

          return {
            title: url || '',
            media: icon,
          }
        },
      },
    }),
  ],
})
