import React from 'react'
import Shohawk from '@layouts/Customers/Shohawk'
import { runQueries } from '@lib'

const ShohawkPage = (props) => <Shohawk {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/shohawk'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default ShohawkPage
