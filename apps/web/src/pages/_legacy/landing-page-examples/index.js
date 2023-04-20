import React from 'react'
import LandingPageExamples from '@layouts/LandingPageExamples'
import { runQueries } from '@lib'

const LandingPageExamplesPage = (props) => <LandingPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples'

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
            seoTitle: `High-Converting Landing Page Examples to Inspire You`,
            seoDescription: `Need inspiration? Learn from these top-performing landing page examples for any industry and use case.`,
            seoImage:
              'https:// static.leadpages.com/images/og/og-best-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LandingPageExamplesPage
