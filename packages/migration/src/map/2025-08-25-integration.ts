/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'
import get from 'lodash/get'

const mapIntegration = (docs) => {
  const paths = findPaths(
    docs,
    (key, value) => value?.condition === 'leadpagesTrigger'
  )

  return docs
    .map((doc, index) => {
      const links = paths[index]
        .reduce((acc, path) => {
          const link = get(doc, path)

          if (!link?.hasIcon) return acc

          return [
            ...acc,
            {
              _id: doc._id,
              _rev: doc._rev,
              [`${path}.hasIcon`]: false,
            },
          ]
        }, [])
        .flat()

      return links
    })
    .flat()
}

const migrateDocs = async () => {
  await migrate({
    mappers: mapIntegration,
    query: `*[_type == 'integration' && hasSubpage]`,
  })
}

migrateDocs()
