import React from 'react'
import ActiveCampaign from '@layouts/Integrations/ActiveCampaign'

const ActiveCampaignPage = (props) => <ActiveCampaign {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/active-campaign'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default ActiveCampaignPage
