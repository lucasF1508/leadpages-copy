import { getDocSlugs } from '@lib'
import { getServerSideSitemapLegacy } from 'next-sitemap'

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) => {
  const slugs = await getDocSlugs('templateCategory', {
    projections: { templateType: 'templateType', _updatedAt: '_updatedAt' },
  })

  const paths = slugs?.map(({ slug, templateType, _updatedAt }) => ({
    loc: `${NEXT_PUBLIC_URL}/${
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
