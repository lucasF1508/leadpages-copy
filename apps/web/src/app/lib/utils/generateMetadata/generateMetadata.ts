import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { runQuery } from '@/lib/queries'
import { parseImageRef } from '@/lib/utils/parseImageRef'

const VERCEL_ENV = process.env.VERCEL_ENV
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || 'https://www.leadpages.com'

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

  const { url } = parseImageRef(image) || {}
  const robots = VERCEL_ENV !== 'production' ? 'noindex, nofollow' : ''
  const template = _template || `%s | ${siteName}`

  return {
    alternates: { canonical: '/' },
    description,
    openGraph: {
      description,
      images: url ? [{ height: 630, url, width: 1200 }] : undefined,
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
      images: url ? [url] : undefined,
      title,
    } as Metadata['twitter'],
  }
}
