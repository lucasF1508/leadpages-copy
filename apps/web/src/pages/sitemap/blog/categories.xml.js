import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`

  const categoryPaths = await runQuery(`*[_type == "categoryPost"].path`)
  const entries =
    categoryPaths?.map((path) => ({
      loc: `${rootUrl}${path}`,
      priority: 0.7,
    })) || []

  return getServerSideSitemapLegacy(context, entries)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
