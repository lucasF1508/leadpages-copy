import React from 'react'
import LeadGenIdeas from '@layouts/LeadGenerationGuide/LeadGenIdeas'

const LeadGenIdeasPage = (props) => <LeadGenIdeas {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-ideas'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default LeadGenIdeasPage
