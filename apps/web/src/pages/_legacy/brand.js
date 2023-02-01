import React from 'react'
import Brand from '@layouts/Brand'
import { runQueries } from '@lib'

const BrandPage = (props) => <Brand {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/brand'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default BrandPage
