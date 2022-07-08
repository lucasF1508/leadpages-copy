import React from 'react'
// import { getDoc } from '@lib'
import HomePage from '@layouts/HomePage'

const IndexPage = (props) => <HomePage {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/'
  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default IndexPage
