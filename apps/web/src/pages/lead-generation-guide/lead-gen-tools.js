import React from 'react'
import LeadGenTools from '@layouts/LeadGenerationGuide/LeadGenTools'

const LeadGenToolsPage = (props) => <LeadGenTools {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-tools'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadGenToolsPage
