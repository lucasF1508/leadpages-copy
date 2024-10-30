import { MdOutlineCategory as icon } from 'react-icons/md'
import { F, G, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaTemplateGroups = [
  G.fieldGroup('content', { default: true }),
  G.fieldGroup('details'),
  G.fieldGroup('included', { title: "What's Included" }),
  G.fieldGroup('reviews'),
  G.fieldGroup('meta'),
  G.fieldGroup('seo', { title: 'SEO' }),
]

export const templateContentGroup = G.group('content', [
  F.object({
    name: 'content',
    fields: [
      F.field('rating'),
      F.string({
        name: 'text',
      }),
      F.field('blockContentTemplate', {
        name: 'description',
      }),
    ],
  }),
])

export const templateDetailsGroup = G.group('details', [
  F.object({
    name: 'details',
    fields: [
      F.string({
        name: 'title',
      }),
      F.text({
        name: 'text',
      }),
      F.blockContent({
        name: 'content',
      }),
      F.array({
        name: 'pageTemplatesIncluded',
        hidden: ({ document }) => {
          const { _id, kind } = document

          return kind === 'LeadpageTemplate' || _id.includes('templateSettings')
        },
        of: [
          F.string({
            name: 'pageTitle',
          }),
        ],
      }),
    ],
  }),
])

export const templateIncludedGroup = G.group('included', [
  F.object({
    name: 'included',
    title: "What's Included Tab Fields",
    fields: [
      F.object({
        name: 'landingPage',
        hidden: ({ document }) => {
          const { _id, kind } = document
          return (
            kind === 'SiteTemplate' || _id.includes('websiteTemplateSettings')
          )
        },
        fields: [
          F.string({
            name: 'title',
            title: 'Title',
          }),
          F.text({
            name: 'text',
            title: 'Text',
          }),
          F.string({
            name: 'heading',
            title: 'Items Heading',
          }),
        ],
      }),
      F.object({
        name: 'site',
        hidden: ({ document }) => {
          const { _id, kind } = document
          return kind === 'LeadpageTemplate' || _id.includes('templateSettings')
        },
        fields: [
          F.string({
            name: 'title',
            title: 'Title',
          }),
          F.text({
            name: 'text',
            title: 'Text',
          }),
          F.string({
            name: 'heading',
            title: 'Items Heading',
          }),
        ],
      }),
    ],
  }),
  F.array({
    name: 'includedItems',
    of: [
      F.object({
        name: 'includedItem',
        fields: [
          F.field('blockContentTemplate', {
            name: 'content',
          }),
          F.image({
            name: 'image',
          }),
        ],
        preview: {
          select: {
            content: 'content',
            shownIn: 'shownIn',
            image: 'image',
          },
          prepare: ({ content, image }) => ({
            title: P.richText({ content }),
            media: image || icon,
          }),
        },
      }),
    ],
  }),
])

export const templateReviewsGroup = G.group('reviews', [
  F.object({
    name: 'reviews',
    fields: [
      F.string({
        name: 'title',
      }),
      F.text({
        name: 'text',
      }),
      F.links({
        name: 'link',
        validation: (Rule) => Rule.max(1),
        link: { args: { linkStyle: false, hasIcon: false } },
      }),
      F.reference('categoryTestimonial', {
        name: 'categoryTestimonial',
        title: 'Category',
        description:
          'Override category from which testimonials are pulled inside reviews tab.',
        hidden: ({ document }) => {
          const { _id } = document
          return (
            _id.includes('websiteTemplateSettings') ||
            _id.includes('templateSettings')
          )
        },
      }),
    ],
  }),
])
