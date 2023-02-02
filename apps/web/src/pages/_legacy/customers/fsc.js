import React from 'react'
import FSC from '@layouts/Customers/FSC'
import { runQueries } from '@lib'

const FSCPage = (props) => <FSC {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/fsc'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default FSCPage
