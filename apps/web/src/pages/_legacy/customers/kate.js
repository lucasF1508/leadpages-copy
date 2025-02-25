import React from 'react'
import Kate from '@layouts/Customers/Kate'
import { runQueries } from '@lib/queries'

const KatePage = (props) => <Kate {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kate'

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
            seoTitle: `Kate | Leadpages Customer | Website & Landing Page Builder`,
            seoDescription: `Kate uses Leadpages to pinpoint her audience and sell her marketing services. Leadpages helps small businesses grow: websites, landing pages, and more!`,
          },
        },
      ],
    },
  }
}

export default KatePage
