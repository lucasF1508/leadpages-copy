import React from 'react'
import MarketingResources from '@layouts/MarketingResources'

const MarketingResourcesPage = (props) => <MarketingResources {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/marketing-resources'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default MarketingResourcesPage
