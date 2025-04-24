import {BsQuestionCircle as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const schemaFAQ = {
  icon,
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: G.fieldGroupDefaults(),
  fields: [
    orderRankField({type: 'faq'}),
    F.string({name: 'title'}),
    F.field('blockContentBare', {name: 'content'}),
    F.multiReference('categoryFaq', {name: 'category'}),
  ],
  preview: P.titleImage({
    title: 'title',
    subtitle: 'category.0.title',
  }),
}
