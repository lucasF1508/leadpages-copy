import type { Taxon } from '@/types'
import type { RackInnerComponent } from '@/types/rack'
import { draftMode } from 'next/headers'
import { query } from '@/lib/queries'
// @ts-ignore legacy JS file
import { blocksToText } from '@lib/utils/blockContent'
import mergeTemplateWithDefaults from '@/lib/utils/mergeObjectWithDefaults'
import templateGalleryStore from '@/stores/templateGalleryStore'
import { TemplateKind } from '@/types/template-constants'
import { getFreeTrialCheckoutUrl } from '@/lib/utils/getFreeTrialCheckoutUrl'
import { getKindQueryParam } from '@/lib/utils/getKindSlug'
// @ts-ignore can not find types module from package
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'

export const getTemplatePreviewUrl =
  templateGalleryStore.getState().getTemplatePreviewUrl

// Mandrel API instance for fallback
const mandrelApi = new MandrelApi({
  baseUrl: process.env.STARGATE_API_TEMPLATES_URL || `${process.env.STARGATE_API_HOST}/template/v2/`,
})

// Get template categories from Sanity instead of Mandrel
const getTemplateCategoriesFromSanity = async (
  kind: TemplateKind
): Promise<Taxon[]> => {
  const templateType = kind === TemplateKind.Leadpage ? 'landingPage' : 'website'
  
  const categories = await query(
    `*[_type == 'templateCategory' && templateType == $templateType] {
      _id,
      title,
      "slug": slug.current
    }`,
    {
      params: {
        templateType,
      },
      preview: draftMode().isEnabled,
    }
  ).data

  // Map Sanity categories to Taxon format
  return (categories || []).map((cat: any) => ({
    label: cat.title || '',
    value: cat.slug || '',
    type: 'category' as const,
    section: 'Templates' as const,
  })) as Taxon[]
}

export const getTemplateCategory = (
  data: any,
  categories: Taxon[]
): Taxon | null => {
  if (!data?.categories?.length || !categories?.length) return null

  // Try to match by value (slug) first, then by label
  const categoryValue = data.categories[0]?.value
  const categoryLabel = data.categories[0]?.label

  return (
    categories.find(
      (cat) => cat.value === categoryValue || cat.label === categoryLabel
    ) || null
  )
}

/**
 * Extrae el ID o slug de una URL de template
 * Soporta varios formatos:
 * - https://api.leadpages.io/template/v2/templates/{id}/preview.html
 * - /templates/preview/{slug}
 * - /templates/{slug}
 * - URLs con query params
 */
const extractIdOrSlugFromUrl = (urlOrSlug: string): string => {
  if (!urlOrSlug) return urlOrSlug

  // Si no es una URL (no contiene http://, https://, o empieza con /), devolver tal cual
  if (!urlOrSlug.includes('://') && !urlOrSlug.startsWith('/')) {
    return urlOrSlug
  }

  try {
    // Intentar parsear como URL completa
    if (urlOrSlug.includes('://')) {
      const url = new URL(urlOrSlug)
      const pathname = url.pathname

      // Patrón: /template/v2/templates/{id}/preview.html
      const mandrelMatch = pathname.match(/\/template\/v2\/templates\/([^/]+)/)
      if (mandrelMatch && mandrelMatch[1]) {
        return mandrelMatch[1]
      }

      // Patrón: /templates/preview/{slug} o /templates/{slug}
      const templateMatch = pathname.match(/\/templates\/(?:preview\/)?([^/?]+)/)
      if (templateMatch && templateMatch[1]) {
        return templateMatch[1]
      }

      // Si tiene query params con id o slug
      const idParam = url.searchParams.get('id') || url.searchParams.get('templateId') || url.searchParams.get('slug')
      if (idParam) {
        return idParam
      }
    } else {
      // URL relativa que empieza con /
      // Patrón: /templates/preview/{slug} o /templates/{slug}
      const templateMatch = urlOrSlug.match(/\/templates\/(?:preview\/)?([^/?]+)/)
      if (templateMatch && templateMatch[1]) {
        return templateMatch[1]
      }

      // Patrón: /preview/{slug}
      const previewMatch = urlOrSlug.match(/\/preview\/([^/?]+)/)
      if (previewMatch && previewMatch[1]) {
        return previewMatch[1]
      }
    }
  } catch (error) {
    // Si falla el parsing, devolver el valor original
    console.warn('Error parsing URL:', error)
  }

  // Si no se puede extraer, devolver el valor original (puede ser un slug válido)
  return urlOrSlug
}

