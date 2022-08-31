import React from 'react'
import LeadGenWebsites from '@layouts/LeadGenerationGuide/LeadGenWebsites'

const LeadGenWebsitesPage = (props) => <LeadGenWebsites {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-websites'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadGenWebsitesPage
