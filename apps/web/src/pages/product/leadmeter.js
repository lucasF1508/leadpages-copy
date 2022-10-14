import React from 'react'
import Leadmeter from '@layouts/Product/Leadmeter'

const LeadmeterPage = (props) => <Leadmeter {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/leadmeter'

  const options = { hideBar: true }

  return {
    props: {
      slug,
      preview,
      options,
    },
  }
}

export default LeadmeterPage
