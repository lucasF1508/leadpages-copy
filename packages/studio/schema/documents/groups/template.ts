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

const content = G.group('content', [
  F.title({
    title: 'Template Name',
    validation: (Rule) => Rule.required(),
    // Make editable if no Mandrel ID (new template)
    readOnly: ({document}) => {
      // If is templateSettings, always readOnly
      if (document?._type === 'templateSettings') return true
      // If has a Mandrel ID (doesn't contain "example", "test", "ejemplo" or "prueba"), make readOnly
      if (document?.id && 
          !document.id.includes('example') && 
          !document.id.includes('test') &&
          !document.id.includes('ejemplo') && 
          !document.id.includes('prueba')) {
        return true
      }
      // If no ID or is a new template, make editable
      return false
    },
    hidden: ({document}) => !document || document?._type === 'templateSettings',
  }),
  F.string({
    name: 'heading',
    title: 'Heading',
    components: {input: TitleField},
    hidden: ({document}) => !document || document?._type === 'templateSettings',
  }),
  F.object({
    name: 'content',
    title: 'Hero Content',
    fields: [
      F.field('rating', {hidden: true}),
      F.string({
        name: 'text',
        hidden: true,
      }),
      F.string({name: 'label'}),
      F.field('blockContentBare', {
        name: 'description',
      }),
    ],
  }),
  F.string({
    name: 'id',
    // Make editable if no valid Mandrel ID
    readOnly: ({document}) => {
      // If is templateSettings, always readOnly
      if (document?._type === 'templateSettings') return true
      
      const templateId = document?.id
      
      // If no ID, make editable
      if (!templateId || templateId.trim() === '') {
        return false
      }
      
      // If ID contains "example", "test", "ejemplo" or "prueba", make editable (is temporary)
      if (templateId.includes('example') || 
          templateId.includes('test') ||
          templateId.includes('ejemplo') || 
          templateId.includes('prueba')) {
        return false
      }
      
      // If ID is too short, make editable (probably not valid)
      if (templateId.length < 10) {
        return false
      }
      
      // If has a valid Mandrel ID, make readOnly
      return true
    },
    title: `Template ID`,
    description: 'Template ID in Leadpages API (e.g., pPRzWeL2HZem5weUF3ixdL). Leave empty for new templates without preview. You can edit it if you need to add an ID later.',
    hidden: ({document}) => !document || document?._type === 'templateSettings',
  }),
  F.image({
    name: 'customThumbnail',
    title: 'Custom Thumbnail Image',
    description: 'Upload a custom thumbnail image for templates without Mandrel ID. This will be used as the preview image in the template gallery.',
    hidden: ({document}) => {
      // Only show if template has a valid Mandrel ID (opposite logic)
      if (!document || document?._type === 'templateSettings') return true
      const templateId = document?.id
      if (!templateId || templateId.trim() === '') return false // Show if no ID
      if (templateId.includes('example') || templateId.includes('test') || 
          templateId.includes('ejemplo') || templateId.includes('prueba')) return false // Show if test ID
      if (templateId.length < 10) return false // Show if short ID
      return true // Hide if valid Mandrel ID
    },
  }),
  F.object({
    name: 'ctaButton',
    title: 'CTA Button',
    description: 'Button shown next to the template preview (e.g. "Use for Free"). Overrides the default if set.',
    hidden: ({document}) => !document || document?._type === 'templateSettings',
    fields: [
      F.string({
        name: 'label',
        title: 'Label',
        description: 'Button text (e.g. "Use for Free")',
      }),
      F.string({
        name: 'url',
        title: 'URL',
        description: 'Link destination (e.g. checkout URL)',
      }),
    ],
  }),
  F.field('blockContentBare', {
    name: 'templateCode',
    title: 'Template Code',
    description: 'Code/structure of the template to copy into the builder. Used by the "Copy Template" button. Rich text supports more content than a plain text area.',
    hidden: ({document}) => !document || document?._type === 'templateSettings',
  }),
])

