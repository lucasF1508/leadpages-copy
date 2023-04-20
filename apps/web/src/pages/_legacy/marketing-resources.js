import React from 'react'
import { runQueries, runQuery } from '@lib'
import MarketingResources from '@layouts/MarketingResources'

const MarketingResourcesPage = (props) => <MarketingResources {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/marketing-resources'

  const { global } = await runQueries([])
  const customers = await runQuery(`
    *[_type == 'customer' && 'featured' in category[]->slug.current] | order(orderRank) {
    path,
    excerpt {
      ...,
      image {
        ...,
        asset->
      }
    }
  }`)

  const options = { underlaidMenu: true }

  return {
    props: {
      data: [
        {
          customers,
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Free Digital Marketing Resources from Leadpages`,
            seoDescription: `Want to stay in the know on all things about digital marketing? Get full access to free webinars, ebooks, guides, and podcasts brought to you by Leadpages.`,
            seoImage: 'https://static.leadpages.com/images/og/og-customers.jpg',
          },
        },
      ],
      global,
      options,
      slug,
      preview,
    },
  }
}

export default MarketingResourcesPage
