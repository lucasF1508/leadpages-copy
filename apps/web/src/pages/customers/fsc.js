import React from 'react'
import FSC from '@layouts/Customers/FSC'

const FSCPage = (props) => <FSC {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/fsc'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default FSCPage
