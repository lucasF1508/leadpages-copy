import React from 'react'
import { shapeData } from '@utils/shapeTemplateData'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import TemplateComponent from '@components/Template'

const Template = (props) => <TemplateComponent {...props} />

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { slug } = params

  const { data, queries, global } = await runQueries(
    [
    query(
      `*[_type == "template" && slug.current == $slug][0] {
        ...,
        "slug": slug.current,
        "relatedTemplates": *[_type == "template" && kind == 'LeadpageTemplate' && slug.current != $slug && (categories[].value)[@ in ^.categories[].value] != null]|order(count((categories[].value)[@ in ^.^.categories[].value]) desc)[0..7]
      }`,
      {
        params: {
          slug,
          types,
        },
        preview,
      }
    ),
    query(`*[_type == "templateSettings" && _id == "templateSettings"][0]{
        ...,
        cta->
      }`, {
      preview
    }),
    query(`*[_type == "testimonial" && "templates" in category[]->slug.current] | order(_updatedAt desc) [0..2]`, {preview})
    ],
  )

  return {
    props: {
      preview,
      data: await shapeData(data, preview),
      global,
      queries,
    },
  }
}

const types = ['template']

export async function getStaticPaths() {
  const paths = await getStaticPathsParams({
    filter: 'kind == "LeadpageTemplate"',
    types,
  })

  return {
    fallback: false,
    paths,
  }
}

export default Template
