import {BsQuestionCircle as icon} from 'react-icons/bs'
import {F, P, G} from '@/schema/tool'

export const faq = {
  icon,
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  groups: G.fieldGroupDefaults(),
  fields: [
    F.string({name: 'title'}),
    F.field('blockContentSimple', {name: 'content'}),
  ],
  preview: P.titleImage({
    title: 'title',
  }),
}
