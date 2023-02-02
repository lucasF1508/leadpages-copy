import React from 'react'
import Sally from '@layouts/Customers/Sally'
import { runQueries } from '@lib'

const SallyPage = (props) => <Sally {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/sally'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default SallyPage
