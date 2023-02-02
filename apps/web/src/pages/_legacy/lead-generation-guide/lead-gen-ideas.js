import React from 'react'
import LeadGenIdeas from '@layouts/LeadGenerationGuide/LeadGenIdeas'
import { runQueries } from '@lib'

const LeadGenIdeasPage = (props) => <LeadGenIdeas {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-ideas'

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

export default LeadGenIdeasPage
