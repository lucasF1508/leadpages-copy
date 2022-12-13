import { BsPlug as icon } from 'react-icons/bs'
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
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('seo', { title: 'SEO' }),
    G.fieldGroup('options', { title: 'Page Options' }),
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    orderRankField({ type: 'integration' }),
    ...F.fieldDefaults({
      parent: { hidden: true },
    }),
    ...G.group('content', [
      F.boolean({
        name: 'hasSubpage',
        title: 'Link to Subpage?',
        description:
          'Enable to link integration listing to the integration subpage.',
        initialValue: false,
      }),
      F.field('hero', { hidden: ({ parent }) => !parent?.hasSubpage }),
      F.field('components', { hidden: ({ parent }) => !parent?.hasSubpage }),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
        hidden: ({ parent }) => !parent?.hasSubpage,
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
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description:
          'Enable to redirect to a legacy Leadpages page, if it exists.',
        initialValue: false,
      }),
    ]),
  ],
  preview: P.titleImage({
    media: 'excerpt.icon',
    subtitle: 'category.title',
  }),
}
