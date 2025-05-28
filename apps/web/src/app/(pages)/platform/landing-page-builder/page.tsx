import type { ResolvingMetadata } from 'next'

import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'
import Layout, { pageQuery } from '@/(pages)/_page'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(  
  { params, searchParams }: Props,
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