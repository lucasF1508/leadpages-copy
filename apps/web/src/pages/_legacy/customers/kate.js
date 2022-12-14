import React from 'react'
import Kate from '@layouts/Customers/Kate'

const KatePage = (props) => <Kate {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/kate'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default KatePage
