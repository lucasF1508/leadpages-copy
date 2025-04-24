import {MdOutlineDraw as icon} from 'react-icons/md'
import {F} from '@/schema/tool'

export const siteRewrites = {
  icon,
  name: 'siteRewrites',
  title: 'Site Rewrites',
  type: 'document',
  fields: [
    F.message(
      'These rewrites are used within the Next.js rewrite config. They can accept Regex, Path matching and wild cards. For more in depth information please see the <a href="https://nextjs.org/docs/api-reference/next.config.js/rewrites" target="_blank">Next.js Rewrite Docs<a>'
    ),
    F.array({
      name: 'siteRewrites',
      title: 'Rewrites',
      of: [
        F.field('object', {
          name: 'rewrite',
          fields: [
            F.string({
              name: 'source',
              description:
                'Rewrite from this url. Only include the path. (eg: /ideas/name-of-post)',
              validation: (Rule) =>
                Rule.custom((source) => {
                  if (!source) {
                    return 'Source is Required'
                  }

                  return !source.startsWith('/')
                    ? "A source must be a relative path. eg:'/services'"
                    : true
                }),
            }),
            F.string({
              name: 'destination',
              description:
                'Rewrite to this url. If internal only use the path (eg: /ideas). If external use the entire url (eg: https://google.com/new-page)',
              required: true,
            }),
          ],
          preview: {
            select: {
              source: 'source',
              destination: 'destination',
            },
            prepare: ({source = '', destination = ''}) => ({
              title: `${source}  =>  ${destination}`,
              media: icon,
            }),
          },
        }),
      ],
    }),
  ],
}
