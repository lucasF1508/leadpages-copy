import type { ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import TemplatePreview from '@/components/TemplatePreview'
import { getStaticPathsParams, query } from '@/lib/queries'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'

const queryData = (slug: string) => query(`*[slug.current == '${slug}'] | order(_updatedAt desc) [0]`, {
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
  const params = await getStaticPathsParams({ types: ['template'] })
  const paths = params.map(({params: {slug}}: any) => ({
    slug,
  }))
  
  return paths
}