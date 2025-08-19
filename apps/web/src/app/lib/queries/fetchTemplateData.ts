import type { Taxon } from '@/types'
//@ts-expect-error can not find types module from package
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { draftMode } from 'next/headers'
import { query } from '@/lib/queries'
import mergeTemplateWithDefaults from '@/lib/utils/mergeObjectWithDefaults'
import templateGalleryStore from '@/stores/templateGalleryStore'
import { TemplateKind } from '@/types/template-constants'

const mandrelApi = new MandrelApi({
  baseUrl: process.env.STARGATE_API_TEMPLATES_URL,
})

export const getTemplatePreviewUrl =
  templateGalleryStore.getState().getTemplatePreviewUrl

export const getTemplateCategory = (
  data: any,
  taxons: Taxon[]
): Taxon | null => {
  if (!data?.categories?.length || !taxons?.length) return null

  return (
    taxons.find((taxon) => taxon.value === data?.categories?.[0]?.value) || null
  )
}

export const getTemplateTags = (data: any, taxons: Taxon[]): Taxon[] | null => {
  if (!data?.tags?.length || !taxons?.length) return null

  return data.tags.reduce((acc: Taxon[], tag: Taxon) => {
    const taxonTag = taxons.find(
      (taxon) =>
        [
          'Collections',
          'Color',
          'Content',
          'Industries',
          'Page Elements',
          'Style',
        ].includes(taxon.section) && taxon.value === tag.value
    )

    if (!taxonTag) return acc
    return [
      ...acc,
      {
        ...taxonTag,
        // Legacy Static Mapping
        ...(['leadbox', 'leadboxes'].includes(taxonTag.value)
          ? { label: 'Pop-up form' }
          : {}),
      },
    ]
  }, [])
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
  const [page = {}, settings = {}, { taxons = [] } = {}] = await Promise.all([
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
    // Default Template Settings
    query(
      `*[_id == $id] | order(_updatedAt desc) [0] {
        ...,
        "testimonials": reviews.testimonials[]->
      }`,
      {
        params: {
          id: settingsId,
        },
        preview: draftMode().isEnabled,
      }
    ).data,
    // Mandril Taxonomies
    mandrelApi.getTaxons(),
  ])

  const data = mergeTemplateWithDefaults(page, settings)
  const category = getTemplateCategory(data, taxons)
  const tags = getTemplateTags(data, taxons)

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
