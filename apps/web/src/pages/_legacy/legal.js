import React from 'react'
import Legal from '@layouts/Legal'
import { runQueries } from '@lib'

const LegalPage = (props) => <Legal {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/legal'

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
            seoTitle: `Terms and Conditions | Leadpages`,
            seoDescription: `The Leadpages terms and conditions are the do’s and don’ts of your account. Take a look to see if your business is a fit for our services.`,
          },
        },
      ],
    },
  }
}

export default LegalPage
