import { BsArchive as icon } from 'react-icons/bs'
import startCase from 'lodash/startCase'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

const pageTemplates = ['post', 'customer', 'integration']

export const schemaPageArchive = {
  icon,
  name: 'pageArchive',
  title: 'Archive Page',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults({
      slug: { readOnly: true },
      parent: { hidden: true },
    }),
    ...G.group('content', [
      F.string({
        name: 'archiveOf',
        options: {
          list: pageTemplates.map((type) => ({
            title: startCase(type),
            value: type,
          })),
          layout: 'dropdown',
        },
      }),
      F.number({
        name: 'docsPerPage',
        initialValue: 12,
        validation: (Rule) => Rule.greaterThan(1).integer(),
      }),
      F.message(
        'This page is automatically populated with the selected document type',
        {
          hidden: ({ parent }) => !parent?.archiveOf,
        }
      ),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
