import {AiOutlineTable as icon} from 'react-icons/ai'
import {F} from '@/legacy/schema/tool'

export const schemaTableBlock = F.field('table', {
  name: 'tableBlock',
  title: 'Table',
  description: 'The first row will be used as the table head. This is a requirement for mobile',
  icon,
})
