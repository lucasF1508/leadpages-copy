import React from 'react'
import FAQ from '../../legacy/layouts/FAQ'
import { query, runQueries } from '@lib/queries'

const FAQPage = (props) => <FAQ {...props} />

export async function getStaticProps(context) {
  const slug = '/faq'

  const options = { underlaidMenu: true }

  const { preview = false } = context

  const { data, global } = await runQueries([
    query(`*[_type == "faq"] | order(lower(title) asc) {..., category[]->}`, {preview})
  ])

  const [docs] = data

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
