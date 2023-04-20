import React from 'react'
import LandingPagesGuide from '@layouts/LandingPagesGuide'
import { runQueries } from '@lib'

const LandingPagesGuidePage = (props) => <LandingPagesGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-pages-guide/'

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
            seoTitle: `Landing Pages: The Ultimate Guide 2021 | Leadpages`,
            seoDescription: `Ready to level-up your lead generation and sales funnels? Learn landing page best practices, optimization tactics, and more in this landing pages guide.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
            publishDate: '2021-03-30T00:00:00+0000',
            modifyDate: '2021-03-30T00:00:00+0000',
          },
        },
      ],
    },
  }
}

export default LandingPagesGuidePage
