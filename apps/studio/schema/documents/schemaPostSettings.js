import { RiNewspaperFill as icon } from 'react-icons/ri'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaPostSettings = {
  icon,
  name: 'postSettings',
  title: 'Post Settings',
  type: 'document',
  groups: [
    G.fieldGroup('articles', { title: 'Articles', default: true }),
    G.fieldGroup('cta', { title: 'CTA' }),
  ],
  fields: [
    ...G.group('articles', [
      F.multiReference('post', { name: 'trendingArticles' }),
      F.image({
        name: 'relatedArticlesImage',
        description:
          'Adding an image to this field will update the default related articles image for all posts.',
      }),
    ]),
    ...G.group('cta', [F.field('sidebarCta')]),
  ],
}
