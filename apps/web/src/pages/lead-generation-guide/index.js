import React from 'react'
import LeadGenerationGuide from '@layouts/LeadGenerationGuide'

const LeadGenerationGuidePage = (props) => <LeadGenerationGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadGenerationGuidePage
