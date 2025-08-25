import React from 'react'
import Page, { PageSidebar } from '@layouts/Page'
import { getGenericStaticProps } from '@lib/utils/getGenericStaticProps'

const DynamicPage = ({ hasSidebar, ...props }) =>
  hasSidebar ? <PageSidebar {...props} /> : <Page {...props} />

export const exporter = (props) => shapeData(props)

export const getStaticProps = async (context) => {
  const { preview = false } = context
  return getGenericStaticProps('/landing-pages-guide', preview)
}

export default DynamicPage