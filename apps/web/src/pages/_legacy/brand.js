import React from 'react'
import Brand from '@layouts/Brand'

const BrandPage = (props) => <Brand {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/brand'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default BrandPage
