import React from 'react'
import BestLandingPages2020 from '@layouts/LandingPageExamples/BestLandingPages2020'

const BestLandingPages2020Page = (props) => <BestLandingPages2020 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2020'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default BestLandingPages2020Page
