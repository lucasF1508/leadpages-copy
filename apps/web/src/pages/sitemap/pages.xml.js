import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib/queries'
import { generateEntries, sortPaths } from '@pages/sitemap.xml'

export const getServerSideProps = async (context) => {
  const queryPaths = await runQuery(`*[_type == "page"].path`)
  const { orphanPaths, parentPaths } = sortPaths(queryPaths)
  const orphans = [...orphanPaths]
  const parents = [...parentPaths]

  const filterPaths = orphans
    ?.filter((path) => !parents.includes(path))
    .map((path) => `"${path}"`)
    .toString()

  const res = await runQuery(
    `*[_type == "page" && slug.current in [${filterPaths}]] {path, _updatedAt, modified}`
  )
  const entries = generateEntries(res, context)

  return getServerSideSitemapLegacy(context, entries)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
