import React from 'react'
import StructuredData from '@gearbox-built/sanity-structured-data/component'
import { shapeArticle } from './shapers/shapeArticle'
import { shapeProduct } from './shapers/shapeProduct'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET

const SchemaMarkup = ({ structuredData, _type: pageType, pageData }) => {
  const {templateData, reviewsData} = pageData || {}
  const articles = structuredData
    .map((item, index) => ({ item, index })) // Create a map of items with their indices
    .filter(({item: {_type}}) =>  _type === "articleDataType");

  articles.forEach(article => {
    const mapData = shapeArticle({articleStructuredData: article.item, page: pageData});
    structuredData[article.index] = mapData;
  });

  if (!articles.length && pageType === 'post') {
    const shaper = shapeArticle({page: pageData});
    structuredData.push(shaper)
  }

  if (templateData) {
    const product = shapeProduct({template: templateData, reviews: reviewsData})
    structuredData.push(product)
  }

  return (
    <StructuredData
      data={structuredData}
      dataset={dataset}
      projectId={projectId}
    />
  )
}

export default SchemaMarkup
