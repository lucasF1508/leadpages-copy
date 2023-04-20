import React from 'react'
import Kailei from '@layouts/Customers/Kailei'
import { runQueries } from '@lib'

const KaileiPage = (props) => <Kailei {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kailei'

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
            seoTitle: `Kailei | Leadpages Customer | Website & Landing Page Builder`,
            seoDescription: `Kailei uses Leadpages to book clients and sell her consulting services. Leadpages helps small businesses grow: websites, landing pages, and more!`,
          },
        },
      ],
    },
  }
}

export default KaileiPage
