import React from 'react'
import Greg from '@layouts/Customers/Greg'
import { runQueries } from '@lib'

const GregPage = (props) => <Greg {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/greg'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default GregPage
