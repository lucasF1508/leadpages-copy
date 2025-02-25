import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib/queries'
import { generateEntries } from '@pages/sitemap.xml'

export const getServerSideProps = async (context) => {
  const res = await runQuery(`*[_type == "integration"]{path, _updatedAt, modified}`)
  const entries = generateEntries(res, context)

  return getServerSideSitemapLegacy(context, entries)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
