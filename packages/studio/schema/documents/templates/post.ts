import {BsNewspaper as icon} from 'react-icons/bs'
import {F, FS, G, P} from '@/schema/tool'

export const post = {
  icon,
  name: 'post',
  title: 'Posts',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  orderings: [
    {
      title: 'Published Date ↓',
      name: 'publishedDateDesc',
      by: [{field: 'publishedDate', direction: 'desc'}],
    },
    {
      title: 'Published Date ↑',
      name: 'publishedDateAsc',
      by: [{field: 'publishedDate', direction: 'asc'}],
    },
  ],
  fieldsets: [FS.seo(), FS.define('meta', {collapsed: false})],
  fields: [
    ...G.group('content', [
      F.title(),
      F.image(),
      F.blockContent(),
      F.excerpt(),
      F.category('categoryPost'),
      F.checkbox({
        name: 'isExternal',
        title: 'Is External Article',
        initialValue: false,
      }),
      F.field('components', {hidden: ({parent}) => parent.isExternal}),
      F.checkbox({
        name: 'target',
        title: 'Open in a new tab',
        initialValue: true,
        hidden: ({parent}) => !parent.isExternal,
      }),
      F.url({
        name: 'articleUrl',
        title: 'Article Url',
        hidden: ({parent}) => !parent.isExternal,
      }),
      F.string({
        name: 'label',
        title: 'Link Label',
        hidden: ({parent}) => !parent.isExternal,
      }),
    ]),
    ...G.group('meta', [F.slug(), F.field('path'), F.publishedDate({fieldset: 'meta'})]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
