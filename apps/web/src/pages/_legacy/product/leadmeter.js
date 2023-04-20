import React from 'react'
import Leadmeter from '@layouts/Product/Leadmeter'
import { runQueries } from '@lib'

const LeadmeterPage = (props) => <Leadmeter {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/leadmeter'

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
            seoTitle: `Leadmeter | Leadpages | Get Online & Grow`,
            seoDescription: `Get data-powered, real-time conversion tips at your fingertips with Leadpages Leadmeter—helping you guess less and grow more.`,
            seoImage: 'https://static.leadpages.com/images/og/og-leadmeter.jpg',
          },
        },
      ],
    },
  }
}

export default LeadmeterPage
