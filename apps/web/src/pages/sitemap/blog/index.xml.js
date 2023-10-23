import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { runQuery } from '@lib'

export const perPage = 250

const { NEXT_PUBLIC_URL } = process.env

export const getServerSideProps = async (context) => {
  const { count } = await runQuery(`*[0]{"count":count(*[_type == 'post'])}`)

  const pages = []

  let pagination = 0
  for (let index = 0; index < count; index += perPage) {
    pages.push(`${NEXT_PUBLIC_URL}/sitemap/blog/${pagination}`)
    pagination++
  }

  return getServerSideSitemapIndexLegacy(context, pages)
}

// Default export to prevent next.js errors
export default function BlogSitemapIndex() {}
