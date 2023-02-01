import React from 'react'
import LeadGenTools from '@layouts/LeadGenerationGuide/LeadGenTools'
import { runQueries } from '@lib'

const LeadGenToolsPage = (props) => <LeadGenTools {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-tools'

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

export default LeadGenToolsPage
