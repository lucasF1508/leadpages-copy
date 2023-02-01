import React from 'react'
import LeadGenerationGuide from '@layouts/LeadGenerationGuide'
import { runQueries } from '@lib'

const LeadGenerationGuidePage = (props) => <LeadGenerationGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide'

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

export default LeadGenerationGuidePage
