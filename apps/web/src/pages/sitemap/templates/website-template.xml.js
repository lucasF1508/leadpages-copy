import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`
  const docs = await runQuery(
    `*[_type == "template" && kind == 'SiteTemplate'] | order(_updatedAt desc) {_updatedAt, ...}`
  )

  return getServerSideSitemapLegacy(
    context,
    docs.map((item) => ({
      loc: `${rootUrl}/website-templates/website-template/${item?.slug?.current}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(item?._updatedAt).toISOString(),
    }))
  )
}

// Default export to prevent next.js errors
export default function SiteTemplatesSitemapIndex() {}
