import { F } from 'part:gearbox-schema-tool/schema-builder'
import { blockContentHeadline } from './schemaBlockContentHeadline'

const [toolbar] = blockContentHeadline?.of || []

export const blockContentSimple = F.array({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  parseType: 'blockContent',
  of: [toolbar],
})
