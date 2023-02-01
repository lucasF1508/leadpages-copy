import React from 'react'
import Zapier from '@layouts/Integrations/Zapier'
import { runQueries } from '@lib'

const ZapierPage = (props) => <Zapier {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/zapier'

  const options = { headerBkgColor: '$grayAlt' }
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

export default ZapierPage
