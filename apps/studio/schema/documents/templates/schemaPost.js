import { BsNewspaper as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPost = {
  icon,
  name: 'post',
  title: 'Posts',
  type: 'document',
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('excerpt', { title: 'Excerpt' }),
    G.fieldGroup('seo', { title: 'SEO' }),
  ],
  fieldsets: [FS.seo(), FS.fieldset('meta', { collapsed: false })],
  fields: [
    ...F.fieldDefaults({
      parent: { hidden: true },
    }),
    ...G.group('content', [F.image(), F.blockContent()]),
    ...G.group('excerpt', [F.excerpt()]),
    ...G.group('meta', [
      F.publishedDate(),
      F.category('publisher', { name: 'publisher', required: true }),
      F.category('categoryPost', { name: 'primaryCategory', required: true }),
      F.multiReference('post', { name: 'relatedArticles' }),
      F.multiReference('categoryPost', { name: 'secondaryCategories' }),
    ]),
    ...G.group('seo', [F.seo()]),
  ],
  preview: P.titleImage(),
}
