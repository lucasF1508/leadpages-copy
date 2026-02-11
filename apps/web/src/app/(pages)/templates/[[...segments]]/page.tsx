import { draftMode } from 'next/headers'
import Layout from '@/components/Layout'
import { componentsQuery, query } from '@/lib/queries'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import mergeTemplateWithDefaults from '@/lib/utils/mergeObjectWithDefaults'

export const dynamic = 'force-static'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segments: string[] }>
}) {
  const { segments } = await params
  const slug = segments?.length ? segments.pop() : undefined

  return await generateMetadataStatic(
    !segments?.length
      ? {
          path: '/templates',
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
  const { segments } = await params
  let categorySlug = ''

  if (segments?.[0] === 'category' && segments?.[1]) {
    categorySlug = segments[1]
  }

  const {
    categoryHero,
    components: _components = [],
    hero: _hero,
    marquee,
  } = (await query(
    `*[_type == 'pageTemplates' && _id == 'pageTemplates'] | order(_updatedAt desc) [0]
      {
        ...,
        ${componentsQuery},
        "categoryHero": select(defined($categorySlug) => *[_type == 'templateCategory' && slug.current == $categorySlug][0].hero, {})
      }
    `,
    {
      params: {
        categorySlug,
      },
      preview: draftMode().isEnabled,
    }
  ).data) || {}

  const hero = [
    {
      ...mergeTemplateWithDefaults(categoryHero || {}, _hero),
      _id: 'heroTextWithMarquee',
      _type: 'heroTextWithMarquee',
      content:
        'Leadpages offers high-converting landing page templates designed to help marketers and businesses generate more leads quickly and easily.',
      marquee,
    },
  ]

  const components = [
    {
      _type: 'templateGallery',
    },
    ...(_components || []),
  ]

  return <Layout data={{ components, hero }} />
}
