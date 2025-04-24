import {BsArrowsExpand as icon} from 'react-icons/bs'
import {F, P} from '@/legacy/schema/tool'

export const schemaAccordion = F.object({
  icon,
  name: 'accordion',
  fields: [F.accordionItems()],
  preview: P.defaultPreview({
    select: 'accordionItems',
    defaultTitle: 'Accordion (empty)',
  }),
})
