import React from 'react'
import Sayer from '@layouts/Customers/Sayer'
import { runQueries } from '@lib'

const SayerPage = (props) => <Sayer {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/sayer'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default SayerPage
