import type { ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import TemplatePreview from '@/components/TemplatePreview'
import { getStaticPathsParams, query, runQuery } from '@/lib/queries'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'

const queryData = (slug: string) => query(`*[slug.current == '${slug}' || _id == '${slug}'] | order(_updatedAt desc) [0]`, {
  preview: draftMode().isEnabled,
})

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug } = await params
  return await generateMetadataStatic({ parent, slug, types: ['template'] });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await queryData(slug).data || {}

  return <TemplatePreview data={data} />
}

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ type: 'template', filter: 'kind == "SiteTemplate"' })
  const ids = await runQuery(
    `*[_type == "template" && kind == "SiteTemplate"]._id`,
  )

  const slugPaths = params.map(({params: {slug}}: any) => ({
    slug,
  }))

  const idPaths = ids.map((slug: string) => ({slug}))

  const paths = [
    ...slugPaths,
    ...idPaths
  ]

  return paths
}