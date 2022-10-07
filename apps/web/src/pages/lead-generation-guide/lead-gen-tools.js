import React from 'react'
import LeadGenTools from '@layouts/LeadGenerationGuide/LeadGenTools'

const LeadGenToolsPage = (props) => <LeadGenTools {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-tools'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default LeadGenToolsPage
