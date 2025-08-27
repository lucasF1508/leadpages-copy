import type { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import type { ResolvingMetadata } from 'next'
import Layout from '@/components/Layout'
import { getStaticPathsParams } from '@/lib/queries'
import { fetchTemplateData } from '@/lib/queries/fetchTemplateData'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { TemplateKind } from '@/types/template-constants'

const types = ['template']
const kind = TemplateKind.Site
const settingsId = 'websiteTemplateSettings'

export async function generateStaticParams() {
  const templates = await getStaticPathsParams({
    filter: `kind == "${kind}"`,
    types,
  })

  const paths = templates.map(({ params: { slug } }: any) => ({
    slug,
  }))

  return paths
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

  const { components, hero }: any = await fetchTemplateData({
    kind,
    settingsId,
    slug,
  })

  return <Layout data={{ components, hero }} />
}