export const fetchInspirationData = async ({
  kind = TemplateKind?.Leadpage,
  slug,
}: {
  kind: TemplateKind
  slug: string
}) => {
  // Extraer ID o slug de la URL si es necesario
  const extractedSlug = extractIdOrSlugFromUrl(slug)
  
  // Query main template - buscar por slug o _id
  const [pageResult, categoriesResult] = await Promise.allSettled([
    query(
      `*[_type == 'template' && kind == $kind && (slug.current == $slug || _id == $slug)] | order(_updatedAt desc) [0] {
        ...,
        previewUrl,
        "testimonials": reviews.testimonials[]->,
        "relatedTemplates": relatedTemplates[]-> {
          _id,
          title,
          slug,
          kind,
          thumbnailUrlWebp
        },
        includedItems[] {
          _key,
          content,
          image,
          icon
        }
      }`,
      {
        params: {
          kind,
          slug: extractedSlug,
        },
        preview: draftMode().isEnabled,
      }
    ).data,
    getTemplateCategoriesFromSanity(kind).catch(() => []), // If it fails, use empty array
  ])

  // Extract values from Promise.allSettled, handling errors
  let page = pageResult.status === 'fulfilled' && pageResult.value && typeof pageResult.value === 'object' && pageResult.value !== null
    ? pageResult.value 
    : null
  
  // Guardar el previewUrl manual si existe (campo editado manualmente en Sanity)
  const manualPreviewUrl = page?.previewUrl && page.previewUrl.trim() !== '' ? page.previewUrl : null
  
  // Fallback to Mandrel solo si no se encontró en Sanity
  if (!page || Object.keys(page).length === 0 || !page._id) {
    try {
      const sanityIdResult = await query(
        `*[_type == 'template' && (slug.current == $slug || _id == $slug)] | order(_updatedAt desc) [0]._id`,
        {
          params: { slug: extractedSlug },
          preview: draftMode().isEnabled,
        }
      ).data

      const templateId = sanityIdResult || extractedSlug
      const mandrelTemplate = await mandrelApi.getTemplateById(templateId)

      if (mandrelTemplate?.template) {
        const mandrelData = mandrelTemplate.template
        page = {
          _id: mandrelTemplate._meta?.id || templateId,
          title: mandrelData.name || '',
          slug: {
            current: extractedSlug,
          },
          kind: kind === TemplateKind.Leadpage ? 'LeadpageTemplate' : 'SiteTemplate',
          content: {
            description: mandrelData.description || '',
            label: '',
          },
          fullPageScreenshotUrlWebp: mandrelData.thumbnailUrlWebp || '',
          fullPageScreenshotUrlWebpAspectRatio: mandrelData.thumbnailAspect || 16/9,
          categories: (mandrelData.categories || []).map((cat: string) => ({
            value: cat,
            label: cat,
          })),
          tags: (mandrelData.tags || []).map((tag: string) => ({
            value: tag,
            label: tag,
          })),
          details: {
            title: '',
            content: mandrelData.description || '',
            column2: '',
          },
          included: {
            landingPage: {},
            site: {},
          },
          includedItems: [],
          reviews: {},
          previewUrl: manualPreviewUrl || mandrelData.previewUrl || `https://api.leadpages.io/template/v2/templates/${templateId}/preview.html`,
          seo: {
            seoTitle: mandrelData.name || '',
            seoDescription: mandrelData.description || '',
          },
        }
      }
    } catch (error) {
      console.warn(`Template not found in Sanity or Mandrel for slug: ${extractedSlug}`, error)
    }
  } else if (manualPreviewUrl) {
    // Si encontramos el template en Sanity con previewUrl manual, asegurarnos de usarlo
    page.previewUrl = manualPreviewUrl
  }
  
  // If no template found after fallback, return empty structure
  if (!page) {
    return {
      components: [],
      hero: [],
    }
  }

  // Settings is not essential, use empty object directly
  const settings = {}
  let categories = categoriesResult.status === 'fulfilled' && Array.isArray(categoriesResult.value)
    ? categoriesResult.value
    : []

  // Fallback for categories from Mandrel if not available
  if ((!categories || categories.length === 0) && page._id) {
    try {
      const mandrelTaxons = await mandrelApi.getTaxons()
      if (mandrelTaxons) {
        const categoryTaxons = mandrelTaxons.filter((t: any) => t.type === 'category')
        categories = categoryTaxons.map((cat: any) => ({
          label: cat.label,
          value: cat.value,
          type: 'category',
          section: cat.section || 'Templates',
        })) as Taxon[]
      }
    } catch (error) {
      console.warn('Failed to fetch categories from Mandrel', error)
    }
  }

  const data = mergeTemplateWithDefaults(page, settings) as any
  const category = getTemplateCategory(data, categories)

  // Build breadcrumbs
  const breadcrumbs = {
    items: [
      { label: 'Templates & Inspirations' },
      { label: 'Categories' },
      ...(category ? [{ label: category.label }] : []),
    ],
  }

  // Hero - use ctaButton from Sanity if set, else fallback to default
  const sanityCta = data.ctaButton?.label && data.ctaButton?.url
  const defaultCtaUrl = data._id
    ? `${getFreeTrialCheckoutUrl('standardMonthly')}?lp_template_data=${getKindQueryParam((kind === TemplateKind.Leadpage ? 'LeadpageTemplate' : 'SiteTemplate') as any)}-${data._id}`
    : getFreeTrialCheckoutUrl('standardMonthly')

  const hero = [
    {
      _key: 'heroInspiration',
      _type: 'heroInspiration',
      breadcrumbs,
      heading: data.title || 'Template',
      deviceIcons: true,
      ctaButton: sanityCta
        ? { label: data.ctaButton.label, url: data.ctaButton.url }
        : { label: 'Use for Free', url: defaultCtaUrl },
      templateCode: data.templateCode && Array.isArray(data.templateCode)
        ? blocksToText(data.templateCode)
        : null,
    },
  ]

  // Components
  const components = [
    // Preview - only if there's a previewUrl
    ...(data.previewUrl ? [{
      _key: 'inspirationPreview',
      _type: 'inspirationPreview' as const,
      previewUrl: data.previewUrl,
    }] : []),
    // Description - uses Text from What's Included (landingPage/site), with fallbacks
    {
      _key: 'inspirationDescription',
      _type: 'inspirationDescription' as const,
      content:
        data.included?.landingPage?.text ||
        data.included?.site?.text ||
        data.content?.description ||
        data.details?.content,
    },
    // Details - Use includedItems from Sanity if available, otherwise use defaults
    {
      _key: 'inspirationDetails',
      _type: 'inspirationDetails' as const,
      heading: 'Details',
      items:
        data.includedItems && data.includedItems.length > 0
          ? data.includedItems.map((item: any, index: number) => {
              let label = 'Feature item'
              if (item.content) {
                if (typeof item.content === 'string') {
                  label = item.content
                } else if (Array.isArray(item.content)) {
                  label = blocksToText(item.content) || 'Feature item'
                }
              }
              return {
                _key: item._key || `item-${index}`,
                label,
                image: item.image || null,
                icon: (item.icon || 'check') as 'check' | 'star' | 'gear' | 'mobile' | 'form' | 'seo' | 'custom' | 'scroll',
              }
            })
          : [
              { _key: '1', label: 'Conversion-driven design', icon: 'check' as const },
              { _key: '2', label: 'Drag & drop editing, no coding required', icon: 'gear' as const },
              { _key: '3', label: 'Mobile responsive for every device', icon: 'mobile' as const },
              { _key: '4', label: 'Forms for lead generation', icon: 'form' as const },
              { _key: '5', label: 'Embedded scroll', icon: 'scroll' as const },
              { _key: '6', label: 'Industry-leading support', icon: 'star' as const },
              { _key: '7', label: 'SEO-optimized content', icon: 'seo' as const },
              { _key: '8', label: 'Complete customization', icon: 'custom' as const },
              { _key: '9', label: 'A complete conversion toolkit for marketing your business', icon: 'check' as const },
            ],
    },
    // SubFooter (prefooter)
    {
      _key: 'subFooter',
      _type: 'subFooter' as const,
      heading: "You've seen what's possible. Now build it.",
      subheading: 'Templates for structure. Sections for style. Integrations for Power.',
      ctaLabel: 'Start Building for Free',
      ctaHref: '/pricing',
    },
  ]

  return {
    components: components as RackInnerComponent[],
    hero: hero as any,
  }
}

export default fetchInspirationData

