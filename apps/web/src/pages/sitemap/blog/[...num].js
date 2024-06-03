import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib'
import findValuesForKey from '@lib/utils/findValuesForKey'
import { futurePublishedDateFilter } from '@lib/utils/filterForPublishedDate'
import { perPage } from './index.xml'

const { NEXT_PUBLIC_URL } = process.env
const { SANITY_STUDIO_API_PROJECT_ID } = process.env
const { SANITY_STUDIO_API_DATASET } = process.env

export const getServerSideProps = async (context) => {
  const { query: { num: [num] = [0] } = {} } = context
  const today = new Date().toLocaleDateString('en-CA')

  const slice = `${Number(num) * perPage}..${Number(num * perPage) + perPage}`

  const docs = await runQuery(
    `*[_type == "post" && ${futurePublishedDateFilter()}] | order(_updatedAt desc) [${slice}] {_updatedAt, ...}`
  )

  const entires = docs.map((doc) => {
    const images = findValuesForKey(doc, 'asset').reduce((acc, { _ref }) => {
      const [type, hash, dimensions, extension] = _ref.split('-')

      if (type !== 'image') return acc

      const url = [
        `https://cdn.sanity.io/images`,
        SANITY_STUDIO_API_PROJECT_ID,
        SANITY_STUDIO_API_DATASET,
        `${hash}-${dimensions}.${extension}`,
      ].join('/')

      return [
        ...acc,
        {
          loc: new URL(url),
        },
      ]
    }, [])

    return {
      loc: `${NEXT_PUBLIC_URL}${doc.path}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(doc._updatedAt).toISOString(),
      images: images.length ? images : undefined,
    }
  })

  return getServerSideSitemapLegacy(context, entires)
}

// Default export to prevent next.js errors
export default function BlogPostSitemapIndex() {}
