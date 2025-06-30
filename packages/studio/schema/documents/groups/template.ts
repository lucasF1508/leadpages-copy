import {MdOutlineCategory as icon} from 'react-icons/md'
import {F, G, P} from '@/schema/tool'
import TitleField from '@/components/Input/TitleField'
import IdField from '@/components/Input/IdField'

export const templateGroups = [
  G.define('content', {default: true}),
  G.define('details'),
  G.define('included', {title: "What's Included"}),
  G.define('reviews'),
  G.define('meta'),
  G.define('seo', {title: 'SEO'}),
]

const content = G.group('content', 
  [
    F.title({
      title: 'Template Name',
      validation: (Rule) => Rule.required(),
      readOnly: true,
      hidden: ({document}) => !document || document?._type === 'templateSettings' 
    }),
    F.string({
      name: 'heading',
      title: 'Heading',
      components: {input: TitleField},
      hidden: ({document}) => !document || document?._type === 'templateSettings' 
    }),
    F.object({
      name: 'content',
      title: 'Hero Content',
      fields: [
        F.field('rating'),
        F.string({
          name: 'text',
        }),
        F.field('blockContentBare', {
          name: 'description',
        }),
      ],
    }),
    F.reference('cta', {
        name: 'cta',
        title: 'Call to Action',
        description: 'Leave blank to omit page call to action.',
    }),
    F.field('string', {
      name: 'id',
      readOnly: true,
      title: ` `,
      description: 'This ID is used to match the template with its Mandrel counterpart.',
      components: {input: IdField},
      hidden: ({document}) => !document || document?._type === 'templateSettings' 
    }),
  ]
)

const details = G.group('details', [
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
        hidden: ({document}) => {
          if (!document) return true

          const {_id, kind} = document || {}
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

const included = G.group('included', [
  F.object({
    name: 'included',
    title: "What's Included Tab Fields",
    fields: [
      F.object({
        name: 'landingPage',
        title: 'Landing Page Template',
        hidden: ({document}) => {
          if (!document) return true
          const {_id, kind} = document
          return kind === 'SiteTemplate' || _id.includes('websiteTemplateSettings')
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
        title: 'Site Template',
        hidden: ({document}) => {
          if (!document) return true
          const {_id, kind} = document
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
          F.field('blockContentBare', {
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
          prepare: ({content = [], image}) => ({
            title: P.richText(content),
            media: image || icon,
          }),
        },
      }),
    ],
  }),
])

const reviews = G.group('reviews', [
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
      }, {args: {linkStyle: false}}),
      // F.reference('categoryTestimonial', {
      //   name: 'categoryTestimonial',
      //   title: 'Category',
      //   description: 'Override category from which testimonials are pulled inside reviews tab.',
      //   hidden: ({document}) => {
      //     const {_id} = document
      //     return _id.includes('websiteTemplateSettings') || _id.includes('templateSettings')
      //   },
      // }),
    ],
  }),
])

const meta = G.group('meta', [
  ...G.group('meta', [
    F.slug({
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    F.string({name: 'kind', readOnly: true}),
    F.datetime({name: 'lastMandrelUpdate', readOnly: true}),
    F.datetime({name: 'originalCreatedAt', readOnly: true}),
    F.datetime({name: 'releaseDate', readOnly: true}),
    F.boolean({name: 'enabled', readOnly: true}),
    F.number({name: 'thumbnailAspect', readOnly: true}),
    F.string({name: 'thumbnailUrlWebp', readOnly: true}),
    F.string({name: 'thumbnailUrl', readOnly: true}),
    F.string({name: 'previewUrl', readOnly: true}),
    F.string({
      name: 'fullPageScreenshotUrlWebp',
      readOnly: true,
    }),
    F.number({
      name: 'fullPageScreenshotUrlWebpAspectRatio',
      readOnly: true,
    }),
    F.field('tags', {
      name: 'tags',
      description: 'This is imported from the Leadpages API and is not editable in the Studio',
      readOnly: true,
      options: {
        includeFromRelated: 'tags',
      },
    }),
    F.field('tags', {
      name: 'categories',
      description: 'This is imported from the Leadpages API and is not editable in the Studio',
      readOnly: true,
      options: {
        includeFromRelated: 'categories',
      },
    }),
    F.datetime({
      name: 'modified',
      readOnly: true,
      hidden: ({parent}) => !parent?.modified,
      description: 'Temporary field for Studio V3 Migration, value removed in publish hook.',
    }),
  ]),
])

export {
  content,
  details,
  included,
  reviews,
  meta,
}