import { getServerSideSitemapLegacy } from 'next-sitemap'
import MandrelApi from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl })

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) => {
  const { _items: siteTemplates = [] } = await mandrelApi.getLeadpageTemplates()

  return getServerSideSitemapLegacy(
    context,
    siteTemplates.map((item) => ({
      loc: `${NEXT_PUBLIC_URL}/templates/preview/${item?._meta?.id}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(item?._meta?.updated).toISOString(),
    }))
  )
}

// Default export to prevent next.js errors
export default function LeadpagesTemplatesSitemapIndex() {}
