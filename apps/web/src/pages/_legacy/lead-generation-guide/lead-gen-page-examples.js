import React from 'react'
import LeadGenPageExamples from '@layouts/LeadGenerationGuide/LeadGenPageExamples'
import { runQueries } from '@lib'

const LeadGenPageExamplesPage = (props) => <LeadGenPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-page-examples'

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
            seoTitle: `Best Lead Generation Landing Page Examples | Leadpages`,
            seoDescription: `Using lead generation landing pages is a good way to grow your email list. We analyzed the top landing page examples to share tactics for high conversion rates.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadGenPageExamplesPage
