import React from 'react'
import MarketingResources from '@layouts/MarketingResources'

const MarketingResourcesPage = (props) => <MarketingResources {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/marketing-resources'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default MarketingResourcesPage
