import React from 'react'
import Leadmeter from '@layouts/Product/Leadmeter'
import { runQueries } from '@lib'

const LeadmeterPage = (props) => <Leadmeter {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/leadmeter'

  const options = { hideBar: true }
  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      options,
      global,
    },
  }
}

export default LeadmeterPage
