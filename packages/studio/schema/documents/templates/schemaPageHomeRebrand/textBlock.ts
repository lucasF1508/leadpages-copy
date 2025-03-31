import {AiOutlineHome as icon} from 'react-icons/ai'
import {F} from '@/schema/tool'
import {blockContent} from './blockContent'
import { links } from './links'

const textBlock = F.object({
  icon,
  title: 'Text Standard',
  name: 'textBlock',
  fields: [blockContent, links],
})

export default textBlock