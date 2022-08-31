import React from 'react'
import LeadGenPageExamples from '@layouts/LeadGenerationGuide/LeadGenPageExamples'

const LeadGenPageExamplesPage = (props) => <LeadGenPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-page-examples'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadGenPageExamplesPage
