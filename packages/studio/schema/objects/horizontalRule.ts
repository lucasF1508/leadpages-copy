import {GoHorizontalRule as HrIcon} from 'react-icons/go'
import {F, P} from '@/schema/tool'

export const horizontalRule = F.object({
  name: 'hr',
  title: 'HR',
  icon: HrIcon,
  fields: [
    F.message('This is a horizontal rule'),
    F.boolean({name: 'show', initialValue: true, hidden: true}),
  ],
  preview: P.text('Horizontal Rule'),
})
