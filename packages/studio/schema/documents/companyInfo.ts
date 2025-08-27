import {MdSettings as icon} from 'react-icons/md'
import {F} from '@/schema/tool'

export const companyInfo = {
  icon,
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  fields: [
    F.string({name: 'companyTitle'}),
    F.field('email'),
    F.string({name: 'phone'}),
    F.field('social'),
  ],
}
