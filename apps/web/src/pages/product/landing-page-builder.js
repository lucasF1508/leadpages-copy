import React from 'react'
import LandingPageBuilder from '@layouts/Product/LandingPageBuilder'

const LandingPageBuilderPage = (props) => <LandingPageBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/landing-page-builder'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LandingPageBuilderPage
