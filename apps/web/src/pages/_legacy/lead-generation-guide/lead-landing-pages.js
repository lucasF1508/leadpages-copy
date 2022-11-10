import React from 'react'
import LeadLandingPages from '@layouts/LeadGenerationGuide/LeadLandingPages'

const LeadLandingPagesPage = (props) => <LeadLandingPages {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-landing-pages'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default LeadLandingPagesPage
