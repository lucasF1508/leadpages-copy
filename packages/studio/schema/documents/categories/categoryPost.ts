import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {BsFileText as icon} from 'react-icons/bs'
import {F, FS, G} from '@/schema/tool'

export const categoryPosts = {
  icon,
  name: 'categoryPost',
  title: 'Post Category',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fieldsets: [FS.define('meta'), FS.seo()],
  fields: [
    orderRankField({type: 'categoryPost'}),
    ...G.group('content', [
      F.title(),
      F.hero({
        options: {
          collapsible: false,
          collapsed: false,
        },
      }),
    ]),
    ...G.group('meta', [F.slug(), F.field('path')]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: {
    select: {title: 'title'},
    prepare: ({title = ''}) => ({title, media: icon}),
  },
}
