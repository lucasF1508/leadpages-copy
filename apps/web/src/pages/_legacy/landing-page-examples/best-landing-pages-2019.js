import React from 'react'
import BestLandingPages2019 from '@layouts/LandingPageExamples/BestLandingPages2019'
import { runQueries } from '@lib'

const BestLandingPages2019Page = (props) => <BestLandingPages2019 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2019'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default BestLandingPages2019Page
