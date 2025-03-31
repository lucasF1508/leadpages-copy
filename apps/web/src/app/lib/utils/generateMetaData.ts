import type { Metadata } from 'next'
import { query, runQueries } from '@/lib/queries'

const VERCEL_ENV = process.env.VERCEL_ENV
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL

export async function generateMetadata(): Promise<Metadata> {
    const { data, global } = await runQueries(
      [
      query(
        `*[_type == 'pageHomeRebrand'] | order(_updatedAt desc) [0]
           {
             "seo": {
               ...(seo),
               "seoImage": seo.seoImage.asset->,
               "seoTitle": coalesce(seo.seoTitle, title),
               "seoDescription": coalesce(
                 seo.seoDescription,
                 array::join(string::split((pt::text(content)), "")[0..152], "") + "...",
               ),
             }
           }`
      )])

  const {seo} = data?.[0] || {}
  const {siteMeta} = global || {}
  const {siteName} = siteMeta || {}

  const { seoDescription: description, seoImage: image, seoTitle: title } = seo
  const robots = VERCEL_ENV !== 'production' ? 'noindex, nofollow' : ''

  const { metadata: { dimensions: { height, width }}} = image || {}
 
  return {
    description,
    openGraph: {
      description,
      images: [{height , url: image?.url, width}],
      locale: 'en_CA',
      siteName,
      title,
      type: 'website',
      url: `${NEXT_PUBLIC_URL}/`,
    },
    robots,    
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      images: [image?.url],
      title,
    }
  }
}