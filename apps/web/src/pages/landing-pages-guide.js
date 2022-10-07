import React from 'react'
import LandingPagesGuide from '@layouts/LandingPagesGuide'

const LandingPagesGuidePage = (props) => <LandingPagesGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-pages-guide/'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default LandingPagesGuidePage
