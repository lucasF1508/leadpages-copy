import React from 'react'
import InfusionSoft from '@layouts/Integrations/InfusionSoft'

const InfusionSoftPage = (props) => <InfusionSoft {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/infusion-soft'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default InfusionSoftPage
