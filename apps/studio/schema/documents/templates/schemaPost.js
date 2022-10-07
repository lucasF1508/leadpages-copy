import { BsNewspaper as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPost = {
  icon,
  name: 'post',
  title: 'Posts',
  type: 'document',
  groups: [...G.fieldGroupDefaults(), G.fieldGroup('seo', { title: 'SEO' })],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults(),
    ...G.group('meta', [F.publishedDate({ fieldset: 'meta' })]),
    ...G.group('content', [
      F.image(),
      F.excerpt(),
      F.category('categoryPost'),
      F.checkbox({
        name: 'isExternal',
        title: 'Is External Article',
        initialValue: false,
      }),
      F.field('components', { hidden: ({ parent }) => parent.isExternal }),
      F.checkbox({
        name: 'target',
        title: 'Open in a new tab',
        initialValue: true,
        hidden: ({ parent }) => !parent.isExternal,
      }),
      F.url({
        name: 'articleUrl',
        title: 'Article Url',
        hidden: ({ parent }) => !parent.isExternal,
      }),
      F.string({
        name: 'label',
        title: 'Link Label',
        hidden: ({ parent }) => !parent.isExternal,
      }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
