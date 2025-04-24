import {BsCollection as icon} from 'react-icons/bs'
import {F, FS, P, G} from '@/legacy/schema/tool'

import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const schemaComparison = {
  icon,
  name: 'comparison',
  title: 'Comparision',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    ...G.fieldGroupDefaults(),
    G.define('seo', {title: 'SEO'}),
    G.define('options', {title: 'Page Options'}),
    G.define('excerpt'),
    G.define('sidebar'),
  ],
  fields: [
    orderRankField({type: 'comparison'}),
    ...F.fieldDefaultsCustom({
      parent: {hidden: true},
    }),
    ...G.group('content', [
      F.field('hero'),
      F.blockContent(),
      F.field('sidebarLinks'),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
    ...G.group('excerpt', [
      F.object({
        name: 'excerpt',
        fields: [F.image({title: 'Compare Logo'}), F.text({name: 'content'})],
      }),
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
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description: 'Enable to redirect to a legacy Leadpages page, if it exists.',
        initialValue: false,
      }),
    ]),
  ],
  preview: P.titleImage(),
}
