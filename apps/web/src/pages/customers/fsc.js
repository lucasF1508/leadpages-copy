import React from 'react'
import FSC from '@layouts/Customers/FSC'

const FSCPage = (props) => <FSC {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/fsc'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default FSCPage
