import { BsNewspaper as icon } from 'react-icons/bs'
import { defineField } from 'sanity'
import { F, FS, P, G } from '@/legacy/schema/tool'
import BlogSectionMainHeroInput from '../../../components/BlogSectionMainHeroInput'
import CustomSidebarLinksReference from '../../../components/CustomSideBarLinksReference'

export const post = {
  icon,
  name: 'post',
  title: 'Posts',
  type: 'document',
  orderings: [
    { title: 'Published', name: 'publishedDesc', by: [{ field: 'publishedDate', direction: 'desc' }] },
  ],
  groups: [
    ...G.fieldGroupDefaults(),
    G.define('excerpt'),
    G.define('seo', { title: 'SEO' }),
    G.define('options'),
  ],
  fields: [
    ...F.fieldDefaultsCustom({ parent: { hidden: true } }),

    // CONTENT
    ...G.group('content', [
      F.image(),
      F.blockContent(),
      F.boolean({ name: 'useCustomSidebarLinks', initialValue: false }),
      {
        name: 'customSidebarItems',
        title: 'Custom Sidebar Links',
        description: 'Listing sidebar links, added using inline marks in the content section.',
        type: 'boolean',
        // 👇 en v3 se usa `components.input`
        components: { input: CustomSidebarLinksReference as any },
        hidden: ({ parent }: any) => !parent?.useCustomSidebarLinks,
      },
    ]),

    // EXCERPT
    ...G.group('excerpt', [F.excerpt()]),

    // META (idéntico al legacy)
    ...G.group('meta', [
      F.field('structuredData'),
      F.datetime({
        name: 'modified',
        readOnly: true,
        hidden: ({ parent }: any) => !parent?.modified,
        description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
      }),
      F.publishedDate(),
      F.category('publisher', { name: 'publisher', required: true }),
      F.category('categoryPost', { name: 'primaryCategory', required: true }),
      F.multiReference('post', { name: 'relatedArticles', validation: (Rule: any) => Rule.max(4) }),
      F.multiReference('categoryPost', { name: 'secondaryCategories' }),
      F.field('tags', { name: 'tags', options: { includeFromRelated: 'tags' } }),
    ]),

    // SEO
    ...G.group('seo', [F.seo()]),

    // OPTIONS
    ...G.group('options', [
      defineField({
        name: 'blogSectionMainHero',
        title: 'Blog section main hero',
        type: 'boolean',
        group: 'options',
        description:
          'If enabled, this post is shown as the main title, image, and intro in the Blog Section component. Only one post should be on; enabling here turns it off on all other posts.',
        initialValue: false,
        components: { input: BlogSectionMainHeroInput },
      }),
      F.boolean({
        name: 'redirectToLegacy',
        title: 'Proxy to legacy post',
        description: 'Enable to proxy to the legacy Leadpages post, if it exists.',
        initialValue: false,
      }),
    ]),
  ],
  preview: P.titleImage(),
}
