import React from 'react'
import LeadLandingPages from '@layouts/LeadGenerationGuide/LeadLandingPages'
import { runQueries } from '@lib'

const LeadLandingPagesPage = (props) => <LeadLandingPages {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-landing-pages'

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

export default LeadLandingPagesPage
