import { GrGallery as icon } from 'react-icons/gr'
import { F, P, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCustomerRotator = F.object({
  icon,
  name: 'customerRotator',
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.radio(['all', 'category', 'select'], {
        name: 'selection',
        initialValue: 'all',
      }),
      F.message('All customers will be displayed.', {
        hidden: ({ parent }) => parent?.selection !== 'all',
      }),
      F.reference('categoryCustomer', {
        name: 'category',
        hidden: ({ parent }) => parent?.selection !== 'category',
      }),
      F.multiReference('customer', {
        name: 'customers',
        hidden: ({ parent }) => parent?.selection !== 'select',
      }),
    ]),
    ...G.group('options', [
      F.dropdown(
        ['customerStoriesRotator', 'customerStoriesThumbnailRotator'],
        {
          name: 'legacyComponent',
          initialValue: 'customerStoriesRotator',
        }
      ),
    ]),
  ],
  preview: P.titleImage({
    selection: 'selection',
    prepare: ({ selection }) => ({
      title: `Customer Rotator${selection && `: ${selection}`}`,
    }),
  }),
})
