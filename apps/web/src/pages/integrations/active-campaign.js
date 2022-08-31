import React from 'react'
import ActiveCampaign from '@layouts/Integrations/ActiveCampaign'

const ActiveCampaignPage = (props) => <ActiveCampaign {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/active-campaign'

  const data = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ActiveCampaignPage
