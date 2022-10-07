import React from 'react'
import Zapier from '@layouts/Zapier'

const ZapierPage = (props) => <Zapier {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/zapier'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default ZapierPage
