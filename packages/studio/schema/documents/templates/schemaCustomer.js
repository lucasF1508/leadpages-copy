import {BsFilePerson as icon} from 'react-icons/bs'
import {AiOutlineRetweet as redirectIcon} from 'react-icons/ai'
import {F, FS, P, G} from '@/schema/tool'

import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export const schemaCustomer = {
  icon,
  name: 'customer',
  title: 'Customer',
  type: 'document',
  orderings: [orderRankOrdering],
  groups: [
    ...G.fieldGroupDefaults(),
    G.define('seo', {title: 'SEO'}),
    G.define('options', {title: 'Page Options'}),
    G.define('excerpt'),
  ],
  fields: [
    orderRankField({type: 'customer'}),
    ...F.fieldDefaultsCustom({
      parent: {hidden: true},
    }),
    ...G.group('content', [
      F.field('hero'),
      F.field('components'),
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
          F.field('blockContentHero', {name: 'content'}),
          F.string({name: 'hoverTitle'}),
          F.string({name: 'linkText', placeholder: 'Read the story'}),
        ],
      }),
    ]),
    ...G.group('meta', [
      F.multiReference('categoryCustomer', {name: 'category'}),
      F.datetime({
        name: 'modified',
        readOnly: true,
        hidden: ({parent}) => !parent?.modified,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Redirect to legacy page',
        description: 'Enable to redirect to a legacy Leadpages page, if it exists.',
        initialValue: true,
      }),
    ]),
  ],
  preview: P.titleImage({
    redirect: 'redirectToLegacy',
    prepare: ({media, redirect, ...props}) => ({
      ...props,
      media: redirect ? redirectIcon : media || icon,
    }),
  }),
}
