import { GrGallery as icon } from 'react-icons/gr'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCustomerRotator = F.object({
  icon,
  name: 'customerRotator',
  fields: [
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
  ],
  preview: P.titleImage({
    selection: 'selection',
    prepare: ({ selection }) => ({
      title: `Customer Rotator${selection && `: ${selection}`}`,
    }),
  }),
})
