import React from 'react'
import { ArchiveSitemap } from '@layouts/Archive'
import { futurePublishedDateFilter } from '@lib/utils/filterForPublishedDate'
import { query, runQueries } from '@lib/queries'
import { seoQuery } from '@lib/queries/globalQueries'

const UserSitemapPage = (props) => <ArchiveSitemap {...props} />

export const shapeData = ([data, docs, blogData]) => {
  const allPosts = docs.reduce((acc, { category, ...post }) => {
    const { slug, title, url } = category
    const posts = acc[slug]?.posts || []
    acc[slug] = { title, url, posts: [...posts, post] }
    return acc
  }, {})

  return [
    {
      settings: data,
      docs: allPosts,
      seo: blogData?.seo,
    },
  ]
}

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false } = context

  const { data, global, queries } = await runQueries([
    query(`*[_type == 'postSettings'][0]`, {preview}),
    query(`*[_type == 'post' && ${futurePublishedDateFilter()}] {
        "url": path,
        title,
        "category": {
          ...(primaryCategory-> {
            "slug": slug.current,
            "title": title,
            "url": path,
          })
        }
      }`,
      {preview}
    ),
    query(`*[_type == 'pageArchive' && archiveOf == "${docType}"][0] {..., ${seoQuery}}`, {preview}),
  ])

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
    },
  }
}

export default UserSitemapPage

