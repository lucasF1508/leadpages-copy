import React from 'react'
import GoogleAnalytics from '@layouts/Integrations/GoogleAnalytics'
import { runQueries } from '@lib'

const GoogleAnalyticsPage = (props) => <GoogleAnalytics {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/google-analytics'

  const options = { headerBkgColor: '$grayAlt' }
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
            seoTitle: `Use Leadpages With Google Analytics | Get Online & Grow`,
            seoDescription: `Easily connect Leadpages with Google Analytics to access even more data on your pages and forms’ performance. Absolutely no coding required!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+GoogleAnalytics.jpg',
          },
        },
      ],
    },
  }
}

export default GoogleAnalyticsPage
