import React from 'react'
import Comparisons from '@layouts/Comparisons'

const ComparisonsPage = (props) => <Comparisons {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default ComparisonsPage
