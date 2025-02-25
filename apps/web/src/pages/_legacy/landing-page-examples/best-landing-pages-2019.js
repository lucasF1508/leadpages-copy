import React from 'react'
import BestLandingPages2019 from '@layouts/LandingPageExamples/BestLandingPages2019'
import { runQueries } from '@lib/queries'

const BestLandingPages2019Page = (props) => <BestLandingPages2019 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2019'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Best Landing Pages 2019`,
            seoDescription: `What did the best landing pages in 2019 have in common? Find out what worked, what didn't, and what you can do better in your own conversion marketing.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-best-landing-pages-2019.jpg',
          },
        },
      ],
    },
  }
}

export default BestLandingPages2019Page
