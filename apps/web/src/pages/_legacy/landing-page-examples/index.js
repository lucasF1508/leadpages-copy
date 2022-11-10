import React from 'react'
import LandingPageExamples from '@layouts/LandingPageExamples'

const LandingPageExamplesPage = (props) => <LandingPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LandingPageExamplesPage
