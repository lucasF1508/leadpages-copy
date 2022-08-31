import React from 'react'
import LandingPagesGuide from '@layouts/LandingPagesGuide'

const LandingPagesGuidePage = (props) => <LandingPagesGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/landing-pages-guide/'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default LandingPagesGuidePage
