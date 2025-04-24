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
      F.field('hero'),
      F.number({
        name: 'docsPerPage',
        initialValue: 12,
        validation: (Rule) => Rule.greaterThan(1).integer(),
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
