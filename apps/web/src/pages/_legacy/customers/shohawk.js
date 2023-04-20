import React from 'react'
import Shohawk from '@layouts/Customers/Shohawk'
import { runQueries } from '@lib'

const ShohawkPage = (props) => <Shohawk {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/shohawk'

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
            seoTitle: `ShoHawk | Leadpages Customer Website & Landing Page Builder`,
            seoDescription: `Michael and Chris use Leadpages to promote and sell their videos. Leadpages helps small businesses grow: websites, landing pages, and more!`,
          },
        },
      ],
    },
  }
}

export default ShohawkPage
