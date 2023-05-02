import React from 'react'
import { getDoc, runQueries, runQuery } from '@lib'
import { ArchiveSitemap } from '@layouts/Archive'

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
  const sitemapPostQuery = `*[_type == 'post'] {
    "url": path,
    title,
    "category": {
      ...(primaryCategory-> {
        "slug": slug.current,
        "title": title,
        "url": path,
      })
    }
  }`

  const { data, global, queries } = await runQueries([
    getDoc('postSettings', {}),
    {
      data: await runQuery(sitemapPostQuery),
      query: sitemapPostQuery,
    },
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
      preview,
    }),
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
