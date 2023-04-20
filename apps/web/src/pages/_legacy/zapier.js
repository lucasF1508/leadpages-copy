import React from 'react'
import Zapier from '@layouts/Zapier'
import { runQueries } from '@lib'

const ZapierPage = (props) => <Zapier {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/zapier'

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
            seoTitle: `Leadpages Zapier Integration: Connect Your Marketing Tools`,
            seoDescription: `Generate leads and increase revenue using the industry-leading landing page creator with accompanying suite of lead generation and opt-in tools.`,
          },
        },
      ],
    },
  }
}

export default ZapierPage
