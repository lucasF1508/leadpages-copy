import React from 'react'
import LeadGenStrategies from '@layouts/LeadGenerationGuide/LeadGenStrategies'

const LeadGenStrategiesPage = (props) => <LeadGenStrategies {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-strategies'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadGenStrategiesPage
