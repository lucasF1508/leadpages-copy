import React from 'react'
import { getDoc, runQueries } from '@lib'
import HomePage from '@layouts/HomePage'

const IndexPage = (props) => <HomePage {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context

  const { data, queries, global } = await runQueries(
    getDoc('pageHome', {
      preview,
    })
  )

  return {
    props: {
      data,
      queries,
      global,
      preview,
    },
  }
}

export default IndexPage
