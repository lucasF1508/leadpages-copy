import React from 'react'
import { ArchiveSingle } from '@layouts/Archive'
import Head from 'next/head'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import { categoryPostCountQuery } from '@lib/queries/components'
import { contentQuery } from '@lib/queries/components'
import { seoQuery } from '@lib/queries/globalQueries'

const ArchiveSinglePage = (props) => {
  const { __gtm_should_inject } = props
  return (
    <>
      {__gtm_should_inject && (
        <Head>
          {/* GTM as high in <head> as possible, conditional by slug */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
 (function(w,d,s,l,i){
   w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
   var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';                                                                      
   j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
   f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-5QF22W');
               `,
            }}
            id="gtm-head"
          />
        </Head>
      )}
      <ArchiveSingle {...props} />
    </>
  )
}

export const shapeData = ([data, categories]) => [
  {
    ...data,
    categories,
  },
]

export const exporter = (props) => shapeData(props)

const types = ['post']

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const { slug } = params
  const gtmSlugs = new Set([
    'lead-enrichment',
    'on-the-record-episode-3',
    'best-google-fonts',
    'clients-vs-customers',
    'average-cost-of-website-design-for-small-business',
    'ebook-landing-page-examples',
  ])

  const { data, queries, global } = await runQueries([
    query(
      `*[_type in $types && slug.current == $slug] | order(_updatedAt desc) [0]{
            ...,
            ${contentQuery},
            relatedArticles[]->,
            publisher->,
            primaryCategory-> {
              ...,
              "url": path
            },
            secondaryCategories[]->, 
            "settings": *[_type == 'postSettings'][0] {
              ...,
              cta->,
              trendingArticles[]->
            },
            ${seoQuery}
          }`,
      {
        params: {
          slug,
          types,
        },
        preview,
      }
    ),
    query(
      `*[_type == "categoryPost"] | order(lower(title) asc) {
          ...,
          ${categoryPostCountQuery}
        }`,
      {
        preview,
      }
    ),
  ])

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
      __gtm_should_inject: gtmSlugs.has(slug),
    },
  }
}

export async function getStaticPaths() {
  const paths = await getStaticPathsParams({
    filter: 'isExternal != true && redirectToLegacy != true',
    types,
  })

  return {
    paths,
    fallback: false,
  }
}

export default ArchiveSinglePage

