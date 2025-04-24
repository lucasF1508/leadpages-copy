import {BsNewspaper as icon} from 'react-icons/bs'
import {F, P, G} from '@/legacy/schema/tool'

export const schemaCategoryPost = {
  icon,
  name: 'categoryPost',
  title: 'Post Category',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...F.fieldDefaultsCustom(),
    ...G.group('seo', [F.seo()]),
    ...G.group('meta', [
      F.datetime({
        name: 'modified',
        readOnly: true,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
    ]),
  ],
  preview: P.titleImage({
    prepare: ({title}) => ({title, subtitle: 'Category'}),
  }),
}
