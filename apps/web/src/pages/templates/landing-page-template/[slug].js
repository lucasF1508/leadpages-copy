import React from 'react'
import { runQueries, getDocSlugs, getDoc, getAllDocs } from '@lib'
import TemplateComponent from '@components/Template'
import { shapeData } from '@utils/shapeTemplateData'

const Template = (props) => <TemplateComponent {...props} />

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { slug } = params

  const { data, queries, global } = await runQueries(
    [
      getDoc('template', {
        preview,
        filters: `slug.current == '${slug}'`,
        projections: `"slug": slug.current, "relatedTemplates": *[_type == "template" && kind == 'LeadpageTemplate' && slug.current != "${slug}" && (categories[].value)[@ in ^.categories[].value] != null]|order(count((categories[].value)[@ in ^.^.categories[].value]) desc)[0..7]`,
      }),
      getDoc('templateSettings', {
        preview,
        filters: `_id == "templateSettings"`,
      }),
      getAllDocs('testimonial', {
        preview,
        filters:
          '_type == "testimonial" && "templates" in category[]->slug.current',
        hasPagination: false,
        slice: '0..2',
        order: 'order(_updatedAt desc)',
      }),
    ],
    true,
    preview
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

export async function getStaticPaths() {
  const docPaths = await getDocSlugs('template', {
    filters: ['kind == "LeadpageTemplate"'],
  })

  const paths = docPaths.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Template
