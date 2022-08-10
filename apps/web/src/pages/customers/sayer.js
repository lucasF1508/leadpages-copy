import React from 'react'
import Sayer from '@layouts/Customers/Sayer'

const SayerPage = (props) => <Sayer {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/sayer'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default SayerPage
