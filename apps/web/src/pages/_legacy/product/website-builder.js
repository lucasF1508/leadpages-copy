import React from 'react'
import WebsiteBuilder from '@layouts/Product/WebsiteBuilder'
import { runQueries } from '@lib'

const WebsiteBuilderPage = (props) => <WebsiteBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/website-builder'

  const options = { hideBar: true }
  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      options,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Leadpages Website Builder | Create a Website With Ease`,
            seoDescription: `Build high-converting websites in minutes⁠—no coding required. Choose from a collection of templates that keep your online presence professional across devices.`,
            seoImage: 'https://static.leadpages.com/images/og/og-sites.jpg',
          },
        },
      ],
    },
  }
}

export default WebsiteBuilderPage
