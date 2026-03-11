import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import type { HeroProps } from '@/components/Hero'
import type { RackInnerComponent } from '@/types/rack'
import Layout from '@/components/Layout'
import { getStaticPathsParams } from '@/lib/queries'
import { fetchTemplateData } from '@/lib/queries/fetchTemplateData'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { TemplateKind } from '@/types/template-constants'

const types = ['template']
const kind = TemplateKind.Leadpage
const settingsId = 'templateSettings'

export async function generateStaticParams() {
  try {
    const templates = await getStaticPathsParams({
      filter: `kind == "${kind}"`,
      types,
    })

    const paths = templates.map(({ params: { slug } }: any) => ({
      slug,
    }))

    return paths
  } catch (e) {
    console.warn('[landing-page-template] generateStaticParams failed:', e)
    return []
  }
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug: _slug } = await params
  const slug = Array.isArray(_slug) ? _slug : [_slug]

  return await generateMetadataStatic({
    parent,
    slug: slug?.join('/'),
    types,
  })
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  try {
    const result = await fetchTemplateData({
      kind,
      settingsId,
      slug,
    })

    const { components, hero } = result || {}

    if (!components?.length && !hero?.length) {
      notFound()
    }

    return (
      <Layout
        data={{
          components: components as RackInnerComponent[],
          hero: hero as HeroProps['hero'],
        }}
      />
    )
  } catch (e) {
    console.error(`[landing-page-template] Failed for slug "${slug}":`, e)
    notFound()
  }
}
