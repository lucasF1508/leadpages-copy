import React from 'react'
import { PrivacyPolicy } from '@layouts/Legal'

const PrivacyPolicyPage = (props) => <PrivacyPolicy {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/legal'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default PrivacyPolicyPage
