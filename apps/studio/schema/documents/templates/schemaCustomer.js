import { BsFilePerson as icon } from 'react-icons/bs'
import { AiOutlineRetweet as redirectIcon } from 'react-icons/ai'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const schemaCustomer = {
  icon,
  name: 'customer',
  title: 'Customer',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('seo', { title: 'SEO' }),
    G.fieldGroup('options', { title: 'Page Options' }),
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    orderRankField({ type: 'customer' }),
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
        fields: [
          F.image(),
          F.field('blockContentHero', { name: 'content' }),
          F.string({ name: 'hoverTitle' }),
          F.string({ name: 'linkText', placeholder: 'Read the story' }),
        ],
      }),
    ]),
    ...G.group('meta', [
      F.multiReference('categoryCustomer', { name: 'category' }),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description:
          'Enable to redirect to a legacy Leadpages page, if it exists.',
        initialValue: true,
      }),
    ]),
  ],
  preview: P.titleImage({
    redirect: 'redirectToLegacy',
    prepare: ({ media, redirect, ...props }) => ({
      ...props,
      media: redirect ? redirectIcon : media || icon,
    }),
  }),
}
