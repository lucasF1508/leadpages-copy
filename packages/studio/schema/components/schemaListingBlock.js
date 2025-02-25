import {BsPencilSquare as icon} from 'react-icons/bs'
import {F, G} from '@/schema/tool'

export const schemaListingBlock = F.object({
  icon,
  name: 'listingBlock',
  title: 'Listing Block',
  groups: [...G.fieldGroupComponentOptions(), G.define('link')],
  fields: [
    ...G.group('content', [
      F.string({name: 'heading'}),
      F.text({name: 'subheading'}),
      F.radio(['post', 'custom'], {name: 'postType', initialValue: 'post'}),
      F.radio(['all', 'category', 'select'], {
        name: 'selection',
        initialValue: 'all',
        hidden: ({parent}) => parent?.postType !== 'post',
      }),
      F.message('All posts will be displayed.', {
        hidden: ({parent}) => parent?.selection !== 'all' || parent?.postType !== 'post',
      }),
      F.reference('categoryPost', {
        name: 'category',
        hidden: ({parent}) => parent?.selection !== 'category' || parent?.postType !== 'post',
      }),
      F.multiReference('post', {
        name: 'listings',
        hidden: ({parent}) => parent?.selection !== 'select' || parent?.postType !== 'post',
      }),
      F.string({
        name: 'ctaLabel',
        title: 'CTA Label',
        description: 'This label will be applied to all post links.',
        placeholder: 'eg. Read More',
        hidden: ({parent}) => parent?.postType !== 'post',
      }),
      F.array({
        name: 'customListings',
        title: 'Listings',
        of: [
          F.object({
            name: 'listing',
            groups: [G.define('content'), G.define('image'), G.define('link')],
            fields: [
              ...G.group('content', [
                F.string({name: 'title'}),
                F.excerpt(),
                F.string({
                  name: 'meta',
                  description: 'Free training, Wednesdays at 2PM, etc.',
                }),
              ]),
              F.image({group: 'image'}),
              F.link({
                args: {
                  linkStyle: false,
                },
                required: true,
                group: 'link',
              }),
            ],
          }),
        ],
        hidden: ({parent}) => parent?.postType === 'post',
      }),
    ]),
    F.link({
      args: {linkStyle: false, condition: {name: 'condition', required: false, group: 'content'}},
      group: 'link',
    }),
    ...G.group('options', [
      F.boolean({
        name: 'hasFeaturedListing',
        description: 'Toggle to highlight the first blog or custom post provided in the list.',
        initialValue: false,
      }),
      F.string({
        name: 'overline',
        title: 'Featured Listing Overline',
        description: 'Overline above featured listing title. Defaults to: "Featured"',
        placeholder: 'Featured',
        hidden: ({parent}) => !parent?.hasFeaturedListing,
      }),
      F.radio(['regular', 'overlap'], {
        name: 'type',
        title: 'Listing Type',
        initialValue: 'regular',
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare: ({heading = 'Listing Block'}) => ({
      title: heading,
    }),
  },
})
