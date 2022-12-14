import React from 'react'
import LeadGenerationGuide from '@layouts/LeadGenerationGuide'

const LeadGenerationGuidePage = (props) => <LeadGenerationGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default LeadGenerationGuidePage
