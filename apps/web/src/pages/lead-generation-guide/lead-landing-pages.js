import React from 'react'
import LeadLandingPages from '@layouts/LeadGenerationGuide/LeadLandingPages'

const LeadLandingPagesPage = (props) => <LeadLandingPages {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-landing-pages'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LeadLandingPagesPage
