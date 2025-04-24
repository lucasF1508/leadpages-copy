import type { ResolvingMetadata } from 'next'

import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import Layout, { pageQuery } from '../_page'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(  
  { params, searchParams }: Props,
  parent: ResolvingMetadata
) { 
  return await generateMetadataStatic({ path: '/product/lead-enrichment', parent });
}

export default async function Page() {
  const { components, hero } = await pageQuery('product/lead-enrichment').data || {}
  
  return (
    <Layout data={{components, hero}} />
  )
}