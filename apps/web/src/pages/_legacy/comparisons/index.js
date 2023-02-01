import React from 'react'
import Comparisons from '@layouts/Comparisons'
import { runQueries } from '@lib'

const ComparisonsPage = (props) => <Comparisons {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons'

  const options = { headerBkgColor: '$grayAlt' }

  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default ComparisonsPage
