import React from 'react'
import Jody from '@layouts/Customers/Jody'

const JodyPage = (props) => <Jody {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/jody'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default JodyPage
