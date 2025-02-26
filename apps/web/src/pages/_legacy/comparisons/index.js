import React from 'react'
import Comparisons from '@layouts/Comparisons'
import { runQueries } from '@lib/queries'

const ComparisonsPage = (props) => <Comparisons {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons'

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
            seoTitle:
              'How does your marketing platform compare with Leadpages?',
            seoDescription: `See how Leadpage's conversion marketing platform and website builder compare to other software options on the market today.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-comparisons.jpg',
          },
        },
      ],
    },
  }
}

export default ComparisonsPage
