import React from 'react'
import LandingPageBuilder from '@layouts/Product/LandingPageBuilder'

const LandingPageBuilderPage = (props) => <LandingPageBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/landing-page-builder'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LandingPageBuilderPage
