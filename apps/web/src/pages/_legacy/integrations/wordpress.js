import React from 'react'
import Wordpress from '@layouts/Integrations/Wordpress'
import { runQueries } from '@lib'

const WordpressPage = (props) => <Wordpress {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/wordpress'

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
            seoTitle: `Connect & Publish Leadpages to WordPress | Get Online & Grow`,
            seoDescription: `Easily publish your landing pages, pop-ups, and alert bars to your WordPress website. Use Leadpages WordPress plugin to publish in just a few clicks.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+WordPress.jpg',
          },
        },
      ],
    },
  }
}

export default WordpressPage
