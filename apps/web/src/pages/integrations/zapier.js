import React from 'react'
import Zapier from '@layouts/Integrations/Zapier'

const ZapierPage = (props) => <Zapier {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/zapier'

  const data = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ZapierPage
