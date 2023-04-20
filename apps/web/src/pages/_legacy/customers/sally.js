import React from 'react'
import Sally from '@layouts/Customers/Sally'
import { runQueries } from '@lib'

const SallyPage = (props) => <Sally {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/sally'

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
            seoTitle: `Sally | Leadpages Customer | Website & Landing Page Builder`,
            seoDescription: `Public speaking coach Sally Zimney uses Leadpages to grow her audience. See how Leadpages helps small businesses grow: websites, landing pages, and more!`,
          },
        },
      ],
    },
  }
}

export default SallyPage
