import React from 'react'
import LeadLandingPages from '@layouts/LeadGenerationGuide/LeadLandingPages'
import { runQueries } from '@lib'

const LeadLandingPagesPage = (props) => <LeadLandingPages {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-landing-pages'

  const options = { underlaidMenu: true }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Lead Generation Landing Page | Lead Generation Guide`,
            seoDescription: `Learn the essential elements of a high-converting landing page and grow your email list in a fraction of the time!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadLandingPagesPage
