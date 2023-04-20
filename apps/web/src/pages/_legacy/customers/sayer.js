import React from 'react'
import Sayer from '@layouts/Customers/Sayer'
import { runQueries } from '@lib'

const SayerPage = (props) => <Sayer {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/sayer'

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
            seoTitle: `Sayer | Leadpages Customer | Website & Landing Page Builder`,
            seoDescription: `Sayer Payne uses Leadpages to connect customers with retailers. Leadpages helps small businesses grow: websites, landing pages, and more!`,
          },
        },
      ],
    },
  }
}

export default SayerPage
