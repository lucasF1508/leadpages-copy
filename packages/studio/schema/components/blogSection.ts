import { F, G } from '@/schema/tool'
import { SparklesIcon as icon } from '@sanity/icons'

export const blogSection = F.object({
  name: 'blogSection',
  title: 'Blog Section',
  icon,
  groups: [
    G.define('content', { title: 'Content', default: true }),
    G.define('posts', { title: 'Posts Selection' }),
    G.define('sidebar', { title: 'Sidebar (optional)' }),
  ],
  fields: [
    ...G.group('content', [
      F.string({ name: 'mainTitle', title: 'Main Title (H2 - optional)' }),
      F.image({
        name: 'image',
        title: 'Image (optional)',
        options: { hotspot: true },
        fields: [F.string({ name: 'alt', title: 'Alt text' })],
      }),
      F.string({ name: 'pill', title: 'Pill (optional)' }),
      F.string({ name: 'heading', title: 'Heading' }),
      F.string({ name: 'subheading', title: 'Subheading' }),
    ]),
    ...G.group('posts', [
      F.string({
        name: 'postSelection',
        title: 'Post Selection Method',
        options: {
          list: [
            { title: 'Manual Selection', value: 'manual' },
            { title: 'By Category', value: 'category' },
            { title: 'Latest Posts', value: 'latest' },
            { title: 'Trending Posts', value: 'trending' },
          ],
          layout: 'radio',
        },
        initialValue: 'manual',
      }),
      F.number({
        name: 'postsLimit',
        title: 'Number of Posts to Display',
        description: 'Maximum number of posts to show (for automatic selections)',
        initialValue: 3,
        validation: (Rule: any) => Rule.min(1).max(12),
        hidden: ({ parent }: any) => parent?.postSelection === 'manual',
      }),
      F.field('reference', {
        name: 'category',
        title: 'Select Category',
        to: [{ type: 'categoryPost' }],
        hidden: ({ parent }: any) => parent?.postSelection !== 'category',
      }),
      F.field('array', {
        name: 'manualPosts',
        title: 'Select Posts Manually',
        of: [{ type: 'reference', to: [{ type: 'post' }] }],
        hidden: ({ parent }: any) => parent?.postSelection !== 'manual',
        validation: (Rule: any) => Rule.custom((posts: any, context: any) => {
          const parent = context.parent as any
          if (parent?.postSelection === 'manual' && (!posts || posts.length === 0)) {
            return 'Please select at least one post'
          }
          return true
        }),
      }),
    ]),
    ...G.group('sidebar', [
      F.boolean({ name: 'enableSidebar', title: 'Enable Sidebar', initialValue: false }),
      F.string({ name: 'searchPlaceholder', title: 'Search Placeholder', initialValue: 'Search our blog...' }),
      F.image({
        name: 'sidebarImage',
        title: 'Sidebar Image (optional)',
        options: { hotspot: true },
        fields: [F.string({ name: 'alt', title: 'Alt text' })],
      }),
      F.string({ name: 'categoriesHeading', title: 'Categories Heading', initialValue: 'CATEGORIES' }),
      F.field('string', {
        name: 'categorySelection',
        title: 'Category Selection Method',
        description: 'Choose how to populate sidebar categories',
        options: {
          list: [
            { title: 'Automatic (All Categories)', value: 'automatic' },
            { title: 'Manual Selection', value: 'manual' },
          ],
          layout: 'radio',
        },
        initialValue: 'automatic',
      }),
      F.field('array', {
        name: 'categories',
        title: 'Categories (Manual)',
        description: 'Only used when Category Selection is set to Manual',
        hidden: ({ parent }: any) => parent?.categorySelection !== 'manual',
        of: [
          {
            type: 'object',
            name: 'category',
            fields: [
              F.string({ name: 'name', title: 'Category Name' }),
              F.string({ name: 'url', title: 'Category URL' }),
            ],
            preview: {
              select: { name: 'name', url: 'url' },
              prepare({ name, url }: any) {
                return { title: name, subtitle: url }
              },
            },
          },
        ],
      }),
      F.string({ name: 'popularPostsHeading', title: 'Popular Posts Heading', initialValue: 'Popular Posts' }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      mainTitle: 'mainTitle',
      enableSidebar: 'enableSidebar',
      postSelection: 'postSelection',
      postsLimit: 'postsLimit',
    },
    prepare({ heading, mainTitle, enableSidebar, postSelection, postsLimit }: any) {
      const count = postsLimit || 3
      const selectionMethod = postSelection || 'manual'
      const selectionText = selectionMethod === 'manual'
        ? 'Manual'
        : selectionMethod === 'category'
          ? 'By Category'
          : selectionMethod === 'trending'
            ? 'Trending'
            : 'Latest'
      const sidebarText = enableSidebar ? ' • sidebar' : ''
      return {
        title: mainTitle || heading || 'Blog Section',
        subtitle: `${selectionText} (${count} posts)${sidebarText}`
      }
    },
  },
})
