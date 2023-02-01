import React from 'react'
import Checkouts from '@layouts/Product/Checkouts'
import { runQueries } from '@lib'

const CheckoutsPage = (props) => <Checkouts {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/checkouts'

  const options = { hideBar: true }
  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      options,
      global,
    },
  }
}

export default CheckoutsPage
