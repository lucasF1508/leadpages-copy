import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {AiOutlineFileText as icon} from 'react-icons/ai'
import {F, FS, G} from '@/schema/tool'

export const page = F.document({
  icon,
  name: 'page',
  title: 'Page',
  orderings: [orderRankOrdering],
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fieldsets: [FS.seo(), FS.define('meta', {collapsed: false})],
  fields: [
    orderRankField({type: 'page'}),
    ...G.group('content', [
      F.title(),
      F.field('hero'),
      F.field('components', {}),
      F.datetime({name: 'modified', hidden: true}),
    ]),
    ...G.group('meta', [F.slug(), F.field('path'), F.reference('page', {name: 'parent'})]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
    },
    prepare: ({title, subtitle}) => ({title, subtitle, media: icon}),
  },
})
