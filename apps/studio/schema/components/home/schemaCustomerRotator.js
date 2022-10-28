import { GrGallery as icon } from 'react-icons/gr'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaCustomerRotator = F.object({
  icon,
  name: 'customerRotator',
  fields: [
    F.array({
      name: 'items',
      of: F.object({
        name: 'item',
        fields: [
          F.string({ name: 'title' }),
          F.string({ name: 'content' }),
          F.image({ name: 'image' }),
        ],
      }),
    }),
  ],
  preview: P.text('Customer Rotator'),
})
