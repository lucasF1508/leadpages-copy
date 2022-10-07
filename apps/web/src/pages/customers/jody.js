import React from 'react'
import Jody from '@layouts/Customers/Jody'

const JodyPage = (props) => <Jody {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/jody'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default JodyPage
