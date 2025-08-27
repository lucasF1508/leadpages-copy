import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {BsArrowLeftRight as icon} from 'react-icons/bs'
import {F} from '@/schema/tool'

export const siteRedirects = {
  icon,
  name: 'siteRedirect',
  title: 'Site Redirects',
  type: 'document',
  orderings: [orderRankOrdering],
  __experimental_omnisearch_visibility: false,
  fields: [
    orderRankField({
      type: 'redirectOrderRank',
      newItemPosition: 'before',
    }),
    F.message(
      'These are 308 permanent redirects. They are used to redirect old urls to new urls. For more in depth information please see the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308" target="_blank">MDN Docs<a>'
    ),
    F.string({
      name: 'source',
      description: 'Redirect from this url. Only include the path. (eg: /ideas/name-of-post/)',
      required: true,
      validation: (Rule) =>
        Rule.custom(async (source) => {
          if (!source) {
            return 'Source is Required'
          }

          if (!source.startsWith('/')) {
            return "A source must start with a slash '/' eg:'/services/'"
          }

          if (source.endsWith('/')) {
            return "A source must not end with a slash '/' eg:'/services' or a wildcard eg:'/:path*'"
          }

          return true
        }),
    }),
    F.string({
      name: 'destination',
      description:
        'Redirect to this url. If internal only use the path with a trailing slash (eg: /ideas/). If external use the entire url (eg: https://google.com/new-page)',
      required: true,
    }),
    F.boolean({
      name: 'permanent',
      title: 'Is this redirect permanent?',
      initialValue: true,
      required: true,
    }),
  ],
  preview: {
    select: {
      source: 'source',
      destination: 'destination',
    },
    prepare({source, destination}: any) {
      return {
        title: source ? `Source: ${source}` : 'No source',
        subtitle: destination ? `Destination: ${destination}` : 'No destination',
        media: icon,
      }
    },
  },
}
