import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { runQuery } from '@lib'

export const sortPaths = (paths) => {
  const { parentPaths, orphanPaths } = paths?.reduce(
    (acc, path) => {
      const [firstSegment, secondSegment] = path.split('/').filter(Boolean)
      if (secondSegment) {
        acc.parentPaths.add(firstSegment)
      } else {
        acc.orphanPaths.add(firstSegment)
      }
      return acc
    },
    { parentPaths: new Set(), orphanPaths: new Set() }
  ) || { parentPaths: new Set(), orphanPaths: new Set() }

  return { parentPaths, orphanPaths }
}

export const generateEntries = (paths, context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`

  return (
    paths.map(({ path, _updatedAt }) => ({
      loc: `${rootUrl}${path}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(_updatedAt).toISOString(),
    })) || []
  )
}

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`

  const staticIndicies = [
    'blog/index',
    'templates/index',
    'comparisons',
    'integrations',
    'customers',
    'pages',
  ]

  const pagePaths = await runQuery(`*[_type == "page"].path`)
  const { parentPaths } = sortPaths(pagePaths)
  const indexPages = [...staticIndicies, ...parentPaths]

  const indexes = indexPages.map((path) => `${rootUrl}/sitemap/${path}.xml`)

  return getServerSideSitemapIndexLegacy(context, indexes)
}
// Default export to prevent next.js errors
export default function SitemapIndex() {}
