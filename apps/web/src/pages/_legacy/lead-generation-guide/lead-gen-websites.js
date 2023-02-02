import React from 'react'
import LeadGenWebsites from '@layouts/LeadGenerationGuide/LeadGenWebsites'
import { runQueries } from '@lib'

const LeadGenWebsitesPage = (props) => <LeadGenWebsites {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-websites'

  const options = { underlaidMenu: true }
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

export default LeadGenWebsitesPage
