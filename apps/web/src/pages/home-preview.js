import React from 'react'
import { getDoc, runQueries } from '@lib'
import HomePage from '@layouts/HomePage'
import { shapeData } from '.'

const IndexPage = (props) => <HomePage {...props} />

export const exporter = (props) => shapeData(props)

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
      params: { slug: 'home-hero-updates' },
    })
  )

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
    },
  }
}

export default IndexPage
export { shapeData }
