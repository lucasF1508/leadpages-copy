import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib/queries'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`

  const res = await runQuery(`*[_type == "publisher"]{path, _updatedAt, modified}`)
  const entries =
    res?.map(({ path, _updatedAt }) => ({
      loc: `${rootUrl}${path}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(_updatedAt).toISOString(),
    })) || []

  return getServerSideSitemapLegacy(context, entries)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
