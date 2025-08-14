import type { ResolvingMetadata } from 'next'
import Layout, { pageQuery } from '@/(pages)/_page'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'

const getPlatformSlug = (_slug: string[] | string) => {
  const slug = Array.isArray(_slug) ? _slug : [_slug]
  return ['platform', ...slug].filter(Boolean).join('/')
}

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug } = await params
  const path = ['/', getPlatformSlug(slug)].join('')

  return await generateMetadataStatic({ parent, path, types: ['page'] });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug = [] } = await params
  const {components, hero} = await pageQuery(getPlatformSlug(slug)).data || {}

  return (
    <Layout data={{components, hero}} />
  )
}

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ types: ['page'], filter: `path match '/platform*'`, catchAll: 'platform' })
  const paths = params.map(({params: {slug}}: any) => ({
    slug,
  }))

  return paths
}