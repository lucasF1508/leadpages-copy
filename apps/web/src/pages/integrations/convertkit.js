import React from 'react'
import ConvertKit from '@layouts/Integrations/ConvertKit'

const ConvertKitPage = (props) => <ConvertKit {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/convertkit'

  const data = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ConvertKitPage
