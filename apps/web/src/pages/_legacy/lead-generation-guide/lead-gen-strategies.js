import React from 'react'
import LeadGenStrategies from '@layouts/LeadGenerationGuide/LeadGenStrategies'
import { runQueries } from '@lib'

const LeadGenStrategiesPage = (props) => <LeadGenStrategies {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-strategies'

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

export default LeadGenStrategiesPage
