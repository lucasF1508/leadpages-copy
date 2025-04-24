import {BsSignpost2 as icon, BsSignpost as arrowIcon} from 'react-icons/bs'
import {F} from '@/legacy/schema/tool'

export const schemaPromoCodes = {
  icon,
  name: 'promoCodes',
  title: 'Site Promo Codes',
  type: 'document',
  fields: [
    F.array({
      name: 'promoCodes',
      title: 'Promo Codes',
      of: [
        F.field('object', {
          fields: [
            F.string({
              name: 'source',
              title: 'Code',
              required: true,
            }),
            F.string({
              name: 'destination',
              description:
                'Redirect to this url. If internal only use the path (eg: /ideas). If external use the entire url (eg: https://google.com/new-page)',
              required: true,
            }),
          ],
          preview: {
            select: {
              source: 'source',
              destination: 'destination',
            },
            prepare: ({source = '', destination = ''}) => ({
              title: `${source}  →  ${destination}`,
              media: arrowIcon,
            }),
          },
        }),
      ],
    }),
  ],
}
