import type { ResolvingMetadata } from 'next'
import Layout, { pageQuery } from '@/(pages)/_page'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'

export async function generateMetadata(  
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
) { 
  return await generateMetadataStatic({ parent, path: '/product/lead-agent' });
}

export default async function Page() {
  const { components, hero } = await pageQuery('product/lead-agent').data || {}
  
  return (
    <Layout data={{components, hero}} />
  )
}