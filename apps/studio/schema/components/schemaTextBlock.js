import { BsTextareaT as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTextBlock = F.object({
  icon,
  title: 'Text',
  name: 'textBlock',
  fields: [F.blockContent()],
  preview: P.blockContent(),
})
