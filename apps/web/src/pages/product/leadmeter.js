import React from 'react'
import Leadmeter from '@layouts/Product/Leadmeter'

const LeadmeterPage = (props) => <Leadmeter {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/leadmeter'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadmeterPage
