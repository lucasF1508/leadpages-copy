import { getServerSideSitemapIndexLegacy } from 'next-sitemap'

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) =>
  getServerSideSitemapIndexLegacy(context, [
    `${NEXT_PUBLIC_URL}/sitemap/templates/leadpages-templates`,
    `${NEXT_PUBLIC_URL}/sitemap/templates/site-templates`,
  ])

// Default export to prevent next.js errors
export default function SitemapIndex() {}
