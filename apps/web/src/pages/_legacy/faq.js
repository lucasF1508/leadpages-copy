import React from 'react'
import FAQ from '@layouts/FAQ'
import { getAllDocs, runQueries } from '@lib'

const FAQPage = (props) => <FAQ {...props} />

export async function getStaticProps(context) {
  const slug = '/faq'

  const options = { underlaidMenu: true }

  const { preview = false } = context
  const docType = 'faq'

  const { data, global } = await runQueries([
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(title)',
      preview,
      hasPagination: false,
      slice: 'none',
    }),
  ])

  const [{ docs }] = data

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
          docs,
        },
      ],
    },
  }
}

export default FAQPage
