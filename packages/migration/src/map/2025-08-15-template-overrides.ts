/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import migrate from '@src/utils/migrate'
import partition from 'lodash/partition'
// import util from 'util'

const mapTemplate = (docs) =>
  docs.map((doc) => {
    let columnCount = 0

    const content = doc.details.content.map((block) => {
      // only 2 that have unique headings
      if (['2-host-webinar', '404-opt-in-page'].includes(doc.slug.current)) {
        return block
      }

      if (block.style === 'normal') return block

      if (block.style === 'h3') {
        return {
          ...block,
          style: 'h4',
        }
      }

      if (block.style === 'h4') {
        return {
          ...block,
          style: 'h5',
        }
      }
    })

    const [column1, column2] = partition(content, (block) => {
      if (block.style === 'h4') {
        columnCount++
      }

      return columnCount < 2
    })

    return {
      _id: doc._id,
      _rev: doc._rev,
      ['details.column2']: column2,
      ['details.content']: column1,
    }
  })

const migrateDocs = async () => {
  await migrate({
    mappers: mapTemplate,
    query: `*[_type == 'template' && defined(details.content)]`,
  })
}

migrateDocs()
