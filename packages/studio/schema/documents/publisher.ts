// packages/studio/schema/documents/publisher.ts
import {BsPencil as icon} from 'react-icons/bs'
import {F, FS, G, P} from '@/schema/tool'

export const publisher = {
  icon,
  name: 'publisher',
  title: 'Publisher',
  type: 'document',

  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],


  fieldsets: [FS.seo(), FS.define('meta', {collapsed: false})],

  fields: [
    ...G.group('content', [
      F.title({title: 'Name'}),                 
      F.image({name: 'headshot', title: 'Headshot'}),
      F.string({name: 'jobTitle', title: 'Job Title'}),
      F.field('blockContentBare', { name: 'bioShort', title: 'Short Bio',
        description: 'If present, this will appear on the blog posts.' }),
      F.field('blockContentBare', { name: 'bioLong', title: 'Long Bio',
        description: 'This will appear on the author page.' }),
      F.string({name: 'email', title: 'Email'}),
      F.url?.({name: 'linkedInUrl', title: 'LinkedIn URL'}) ?? F.string({name: 'linkedInUrl', title: 'LinkedIn URL'}),
    ]),

    ...G.group('seo', [F.seo()]),

    ...G.group('meta', [
      F.datetime({
        name: 'modified',
        readOnly: true,
        hidden: ({parent}) => !parent?.modified,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
    ]),
  ],

  preview: P.titleImage({media: 'headshot'}),
}