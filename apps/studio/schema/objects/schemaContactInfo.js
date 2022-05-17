import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaContactInfo = F.object({
  name: 'contactInfo',
  options: {
    columns: 2,
  },
  fields: [F.email(), F.string({ name: 'phone' })],
})
