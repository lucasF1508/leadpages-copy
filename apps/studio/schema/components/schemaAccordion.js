import { BsArrowsExpand as icon } from 'react-icons/bs'
import { F, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaAccordion = F.object({
  icon,
  name: 'accordion',
  fields: [F.accordionItems()],
  preview: P.arrayTitle({
    select: 'accordionItems',
    defaultTitle: 'Accordion (empty)',
  }),
})
