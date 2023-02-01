import React from 'react'
import LandingPagesGuide from '@layouts/LandingPagesGuide'
import { runQueries } from '@lib'

const LandingPagesGuidePage = (props) => <LandingPagesGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-pages-guide/'

  const options = { underlaidMenu: true }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default LandingPagesGuidePage
