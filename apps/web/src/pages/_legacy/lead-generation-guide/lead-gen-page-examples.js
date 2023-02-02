import React from 'react'
import LeadGenPageExamples from '@layouts/LeadGenerationGuide/LeadGenPageExamples'
import { runQueries } from '@lib'

const LeadGenPageExamplesPage = (props) => <LeadGenPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-page-examples'

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

export default LeadGenPageExamplesPage
