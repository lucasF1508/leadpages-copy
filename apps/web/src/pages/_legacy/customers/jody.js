import React from 'react'
import Jody from '@layouts/Customers/Jody'
import { runQueries } from '@lib'

const JodyPage = (props) => <Jody {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/jody'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default JodyPage
