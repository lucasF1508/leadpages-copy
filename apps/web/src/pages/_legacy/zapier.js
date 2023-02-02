import React from 'react'
import Zapier from '@layouts/Zapier'
import { runQueries } from '@lib'

const ZapierPage = (props) => <Zapier {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/zapier'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default ZapierPage
