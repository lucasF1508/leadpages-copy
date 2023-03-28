import { BsCollection as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const schemaComparison = {
  icon,
  name: 'comparison',
  title: 'Comparision',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('sidebar'),
    G.fieldGroup('excerpt'),
    G.fieldGroup('seo', { title: 'SEO' }),
    G.fieldGroup('options', { title: 'Page Options' }),
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    orderRankField({ type: 'comparison' }),
    ...F.fieldDefaults({
      parent: { hidden: true },
    }),
    ...G.group('content', [
      F.field('hero'),
      F.blockContent(),
      F.array({
        name: 'sidebarLinks',
        of: [
          F.object({
            name: 'section',
            fields: [
              F.string({
                name: 'title',
                title: 'Section Title',
              }),
              F.array({
                name: 'links',
                of: [
                  F.object({
                    name: 'link',
                    fields: [
                      F.string({
                        name: 'heading',
                        title: 'Scroll-to Heading',
                        description:
                          'Full heading of the section to scroll to (eg. The Guide to Landing Pages).',
                      }),
                      F.string({
                        name: 'title',
                        placeholder: 'Optional',
                        description:
                          'Title to display in the sidebar. Defaults to the heading above.',
                      }),
                    ],
                    preview: P.preview({
                      title: 'title',
                      heading: 'heading',
                      prepare: ({ title, heading }) => ({
                        title: title || heading,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
      }),
    ]),
    ...G.group('excerpt', [
      F.object({
        name: 'excerpt',
        fields: [
          F.image({ title: 'Compare Logo' }),
          F.text({ name: 'content' }),
        ],
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
  preview: P.titleImage(),
}
