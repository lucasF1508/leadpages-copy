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
    },
  }
}

export default PrivacyPolicyPage
