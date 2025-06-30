import type { ResolvingMetadata } from 'next'
import Layout, { pageQuery } from '@/(pages)/_page'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'
import { getStaticPathsParams } from '@/lib/queries'

export async function generateMetadata(  
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
) { 
  const { slug } = await params
  return await generateMetadataStatic({ parent, slug: `product/${slug}` });
}

const Page = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const { components, hero } = await pageQuery(`product/${slug}`).data || {}
  
  return (
    <Layout data={{components, hero}} />
  )
}

export default Page

// Prevent unspecified paths from being statically rendered at runtime
export const dynamicParams = false

export async function generateStaticParams() {
  const params = await getStaticPathsParams({ types: ['page'], filter: 'slug.current match "product/*"' })
  const paths = params.map(({params: {slug}}: any) => ({
    slug: slug.replace('product/', '')
  }))
  
  return paths
}