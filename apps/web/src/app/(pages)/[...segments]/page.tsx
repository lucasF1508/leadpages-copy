import type { ResolvingMetadata } from 'next'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'
import { query, componentsQuery, joinPath } from '@/lib/queries'
import { draftMode } from 'next/headers'
import Layout from '@/components/Layout'

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ catchAll: '/', types: ['page'] })
  const paths = params.map(({ params: { slug } }: any) => ({
    segments: slug,
  }))
  return paths
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { segments } = await params
  const path = joinPath(segments)
  return await generateMetadataStatic({ parent, path, types: ['page'] })
}

export default async function Page({
  params,
}: {
  params: Promise<{ segments: string[] }>
}) {
  const { segments = [] } = await params
  const path = joinPath(segments)

  const { components, hero } =
    (await query(
      `*[_type == 'page' && path == $path] | order(_updatedAt desc) [0]{
        ...,
        ${componentsQuery}
      }`,
      {
        preview: draftMode().isEnabled,
        params: { path },
      }
    )?.data) || {}

  return <Layout data={{ hero, components }} />
}
