import React from 'react'
import Sally from '@layouts/Customers/Sally'

const SallyPage = (props) => <Sally {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers/sally'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default SallyPage
