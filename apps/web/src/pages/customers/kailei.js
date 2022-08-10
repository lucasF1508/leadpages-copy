import React from 'react'
import Kailei from '@layouts/Customers/Kailei'

const KaileiPage = (props) => <Kailei {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kailei'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default KaileiPage
