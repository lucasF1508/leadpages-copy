import React from 'react'
import LandingPageBuilder from '@layouts/Product/LandingPageBuilder'
import { runQueries } from '@lib'

const LandingPageBuilderPage = (props) => <LandingPageBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/landing-page-builder'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LandingPageBuilderPage
