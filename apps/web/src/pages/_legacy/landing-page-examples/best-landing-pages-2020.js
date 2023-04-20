import React from 'react'
import BestLandingPages2020 from '@layouts/LandingPageExamples/BestLandingPages2020'
import { runQueries } from '@lib'

const BestLandingPages2020Page = (props) => <BestLandingPages2020 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2020'

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
            seoTitle: `Best Landing Pages 2020`,
            seoDescription: `What do the best landing pages in 2020 have in common? Find out what works, what doesn't, and what you can do better in your own conversion marketing.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-best-landing-pages-2020.jpg',
          },
        },
      ],
    },
  }
}

export default BestLandingPages2020Page
