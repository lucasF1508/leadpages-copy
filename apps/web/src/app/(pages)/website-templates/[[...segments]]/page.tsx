import { draftMode } from 'next/headers'
import Layout from '@/(pages)/_page'
import { componentsQuery } from '@/(pages)/_page'
import { query } from '@/lib/queries'
import { TemplateKind } from '@/types/template-constants'

export const dynamic = 'force-static'

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
    components: _components = [],
    hero: _hero,
    marquee,
  } = (await query(
    `*[_type == 'pageTemplates' && _id == 'pageWebsiteTemplates'] | order(_updatedAt desc) [0]
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
      ..._hero,
      _id: 'heroTextWithMarquee',
      _type: 'heroTextWithMarquee',
      marquee,
    },
  ]

  const components = [
    {
      _type: 'templateGallery',
      kind: TemplateKind.Site,
    },
    ...(_components || []),
  ]

  return <Layout data={{ components, hero }} />
}
