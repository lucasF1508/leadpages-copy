/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'
import get from 'lodash/get'

const mapLinkInline = (docs) => {
  const paths = findPaths(docs, (key, value) => value?._type === 'link')

  return docs
    .map((doc, index) => {
      const links = paths[index]
        .reduce((acc, path) => {
          const link = get(doc, path)

          if (!link?.href) {
            return [
              ...acc,
              {
                _id: doc._id,
                _rev: doc._rev,
                [`${path}.linkStyle`]: 'inline',
              },
            ]
          }

          const url = link.href.replace('https://www.leadpages.com', '') || '/'
          const isExternal = !url.startsWith('/')
          return [
            ...acc,
            {
              _id: doc._id,
              _rev: doc._rev,
              [path]: {
                _key: '81ced05dcdda',
                _type: 'link',
                condition: isExternal ? 'external' : 'internal',
                linkStyle: 'inline',
                url,
                ...(isExternal && !url.startsWith('mailto:')
                  ? { target: true }
                  : {}),
              },
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
    mappers: mapLinkInline,
    query: `*[_type == 'page' && slug.current == 'privacy']`,
  })
}

migrateDocs()
