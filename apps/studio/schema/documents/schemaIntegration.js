// import { BsDiagram3 as icon } from 'react-icons/bs'
import { BsPlug as icon } from 'react-icons/bs'
// import { BsPuzzle as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const schemaIntegration = {
  icon,
  name: 'integration',
  title: 'Integration',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    orderRankField({ type: 'integration' }),
    ...F.fieldDefaults({
      parent: { hidden: true },
    }),
    ...G.group('content', [
      F.field('hero'),
      F.field('components', {}),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
    ...G.group('excerpt', [
      F.object({
        name: 'excerpt',
        fields: [F.image({ title: 'Icon' }), F.text({ name: 'content' })],
      }),
    ]),
    ...G.group('meta', [
      F.reference('categoryIntegration', {
        name: 'category',
        description: 'The category to organize this integration under.',
      }),
      F.reference('categoryIntegrationStatus', {
        name: 'status',
        description:
          'The status of the integration (ie. Integrated, Compatible, etc.)',
      }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage({
    subtitle: 'category.title',
  }),
}
