import React from 'react'
import Kailei from '@layouts/Customers/Kailei'
import { runQueries } from '@lib'

const KaileiPage = (props) => <Kailei {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kailei'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default KaileiPage
