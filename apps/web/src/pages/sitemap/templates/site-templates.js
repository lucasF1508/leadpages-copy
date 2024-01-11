import { getServerSideSitemapLegacy } from 'next-sitemap'
import MandrelApi from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl, baseFilters } from '@legacy/constants/templates'

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl, baseFilters })

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) => {
  const limit = 300 // Max limit is 300
  let cursor = '0'
  let total = 0
  let fetchedTemplates = []
  do {
    const response = await mandrelApi.getSiteTemplates({
      limit: { operator: '', value: limit },
      cursor: { operator: '', value: cursor },
    })
    cursor = response._meta.cursor
    total = response._meta.total
    fetchedTemplates = [...fetchedTemplates, ...response._items]
  } while (fetchedTemplates.length < total)

  return getServerSideSitemapLegacy(
    context,
    fetchedTemplates.map((item) => ({
      loc: `${NEXT_PUBLIC_URL}/website-templates/preview/${item?._meta?.id}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(item?._meta?.updated).toISOString(),
    }))
  )
}

// Default export to prevent next.js errors
export default function SiteTemplatesSitemapIndex() {}
