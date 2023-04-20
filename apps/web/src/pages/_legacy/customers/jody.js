import React from 'react'
import Jody from '@layouts/Customers/Jody'
import { runQueries } from '@lib'

const JodyPage = (props) => <Jody {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/jody'

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
            seoTitle: `Jody | Leadpages Customer | Website & Landing Page Builder`,
            seoDescription: `Jody uses Leadpages to sign up stressed professionals for her yoga sessions. Leadpages helps small businesses grow: websites, landing pages, and more!`,
          },
        },
      ],
    },
  }
}

export default JodyPage
