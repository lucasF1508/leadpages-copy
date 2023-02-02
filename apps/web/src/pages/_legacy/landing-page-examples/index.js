import React from 'react'
import LandingPageExamples from '@layouts/LandingPageExamples'
import { runQueries } from '@lib'

const LandingPageExamplesPage = (props) => <LandingPageExamples {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LandingPageExamplesPage
