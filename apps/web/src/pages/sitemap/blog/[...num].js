import { getServerSideSitemapLegacy } from 'next-sitemap'
import { runQuery } from '@lib/queries'
import { futurePublishedDateFilter } from '@lib/utils/filterForPublishedDate'
import findValuesForKey from '@lib/utils/findValuesForKey'
import { perPage } from './index.xml'

const { SANITY_STUDIO_API_PROJECT_ID } = process.env
const { SANITY_STUDIO_API_DATASET_LEGACY } = process.env

export const getServerSideProps = async (context) => {
  const { req } = context
  const rootUrl = `${req.headers['x-forwarded-proto'] || 'http'}://${
    req.headers.host
  }`
  const { query: { num: [num] = [0] } = {} } = context

  const slice = `${Number(num) * perPage}..${Number(num * perPage) + perPage}`

  const docs = await runQuery(
    `*[_type == "post" && ${futurePublishedDateFilter()}] | order(_updatedAt desc) [${slice}]`
  )

  const entires = docs.map((doc) => {
    const images = findValuesForKey(doc, 'asset').reduce((acc, { _ref }) => {
      const [type, hash, dimensions, extension] = _ref.split('-')

      if (type !== 'image') return acc

      const url = [
        `https://cdn.sanity.io/images`,
        SANITY_STUDIO_API_PROJECT_ID,
        SANITY_STUDIO_API_DATASET_LEGACY,
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
      loc: `${rootUrl}${doc.path}`,
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: new Date(doc?.modified || doc?._updatedAt).toISOString(),
      images: images.length ? images : undefined,
    }
  })

  return getServerSideSitemapLegacy(context, entires)
}

// Default export to prevent next.js errors
export default function BlogPostSitemapIndex() {}
