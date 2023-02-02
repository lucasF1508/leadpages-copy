import React from 'react'
import ActiveCampaign from '@layouts/Integrations/ActiveCampaign'
import { runQueries } from '@lib'

const ActiveCampaignPage = (props) => <ActiveCampaign {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/active-campaign'

  const options = { headerBkgColor: '$grayAlt' }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default ActiveCampaignPage
