import React from 'react'
import HomePage from '@layouts/HomePage'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import { shapeData } from '..'

const IndexPage = (props) => <HomePage {...props} />

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { variant } = params

  const [slug] = variant

  const { data, queries, global } = await runQueries(
    getDoc('pageHome', {
      preview,
      params: { slug },
    })
  )

  return {
    props: {
      data: shapeData(data, true),
      queries,
      global,
      preview,
    },
  }
}

export async function getStaticPaths() {
  const docPaths = await getDocSlugs(['pageHome'])
  const excludedPaths = ['/home']

  const paths = docPaths.reduce((acc, { slug, path }) => {
    if (excludedPaths.includes(path)) return acc

    return [
      ...acc,
      {
        params: {
          variant: path?.split('/').filter(Boolean) || [slug],
        },
      },
    ]
  }, [])

  return {
    paths,
    fallback: false,
  }
}

export default IndexPage
