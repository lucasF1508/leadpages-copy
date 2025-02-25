import {BsPencil as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/schema/tool'

export const schemaPublisher = {
  icon,
  name: 'publisher',
  title: 'Publisher',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...F.fieldDefaultsCustom({title: {title: 'Name'}, parent: {hidden: true}}),
    ...G.group('content', [
      F.image({name: 'headshot'}),
      F.string({name: 'jobTitle'}),
      F.field('blockContentBare', {
        name: 'bioShort',
        title: 'Short Bio',
        description: 'If present, this will appear on the blog posts.',
      }),
      F.field('blockContentBare', {
        name: 'bioLong',
        title: 'Long Bio',
        description: 'This will appear on the author page.',
      }),
      F.string({name: 'email'}),
      F.string({name: 'linkedInUrl', title: 'LinkedIn URL'}),
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
