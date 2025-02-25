import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib/queries'
import { generateEntries, sortPaths } from '../sitemap.xml'

export const getServerSideProps = async (context) => {
  const { params } = context

  const { pages } = params
  const [base] = pages || []
  const cleanPath = base.replace(/\.xml$/, '')

  const allPaths = await runQuery(`*[_type == "page"].path`)
  const { parentPaths } = sortPaths(allPaths)

  // For all parent urls, return a sitemap
  if (parentPaths.has(cleanPath)) {
    const res = await runQuery(
      `*[_type == "page" && path match "${cleanPath}"] {path, _updatedAt, modified}`
    )
    const entries = generateEntries(res, context)

    return getServerSideSitemapLegacy(context, entries)
  }

  // If no match, return a 404
  return {
    notFound: true,
  }
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
