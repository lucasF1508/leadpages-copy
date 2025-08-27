export const dynamic = 'force-static'

import { draftMode } from 'next/headers'
import Layout from '@/components/Layout'
import { query } from '@/lib/queries'

export default async function Page() {
  const [archive, categories] = await Promise.all([
    query(`*[_type == "pageIntegrations"][0]`, {
      preview: draftMode().isEnabled,
    }).data,
    query(
      `*[_type == "categoryIntegration"] | order(orderRank asc, lower(title) asc) {
        _id,
        title,
        slug,
        "integrations": *[_type == "integration" && references(^._id)] | order(orderRank asc, lower(title) asc) {
          _id,
          title,
          excerpt,
          category->{title,slug},
          status->{title,slug},
          "link": select(hasSubpage => {
            "condition": "internal",
            "url": path
          })
        }
      }`,
      {
        preview: draftMode().isEnabled,
      }
    ).data,
  ])

  const hero = [
    {
      ...archive?.hero,
      _type: 'heroBase',
      className: 'box-[my*1.5]',
    },
  ]

  const components = [
    {
      _key: 'integrationDirectory',
      _type: 'integrationDirectory',
      categories,
      noResults: archive?.noResults,
    },
  ] as any

  return <Layout data={{ components, hero }} />
}
