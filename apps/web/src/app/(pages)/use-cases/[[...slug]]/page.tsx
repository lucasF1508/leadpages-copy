import type { ResolvingMetadata } from 'next'
import Layout, { pageQuery } from '@/(pages)/_page'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'

const getUseCaseSlug = (_slug: string[] | string) => {
  const slug = Array.isArray(_slug) ? _slug : [_slug]
  return ['use-cases', ...slug].filter(Boolean).join('/')
}

export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
) {
  const { slug } = await params
  const path = ['/', getUseCaseSlug(slug)].join('')
  return await generateMetadataStatic({ parent, path, types: ['page'] });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug = [] } = await params
  const {components, hero} = await pageQuery(getUseCaseSlug(slug)).data || {}

  return (
    <Layout data={{components, hero}} />
  )
}

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ types: ['page'], filter: `path match '/use-cases*'`, catchAll: 'use-cases' })
  const paths = params.map(({params: {slug}}: any) => ({
    slug,
  }))

  return paths
}