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
    ...F.fieldDefaults({
      parent: { hidden: true },
    }),
    ...G.group('meta', [
      F.publishedDate({ fieldset: 'meta' }),
      F.multiReference('post', { name: 'relatedArticles' }),
      F.multiReference('categoryPost', { name: 'secondaryCategories' }),
    ]),
    ...G.group('content', [
      F.image(),
      F.excerpt(),
      F.category('publisher', { name: 'publisher', required: true }),
      F.category('categoryPost', { name: 'primaryCategory', required: true }),
      F.blockContent(),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
