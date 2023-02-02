import React from 'react'
import BestLandingPages2020 from '@layouts/LandingPageExamples/BestLandingPages2020'
import { runQueries } from '@lib'

const BestLandingPages2020Page = (props) => <BestLandingPages2020 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2020'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default BestLandingPages2020Page
