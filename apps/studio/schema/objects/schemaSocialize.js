import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaSocialize = F.boolean({
  name: 'hasSocialize',
  description: 'Includes social icons after the content.',
  initialValue: 'false',
})
