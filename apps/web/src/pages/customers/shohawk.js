import React from 'react'
import Shohawk from '@layouts/Customers/Shohawk'

const ShohawkPage = (props) => <Shohawk {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/shohawk'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default ShohawkPage
