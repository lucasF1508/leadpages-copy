import { BsNewspaper as icon } from 'react-icons/bs'
import { F, FS, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPost = {
  icon,
  name: 'post',
  title: 'Posts',
  type: 'document',
  orderings: [
    {
      title: 'Published',
      name: 'publishedDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
  ],
  groups: [
    ...G.fieldGroupDefaults(),
    G.fieldGroup('excerpt', { title: 'Excerpt' }),
    G.fieldGroup('seo', { title: 'SEO' }),
    G.fieldGroup('options', { title: 'Page Options' }),
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
      F.multiReference('post', {
        name: 'relatedArticles',
        validation: (Rule) => Rule.max(4),
      }),
      F.multiReference('categoryPost', { name: 'secondaryCategories' }),
      F.field('tags', {
        name: 'tags',
        options: {
          includeFromRelated: 'tags',
        },
      }),
    ]),
    ...G.group('seo', [F.seo()]),
    ...G.group('options', [
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Proxy to legacy post',
        description:
          'Enable to proxy to the legacy Leadpages post, if it exists.',
        initialValue: false,
      }),
    ]),
  ],
  preview: P.titleImage(),
}