const details = G.group('details', [
  F.object({
    name: 'details',
    fields: [
      F.string({
        name: 'title',
      }),
      F.text({
        name: 'text',
        hidden: true,
      }),
      F.blockContent({
        name: 'content',
        title: 'Column 1',
      }),
      F.blockContent({
        name: 'column2',
        title: 'Column 2',
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
            description: 'Upload a custom icon/image. If not provided, the selected icon below will be used.',
          }),
          F.string({
            name: 'icon',
            title: 'Icon',
            description: 'Select an icon to display if no custom image is uploaded.',
            options: {
              list: [
                {title: 'Check', value: 'check'},
                {title: 'Star', value: 'star'},
                {title: 'Gear', value: 'gear'},
                {title: 'Mobile', value: 'mobile'},
                {title: 'Form', value: 'form'},
                {title: 'SEO', value: 'seo'},
                {title: 'Custom', value: 'custom'},
                {title: 'Scroll', value: 'scroll'},
              ],
            },
            initialValue: 'check',
          }),
        ],
        preview: {
          select: {
            content: 'content',
            shownIn: 'shownIn',
            image: 'image',
            icon: 'icon',
          },
          prepare: ({content = [], image, icon: iconValue}) => ({
            title: P.richText(content),
            media: image || icon,
            subtitle: iconValue ? `Icon: ${iconValue}` : 'No icon',
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
      F.links(
        {
          name: 'link',
          validation: (Rule) => Rule.max(1),
        },
        {args: {linkStyle: false}}
      ),
      F.array({
        name: 'testimonials',
        of: [
          F.reference('testimonial', {
            name: 'review',
          }),
        ],
      }),
    ],
  }),
])

const meta = G.group('meta', [
  ...G.group('meta', [
    F.slug({
      validation: (Rule) => Rule.required(),
      // Make editable if no Mandrel ID (new template)
      readOnly: ({document}) => {
        // If has a Mandrel ID (doesn't contain "example", "test", "ejemplo" or "prueba"), make readOnly
        if (document?.id && 
            !document.id.includes('example') && 
            !document.id.includes('test') &&
            !document.id.includes('ejemplo') && 
            !document.id.includes('prueba')) {
          return true
        }
        // If no ID or is a new template, make editable
        return false
      },
    }),
    F.string({
      name: 'kind',
      // Make editable if no Mandrel ID (new template)
      readOnly: ({document}) => {
        // If has a Mandrel ID (doesn't contain "example", "test", "ejemplo" or "prueba"), make readOnly
        if (document?.id && 
            !document.id.includes('example') && 
            !document.id.includes('test') &&
            !document.id.includes('ejemplo') && 
            !document.id.includes('prueba')) {
          return true
        }
        // If no ID or is a new template, make editable
        return false
      },
      options: {
        list: [
          {title: 'Leadpage Template', value: 'LeadpageTemplate'},
          {title: 'Site Template', value: 'SiteTemplate'},
        ],
      },
      initialValue: 'LeadpageTemplate',
    }),
    F.datetime({name: 'lastMandrelUpdate', readOnly: true}),
    F.datetime({name: 'originalCreatedAt', readOnly: true}),
    F.datetime({name: 'releaseDate', readOnly: true}),
    F.boolean({name: 'enabled', readOnly: true}),
    F.number({name: 'thumbnailAspect', readOnly: true}),
    F.string({name: 'thumbnailUrlWebp', readOnly: true}),
    F.string({name: 'thumbnailUrl', readOnly: true}),
    F.string({
      name: 'previewUrl',
      title: 'Preview URL',
      description: 'Direct URL to the template preview page. Examples:\n• Full URL: https://hassanmehmood.lpagestest.co/lead-magnet-2\n• Relative URL: /templates/preview/lead-magnet-2\n\nThis URL is used to generate thumbnails automatically. If empty, it will be generated from the slug.',
      placeholder: 'https://example.com/template-preview or /templates/preview/slug',
      validation: (Rule) => Rule.custom((value, context) => {
        // Allow empty - will be auto-generated from slug
        if (!value) return true
        
        // Must be a valid URL (absolute or relative)
        const isAbsolute = value.startsWith('http://') || value.startsWith('https://')
        const isRelative = value.startsWith('/')
        
        if (!isAbsolute && !isRelative) {
          return 'Preview URL must be a full URL (https://...) or a relative path (/)'
        }
        
        return true
      }),
    }),
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

export {content, details, included, reviews, meta}
