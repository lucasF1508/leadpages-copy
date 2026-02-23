import { draftMode } from 'next/headers'
import Layout from '@/components/Layout'
import { componentsQuery, query } from '@/lib/queries'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import mergeTemplateWithDefaults from '@/lib/utils/mergeObjectWithDefaults'

export const dynamic = 'force-static'

export async function generateMetadata({
  params,
}: {
  params: { segments: string[] }
}) {
  const { segments } = params
  const slug = segments?.length ? segments.pop() : undefined

  return await generateMetadataStatic(
    !segments?.length
      ? {
          path: '/template-inspiration',
          types: ['pageTemplates'],
        }
      : {
          slug,
          types: ['templateCategory'],
        }
  )
}

export default async function Page({
  params,
}: {
  params: { segments: string[] }
}) {
  const { segments } = params
  let categorySlug = ''

  if (segments?.[0] === 'category' && segments?.[1]) {
    categorySlug = segments[1]
  }

  const preview = draftMode().isEnabled

  const [pageData, templatesPageData] = await Promise.all([
    query(
      `*[_type == 'pageTemplates' && _id == 'pageStudioTemplates'] | order(_updatedAt desc) [0]
        {
          ...,
          ${componentsQuery},
          "categoryHero": select(defined($categorySlug) => *[_type == 'templateCategory' && slug.current == $categorySlug][0].hero, {})
        }
      `,
      {
        params: { categorySlug },
        preview,
      }
    ).data,
    // Fallback: reuse hero (heading/subheading) from `/templates` if `pageStudioTemplates`
    // doesn't have it configured (or is empty).
    query(
      `*[_type == 'pageTemplates' && _id == 'pageTemplates'] | order(_updatedAt desc) [0] {
        hero
      }`,
      {
        preview,
      }
    ).data,
  ])

  const {
    categoryHero,
    components: _components = [],
    hero: _hero,
    marquee,
  } = pageData || {}

  const templatesHero = templatesPageData?.hero

  const isEmptyHeading = (v: any) => {
    if (v == null) return true
    if (Array.isArray(v)) return v.length === 0
    if (typeof v === 'string') return v.trim() === ''
    return false
  }

  const isEmptyContent = (v: any) => {
    if (v == null) return true
    if (typeof v !== 'string') return false
    return v.trim() === ''
  }

  const heroFromStudio = mergeTemplateWithDefaults(categoryHero || {}, _hero || {}) as any
  const heroFromTemplates = mergeTemplateWithDefaults(categoryHero || {}, templatesHero || {}) as any

  const resolvedHero = {
    ...heroFromStudio,
    content: !isEmptyContent(heroFromStudio?.content)
      ? heroFromStudio.content
      : heroFromTemplates?.content,
    heading: !isEmptyHeading(heroFromStudio?.heading)
      ? heroFromStudio.heading
      : heroFromTemplates?.heading,
  }

  const hero = [
    {
      ...resolvedHero,
      _id: 'heroTextWithMarquee',
      _type: 'heroTextWithMarquee',
      marquee,
    },
  ]

  const components = [
    {
      _key: 'templateGalleryStudio',
      _type: 'templateGalleryStudio',
    },
    ...(_components || []),
    {
      _key: 'templateMarketplaceFooterCTA',
      _type: 'templateMarketplaceFooterCTA',
    },
  ]

  return <Layout data={{ components, hero }} />
}
