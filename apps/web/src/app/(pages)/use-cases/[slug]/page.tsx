import type { ResolvingMetadata } from 'next'
import Layout, { pageQuery } from '@/(pages)/_page'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug } = await params
  return await generateMetadataStatic({ parent, path: `/use-cases/${slug}`, types: ['page'] });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const {components, hero} = await pageQuery(`use-cases/${slug}`).data || {}

  return (
    <Layout data={{components, hero}} />
  )
}

// // Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ types: ['page'], filter: `path match '/use-cases/*'`, catchAll: 'use-cases' })
  const paths = params.map(({params: {slug}}: any) => ({
    slug: slug[0],
  }))

  return paths
}