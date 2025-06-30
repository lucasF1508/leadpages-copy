import type { ResolvingMetadata } from 'next'

import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import Layout, { pageQuery } from '@/(pages)/_page'
import { GenerateMetadataProps } from '@/lib/utils/generateMetadata/generateMetadata'

export async function generateMetadata(  
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
) { 
  return await generateMetadataStatic({ path: '/platform/landing-page-builder', parent });
}

export default async function Page() {
  const { components, hero } = await pageQuery('platform/landing-page-builder').data || {}
  
  return (
    <Layout data={{components, hero}} />
  )
}