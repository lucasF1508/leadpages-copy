import {BsNewspaper as icon} from 'react-icons/bs'
import {F, FS, G, P} from '@/schema/tool'

const pageTemplates = ['post']

export const pageArchive = {
  icon,
  name: 'pageArchive',
  title: 'Archive Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fieldsets: [FS.seo(), FS.define('meta', {collapsed: false})],
  fields: [
    ...G.group('content', [
      F.title(),
      F.array({
        name: 'tags',
        title: 'Tags',
        description:
          'Articles using these tags will be excluded from the main roll. They will still appear in search results and categories.',
        of: [{type: 'string'}],
        options: {layout: 'tags'},
        initialValue: [],
      }),
      F.message('This page is automatically populated with the selected document type', {
        hidden: ({parent}) => !parent?.archiveOf,
      }),
    ]),
    ...G.group('meta', [
      F.slug(),
      F.field('path'),
      F.dropdown(pageTemplates, {
        name: 'archiveOf',
        readOnly: true,
      }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
