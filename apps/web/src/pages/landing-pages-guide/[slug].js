import React from 'react'
import Page, { PageSidebar } from '@layouts/Page'
import { getStaticPathsParams } from '@lib/queries'
import { getGenericStaticProps } from '@lib/utils/getGenericStaticProps'

const DynamicPage = ({ hasSidebar, ...props }) =>
  hasSidebar ? <PageSidebar {...props} /> : <Page {...props} />

export const exporter = (props) => shapeData(props)

export const getStaticProps = async (context) => {
  const { preview = false, params } = context
  const {slug} = params || {}
  return getGenericStaticProps(`/landing-pages-guide/${slug}`, preview)
}

export const getStaticPaths = async () => {
  const paths = await getStaticPathsParams({type: 'page', filter: 'path match "/landing-pages-guide/*"'})
  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage