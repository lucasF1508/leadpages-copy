import React from 'react'
import BestLandingPages2018 from '@layouts/LandingPageExamples/BestLandingPages2018'

const BestLandingPages2018Page = (props) => <BestLandingPages2018 {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-page-examples/best-landing-pages-2018'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default BestLandingPages2018Page
