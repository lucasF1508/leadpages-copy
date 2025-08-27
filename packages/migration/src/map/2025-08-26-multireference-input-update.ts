/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'
import get from 'lodash/get'

const mapLinkInline = (docs) => {
  const paths = findPaths(
    docs,
    (key, value) => value?._type === 'testimonialBlock'
  )

  return docs
    .map((doc, index) => {
      const testimonials = paths[index]
        .reduce((acc, path) => {
          const testimonial = get(doc, path)

          if (!testimonial) return acc

          return [
            ...acc,
            {
              _id: doc._id,
              _rev: doc._rev,
              [`${path}.testimonials`]: testimonial.testimonials.map(
                (item) => ({
                  ...item,
                  _type: 'testimonial',
                })
              ),
            },
          ]
        }, [])
        .flat()

      return testimonials
    })
    .flat()
}

const migrateDocs = async () => {
  await migrate({
    mappers: mapLinkInline,
    query: `*[count(components[_type=='testimonialBlock']) > 0]`,
  })
}

migrateDocs()
