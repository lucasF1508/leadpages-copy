import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { runQuery } from '@lib'

export const perPage = 250

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`
  const { count } = await runQuery(`*[0]{"count":count(*[_type == 'post'])}`)

  const pages = [
    `${rootUrl}/sitemap/blog/categories.xml`,
    `${rootUrl}/sitemap/blog/authors.xml`,
  ]

  let pagination = 0
  for (let index = 0; index < count; index += perPage) {
    pages.push(`${rootUrl}/sitemap/blog/${pagination}`)
    pagination++
  }

  return getServerSideSitemapIndexLegacy(context, pages)
}

// Default export to prevent next.js errors
export default function BlogSitemapIndex() {}
