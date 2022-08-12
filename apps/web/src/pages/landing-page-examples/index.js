import React from 'react'
import LandingPageExamples from '@layouts/LandingPageExamples'

const LandingPageExamplesPage = (props) => <LandingPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LandingPageExamplesPage
