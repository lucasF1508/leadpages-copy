import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib/queries'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`
  const docs = await runQuery(
    `*[_type == "template" && kind == 'LeadpageTemplate'] | order(_updatedAt desc)`
  )

  return getServerSideSitemapLegacy(
    context,
    docs.map((item) => {
      const { modified, _updatedAt, slug } = item

      return {
        loc: `${rootUrl}/templates/landing-page-template-new/${slug?.current}`,
        changefreq: 'yearly',
        priority: 0.7,
        lastmod: new Date(modified || _updatedAt).toISOString(),
      }
    })
  )
}

// Default export to prevent next.js errors
export default function SiteTemplatesSitemapIndex() {}
