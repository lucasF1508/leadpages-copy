import React from 'react'
import FAQ from '@layouts/FAQ'
import { runQueries } from '@lib'

const FAQPage = (props) => <FAQ {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/faq'

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
            seoTitle: `Get Answers to All Your Questions About Leadpages`,
            seoDescription: `Browse all of Leadpages frequently asked questions and get answers to and insight about landing pages, free trials, integrations, billing, and more.`,
          },
        },
      ],
    },
  }
}

export default FAQPage
