import React from 'react'
import Kate from '@layouts/Customers/Kate'

const KatePage = (props) => <Kate {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kate'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default KatePage
