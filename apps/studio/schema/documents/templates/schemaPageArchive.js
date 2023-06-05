import { BsArchive as icon } from 'react-icons/bs'
import startCase from 'lodash/startCase'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

const pageTemplates = [
  'post',
  'customer',
  'integration',
  'comparison',
  'feature',
  'faq',
]

export const schemaPageArchive = {
  icon,
  name: 'pageArchive',
  title: 'Archive Page',
  type: 'document',
  __experimental_actions: ['update', 'publish' /* , 'create', 'delete' */],
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('seo', { title: 'SEO' }),
    G.fieldGroup('options', { title: 'Page Options' }),
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults({
      slug: { readOnly: true },
      parent: {
        readOnly: true,
        hidden: ({ parent }) =>
          !['feature-index'].includes(parent?.slug?.current),
      },
    }),
    ...G.group('content', [
      F.field('hero', {
        hidden: ({ parent }) =>
          !['feature-index'].includes(parent?.slug?.current),
      }),
      F.string({
        name: 'archiveOf',
        options: {
          list: pageTemplates.map((type) => ({
            title: startCase(type),
            value: type,
          })),
          layout: 'dropdown',
        },
        readOnly: true,
      }),
      F.number({
        name: 'docsPerPage',
        initialValue: 12,
        validation: (Rule) => Rule.greaterThan(1).integer(),
        hidden: ({ parent }) => parent.archiveOf !== 'post',
      }),
      F.message(
        'This page is automatically populated with the selected document type',
        {
          hidden: ({ parent }) => !parent?.archiveOf,
        }
      ),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description:
          'Enable to redirect to a legacy Leadpages page, if it exists.',
        hidden: ({ parent }) =>
          !['integrations', 'comparisons', 'feature-index'].includes(
            parent?.slug?.current
          ),
      }),
      F.object({
        name: 'options',
        fields: [
          F.boolean({ name: 'slimFooter', initialValue: false }),
          F.boolean({ name: 'underlaidMenu', initialValue: false }),
          F.boolean({
            name: 'noLogin',
            title: 'Hide Login Button',
            initialValue: false,
          }),
          F.boolean({ name: 'hideSignUpButton', initialValue: false }),
          F.boolean({ name: 'hideBar', initialValue: false }),
        ],
      }),
    ]),
  ],
  preview: P.titleImage(),
}
