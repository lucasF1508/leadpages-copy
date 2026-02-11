import type { Taxon } from '@/types'
import { draftMode } from 'next/headers'
import { query } from '@/lib/queries'
import mergeTemplateWithDefaults from '@/lib/utils/mergeObjectWithDefaults'
import templateGalleryStore from '@/stores/templateGalleryStore'
import { TemplateKind } from '@/types/template-constants'
// @ts-expect-error can not find types module from package
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

// Simplified tags function - returns tags directly from template data
// without Mandrel filtering (tags are already in the template document)
export const getTemplateTags = (data: any): Taxon[] | null => {
  if (!data?.tags?.length) return null

  return data.tags.map((tag: any) => {
    // Legacy Static Mapping for specific tag values
    const tagValue = tag.value || tag.label || ''
    const label = ['leadbox', 'leadboxes'].includes(tagValue)
      ? 'Pop-up form'
      : tag.label || tagValue

    return {
      label: label || '',
      value: tagValue || '',
      type: 'tag' as const,
      section: 'Tags' as const,
    } as any as Taxon
  })
}

export const fetchTemplateData = async ({
  kind = TemplateKind?.Leadpage,
  label = 'Template',
  settingsId = 'templateSettings',
  slug,
}: {
  kind: TemplateKind
  label?: string
  settingsId: 'templateSettings' | 'websiteTemplateSettings'
  slug: string
}) => {
  const [pageResult, settingsResult, categoriesResult] = await Promise.allSettled([
    // Template
    query(
      `*[_type == 'template' && kind == $kind && slug.current == $slug] | order(_updatedAt desc) [0] {
        ...,
        "testimonials": reviews.testimonials[]->
      }`,
      {
        params: {
          kind,
          slug,
        },
        preview: draftMode().isEnabled,
      }
    ).data,
    // Default Template Settings (may not exist, use {} as fallback)
    // Use a query that doesn't fail if the document doesn't exist
    query(
      `*[_id == $id][0] {
        ...,
        "testimonials": reviews.testimonials[]->
      }`,
      {
        params: {
          id: settingsId,
        },
        preview: draftMode().isEnabled,
      }
    ).data.then((result) => result || null).catch(() => {
      // If it doesn't exist or there's any error, return null
      return null
    }),
    // Get categories from Sanity instead of Mandrel
    getTemplateCategoriesFromSanity(kind).catch(() => []), // If it fails, use empty array
  ])

  // Extract values from Promise.allSettled, handling errors
  let page = pageResult.status === 'fulfilled' && pageResult.value && typeof pageResult.value === 'object' && pageResult.value !== null
    ? pageResult.value
    : {}
  const settings = settingsResult.status === 'fulfilled' && settingsResult.value && typeof settingsResult.value === 'object' && settingsResult.value !== null
    ? settingsResult.value
    : {}
  const categories = categoriesResult.status === 'fulfilled' && Array.isArray(categoriesResult.value)
    ? categoriesResult.value
    : []

  // Fallback to Mandrel if not found in Sanity
  if (!page || Object.keys(page).length === 0 || !page._id) {
    try {
      // Search for _id in Sanity using slug (may exist but without complete data)
      const sanityIdResult = await query(
        `*[_type == 'template' && slug.current == $slug] | order(_updatedAt desc) [0]._id`,
        {
          params: { slug },
          preview: draftMode().isEnabled,
        }
      ).data

      const templateId = sanityIdResult || slug

      // Try to get from Mandrel
      const mandrelTemplate = await mandrelApi.getTemplateById(templateId)

      if (mandrelTemplate?.template) {
        // Transform Mandrel data to Sanity format
        const mandrelData = mandrelTemplate.template
        page = {
          _id: mandrelTemplate._meta?.id || templateId,
          title: mandrelData.name || '',
          slug: {
            current: slug,
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
            content: '',
            column2: '',
          },
          included: {
            landingPage: {},
            site: {},
          },
          includedItems: [],
          reviews: {},
          seo: {
            seoTitle: mandrelData.name || '',
            seoDescription: mandrelData.description || '',
          },
        }
      }
    } catch (error) {
      // If Mandrel also fails, continue with empty page
      console.warn(`Template not found in Sanity or Mandrel for slug: ${slug}`, error)
    }
  }

  const data = mergeTemplateWithDefaults(page, settings)
  
  // Fallback for categories and tags from Mandrel if not available
  let finalCategories = categories
  let finalTags = getTemplateTags(data)
  
  if ((!finalCategories || finalCategories.length === 0) && data._id) {
    try {
      const mandrelTaxons = await mandrelApi.getTaxons()
      if (mandrelTaxons) {
        const categoryTaxons = mandrelTaxons.filter((t: any) => t.type === 'category')
        finalCategories = categoryTaxons.map((cat: any) => {
          const sectionValue = cat.section || 'Templates'
          return {
            label: cat.label || '',
            value: cat.value || '',
            type: 'category' as const,
            section: sectionValue,
          } as any as Taxon
        })
      }
    } catch (error) {
      console.warn('Failed to fetch categories from Mandrel', error)
    }
  }
  
  if (!finalTags && data._id) {
    try {
      const mandrelTaxons = await mandrelApi.getTaxons()
      if (mandrelTaxons && data.tags?.length) {
        const tagTaxons = mandrelTaxons.filter((t: any) => t.type === 'tags')
        finalTags = data.tags
          .map((tag: any) => {
            const taxon = tagTaxons.find((t: any) => t.value === tag.value || t.value === tag)
            if (taxon) {
              const sectionValue = taxon.section || 'Tags'
              return {
                label: taxon.label === 'leadbox' || taxon.label === 'leadboxes' ? 'Pop-up form' : (taxon.label || ''),
                value: taxon.value || '',
                type: 'tag' as const,
                section: sectionValue,
              } as any as Taxon
            }
            const tagValue = typeof tag === 'string' ? tag : ((tag as any)?.value || (tag as any)?.label || '')
            return {
              label: typeof tag === 'string' ? tag : ((tag as any)?.label || (tag as any)?.value || ''),
              value: tagValue || '',
              type: 'tag' as const,
              section: 'Tags' as const,
            } as any as Taxon
          })
          .filter(Boolean) as Taxon[]
      }
    } catch (error) {
      console.warn('Failed to fetch tags from Mandrel', error)
      // Use tags directly from data if Mandrel fails
      finalTags = getTemplateTags(data)
    }
  }
  
  const category = getTemplateCategory(data, finalCategories)
  const tags = finalTags

  const hero = [
    {
      _key: 'heroTemplate',
      _type: 'heroTemplate',
      category,
      content: data.content?.description,
      heading: data.title,
      image: {
        aspectRatio: data.fullPageScreenshotUrlWebpAspectRatio,
        src: data.fullPageScreenshotUrlWebp,
      },
      label: data.content?.label,
      links: {
        demo: {
          label: `Demo This ${label}`,
          url: getTemplatePreviewUrl(data.kind, data.slug.current, data._id),
        },
      },
    },
  ]

  const components = [
    {
      _key: 'templateDetails',
      _type: 'templateDetails',
      category,
      heading: data.title,
      label: `${label} Details`,
      tabs: {
        details: {
          column1: data.details?.content,
          column2: data.details?.column2,
          heading: data.details?.title,
        },
        features: {
          ...(kind === TemplateKind?.Leadpage
            ? data.included?.landingPage
            : data.included?.site),
          ...(kind === TemplateKind.Site
            ? { pages: data.included?.pageTemplatesIncluded }
            : {}),
          items: data.includedItems,
        },
        legend: [
          {
            label: 'Details',
            value: 'details',
          },
          {
            label: `${label} Features`,
            value: 'features',
          },
          {
            label: 'Reviews',
            value: 'reviews',
          },
        ],
        reviews: {
          ...data.reviews,
          items: data.testimonials,
        },
      },
      tags,
    },
  ]

  return {
    components,
    hero,
  }
}

export default fetchTemplateData
