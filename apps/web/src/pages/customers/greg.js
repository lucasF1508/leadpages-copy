import React from 'react'
import Greg from '@layouts/Customers/Greg'

const GregPage = (props) => <Greg {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/greg'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default GregPage
