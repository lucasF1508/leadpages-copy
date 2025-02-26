import React from 'react'
import FSC from '@layouts/Customers/FSC'
import { runQueries } from '@lib/queries'

const FSCPage = (props) => <FSC {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/fsc'

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
            seoTitle: `FSC | Leadpages Customer | Website & Landing Page Builder`,
            seoDescription: `The Forest Stewardship Council uses Leadpages to move audiences to take meaningful action. See how Leadpages helps small businesses grow!`,
          },
        },
      ],
    },
  }
}

export default FSCPage
