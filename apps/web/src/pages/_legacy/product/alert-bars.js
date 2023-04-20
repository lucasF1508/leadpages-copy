import React from 'react'
import AlertBars from '@layouts/Product/AlertBars'
import { runQueries } from '@lib'

const AlertBarsPage = (props) => <AlertBars {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/alert-bars'

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
            seoTitle: `Alert Bars | Leadpages | Get Online & Grow`,
            seoDescription: `Capture your audience’s attention & boost conversions with mobile-friendly alert bars! Add alert bars to any landing page, web page, or website.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-alert-bars.jpg',
          },
        },
      ],
    },
  }
}

export default AlertBarsPage
