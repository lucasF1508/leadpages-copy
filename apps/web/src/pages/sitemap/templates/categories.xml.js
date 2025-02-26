import { runQuery } from '@lib/queries'
import { getServerSideSitemapLegacy } from 'next-sitemap'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`

  const res = await runQuery(
    `*[_type == "templateCategory"]{templateType, _updatedAt, modified, "slug": slug.current}`
  )

  const paths = res?.map(({ slug, templateType, _updatedAt, modified }) => ({
    loc: `${rootUrl}/${
      templateType === 'website' ? 'website-templates' : 'templates'
    }/category/${slug}`,
    changefreq: 'yearly',
    priority: 0.7,
    lastmod: modified || _updatedAt,
  }))

  return getServerSideSitemapLegacy(context, paths)
}

// Default export to prevent next.js errors
export default function SiteTemplatesSitemapIndex() {}
