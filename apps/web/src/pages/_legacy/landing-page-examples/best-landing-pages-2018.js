import React from 'react'
import BestLandingPages2018 from '@layouts/LandingPageExamples/BestLandingPages2018'
import { runQueries } from '@lib'

const BestLandingPages2018Page = (props) => <BestLandingPages2018 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2018'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default BestLandingPages2018Page
