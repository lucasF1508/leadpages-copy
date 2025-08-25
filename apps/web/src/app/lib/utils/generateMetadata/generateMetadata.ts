import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { runQuery } from '@/lib/queries'
import { parseImageRef } from '@/lib/utils/parseImageRef'

const VERCEL_ENV = process.env.VERCEL_ENV
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

const seoQuery = `*[_type == 'seoSite'] | order(_updatedAt desc) [0]`

export type GenerateMetadataProps = {
  params: Promise<{ segments?: string[], slug?: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}


export async function generateMetadata(): Promise<Metadata> {
  const data = await runQuery(seoQuery, { preview: draftMode().isEnabled }) || {}

  const {
    seoDescriptionDefault: description,
    seoImageDefault: image,
    seoTitleDefault: title,
    seoTitlePattern: _template,
    siteName,
  } = data || {}

  const robots = VERCEL_ENV !== 'production' ? 'noindex, nofollow' : ''
  const template = _template || `%s | ${siteName}`
  const {
    url = null,
  } = parseImageRef(image) || {}

  return {
    description,
    openGraph: {
      description,
      images: [(url && {height: 630, url, width: 1200})],
      locale: 'en_CA',
      siteName,
      title,
      type: 'website',
      url: `${NEXT_PUBLIC_URL}/`,
    } as Metadata['openGraph'],
    robots,
    title: {
      default: title,
      template,
    },
    twitter: {
      card: 'summary_large_image',
      description,
      images: [url && url],
      title,
    } as Metadata['twitter']
  }
}