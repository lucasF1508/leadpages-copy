import React from 'react'
import BestLandingPages2018 from '@layouts/LandingPageExamples/BestLandingPages2018'
import { runQueries } from '@lib/queries'

const BestLandingPages2018Page = (props) => <BestLandingPages2018 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2018'

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
            seoTitle: `Best Landing Pages 2018`,
            seoDescription: `Explore what the top-performing, best landing pages had in common in 2018 — and what timeless strategies you can repurpose today.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-best-landing-pages-2018.jpg',
          },
        },
      ],
    },
  }
}

export default BestLandingPages2018Page
