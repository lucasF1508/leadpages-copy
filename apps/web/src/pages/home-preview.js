import React from 'react'
import { getDoc, runQueries } from '@lib'
import HomePage from '@layouts/HomePage'

const IndexPage = (props) => <HomePage {...props} />

export async function getServerSideProps(context) {
  const { preview = false, req: { headers } = {} } = context

  // TODO
  // Get slug from `headers` or `?` query params
  //
  // const slug = ...

  if (!preview) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    }
  }

  const { data, queries, global } = await runQueries(
    getDoc('pageHome', {
      preview,
      params: { slug: 'home-working' },
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
