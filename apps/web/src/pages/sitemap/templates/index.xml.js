import { getServerSideSitemapIndexLegacy } from 'next-sitemap'

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) =>
  getServerSideSitemapIndexLegacy(context, [
    `${NEXT_PUBLIC_URL}/sitemap/templates/leadpages-template-preview`,
    `${NEXT_PUBLIC_URL}/sitemap/templates/website-template-preview`,
    `${NEXT_PUBLIC_URL}/sitemap/templates/leadpages-template`,
    `${NEXT_PUBLIC_URL}/sitemap/templates/website-template`,
    `${NEXT_PUBLIC_URL}/sitemap/templates/categories`,
  ])

// Default export to prevent next.js errors
export default function SitemapIndex() {}
