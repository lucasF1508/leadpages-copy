import type { ResolvingMetadata } from 'next'
import Layout, { pageQuery } from '@/(pages)/_page'
import { generateMetadataStatic } from '@/lib/utils/generateMetadata/generateMetadataStatic'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(  
  { params, searchParams }: Props,
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