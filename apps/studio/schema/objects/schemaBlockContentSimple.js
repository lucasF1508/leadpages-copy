import { F } from 'part:gearbox-schema-tool/schema-builder'
import { blockContent } from './schemaBlockContent'

const [toolbar] = blockContent?.of || []

export const blockContentSimple = F.array({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  parseType: 'blockContent',
  of: [toolbar],
})
