import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib'

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) => {
  const docs = await runQuery(
    `*[_type == "template" && kind == 'SiteTemplate'] | order(_updatedAt desc) {_updatedAt, ...}`
  )

  return getServerSideSitemapLegacy(
    context,
    docs.map((item) => ({
      loc: `${NEXT_PUBLIC_URL}/website-templates/website-template/${item?.slug?.current}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(item?._updatedAt).toISOString(),
    }))
  )
}

// Default export to prevent next.js errors
export default function SiteTemplatesSitemapIndex() {}
