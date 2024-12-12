import { getDocSlugs } from '@lib'
import { getServerSideSitemapLegacy } from 'next-sitemap'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`
  const slugs = await getDocSlugs('templateCategory', {
    projections: { templateType: 'templateType', _updatedAt: '_updatedAt' },
  })

  const paths = slugs?.map(({ slug, templateType, _updatedAt }) => ({
    loc: `${rootUrl}/${
      templateType === 'website' ? 'website-templates' : 'templates'
    }/category/${slug}`,
    changefreq: 'yearly',
    priority: 0.7,
    lastmod: _updatedAt,
  }))

  return getServerSideSitemapLegacy(context, paths)
}

// Default export to prevent next.js errors
export default function SiteTemplatesSitemapIndex() {}
