import {BsArrowLeftRight as icon, BsArrowRight as arrowIcon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const schemaSiteRedirects = {
  icon,
  name: 'siteRedirects',
  title: 'Site Redirects',
  type: 'document',
  fields: [
    F.message(
      'These redirects are used within the Next.js redirect config. They can accept Regex, Path matching and wild cards. For more in depth information please see the <a href="https://nextjs.org/docs/api-reference/next.config.js/redirects" target="_blank">Next.js Redirect Docs<a>. <b>Static redirects have a hard limit of 1024 entries.</b>'
    ),
    F.array({
      name: 'siteRedirects',
      title: 'Redirects',
      of: [
        F.field('object', {
          fields: [
            F.string({
              name: 'source',
              description:
                'Redirect from this url. Only include the path. (eg: /ideas/name-of-post)',
              required: true,
              validation: (Rule) => Rule.regex(/^\//).error("Source path must begin with '/'"),
            }),
            F.string({
              name: 'destination',
              description:
                'Redirect to this url. If internal only use the path (eg: /ideas). If external use the entire url (eg: https://google.com/new-page)',
              required: true,
            }),
            F.boolean({
              name: 'permanent',
              title: 'Is this redirect permanent',
              description:
                'In almost all cases this is true. Only change this if you know what you are doing.',
              initialValue: true,
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
