import React from 'react'
import { PrivacyPolicy } from '@layouts/Legal'
import { runQueries } from '@lib'

const PrivacyPolicyPage = (props) => <PrivacyPolicy {...props} />

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
            seoTitle: `Learn About Leadpages' Privacy Policy`,
            seoDescription: `We value the privacy of every customer and the trust they instill in us. Dig into the Leadpages Privacy Policy and see how we're keeping data safe.`,
          },
        },
      ],
    },
  }
}

export default PrivacyPolicyPage
