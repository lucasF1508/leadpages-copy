import { getServerSideSitemapIndexLegacy } from 'next-sitemap'

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`

  return getServerSideSitemapIndexLegacy(context, [
    `${rootUrl}/sitemap/templates/leadpages-template.xml`,
    `${rootUrl}/sitemap/templates/website-template.xml`,
    `${rootUrl}/sitemap/templates/categories.xml`,
  ])
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
