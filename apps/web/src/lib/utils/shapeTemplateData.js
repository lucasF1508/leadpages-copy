import fetchTaxons from '@lib/mandrel/fetchTaxons'
import { runQuery } from '@lib/queries'

const tagSections = [
  'Industries',
  'Collections',
  'Page Elements',
  'Style',
  'Color',
  'Content',
]

const sortTags = async (tags) => {
  const { taxons = [] } = await fetchTaxons()
  const tagTaxons = taxons.filter((taxon) => taxon.type === 'tags')
  const filteredTaxons = tagTaxons.filter((taxon) =>
    tagSections.includes(taxon.section)
  )

  const matchingTaxons = filteredTaxons.reduce((acc, taxon) => {
    const isMatch = tags.some((tag) => tag.value === taxon.value)

    if (isMatch) {
      const item = taxon
      if (item.value === 'leadbox' || item.value === 'leadboxes') {
        item.label = 'Pop-up form'
      }
      acc.push(item)
    }

    return acc
  }, [])

  return matchingTaxons
}

export const shapeData = async (data, preview) => {
  const [templateData, templateSettingsData, _reviewsData] =
    (data?.length && data) || []

  const { categoryTestimonial } = templateData?.reviews || {}
  const categorySlug = categoryTestimonial?.slug?.current

  const { data: templateReviews } =
    categoryTestimonial && categorySlug
    ? await runQuery(
        `*[_type == "testimonial" && "${categorySlug}" in category[]->slug.current] | order(_updatedAt desc) [0..2]`,
        { preview }
      )
      : {}

  const relatedTemplatesData = templateData?.relatedTemplates || []
  const reviewsData = templateReviews || _reviewsData || []
  const seo = {
    ...templateSettingsData?.seo,
    ...Object.fromEntries(
      Object.entries(templateData?.seo || {}).filter(([, value]) => value)
    ),
    seoTitle: `${templateData?.seo?.seoTitle || templateData?.title || ''}${
      templateSettingsData?.seo?.seoTitle ? ' | ' : ''
    }${templateSettingsData?.seo?.seoTitle || ''}`,
    hasCustomSeoTitle: !!templateData?.seo?.seoTitle,
  }

  const tags = await sortTags(templateData?.tags || [])

  return [
    {
      templateData: {
        ...templateData,
        tags,
      },
      templateSettingsData,
      relatedTemplatesData,
      reviewsData,
      seo,
    },
  ]
}
