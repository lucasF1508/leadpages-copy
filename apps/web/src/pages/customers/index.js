import React from 'react'
import Customers from '@layouts/Customers'

const CustomersPage = (props) => <Customers {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default CustomersPage
