import React from 'react'
import Checkouts from '@layouts/Product/Checkouts'

const CheckoutsPage = (props) => <Checkouts {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/checkouts'

  const options = { hideBar: true }

  return {
    props: {
      slug,
      preview,
      options,
    },
  }
}

export default CheckoutsPage
