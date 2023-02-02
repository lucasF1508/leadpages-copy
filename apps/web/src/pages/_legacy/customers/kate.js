import React from 'react'
import Kate from '@layouts/Customers/Kate'
import { runQueries } from '@lib'

const KatePage = (props) => <Kate {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kate'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default KatePage
