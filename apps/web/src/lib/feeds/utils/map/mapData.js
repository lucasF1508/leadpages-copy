import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import { createObjectCsvWriter } from 'csv-writer'
import _ from 'lodash'
import { skipSlugPaths } from './skipSlugPaths'
import { filterDuplicateByKey } from '../utils'
import maybeMerge from './maybeMerge'
import mapItem from './mapItem'

const generateCSV = (arr) => {
  const csvWriter = createObjectCsvWriter({
    path: 'public/export.csv',
    header: [
      { id: 'publishedDate', title: 'PublishedDate' },
      { id: 'slug', title: 'Slug' },
      { id: 'id', title: 'ID' },
      { id: 'shortcode', title: 'HasShortcode' },
      { id: 'block', title: 'HasBlock' },
      { id: 'shortcodes', title: 'ShortcodesFound' },
      { id: 'blocks', title: 'BlocksFound' },
    ],
  })

  const records = arr.map(
    ({ slug, id, shortcode, block, publishedDate, shortcodes, blocks }) => ({
      slug,
      id,
      shortcode,
      block,
      publishedDate,
      shortcodes,
      blocks,
    })
  )

  csvWriter
    .writeRecords(records)
    .then(() => console.log('CSV file written successfully'))
}

const getWpBlockMatches = (str) => {
  const regex = /<!-- wp:block {"ref":\d+} \/-->/g
  let match
  const matchIndexes = []
  while ((match = regex.exec(str)) !== null) {
    matchIndexes.push(match[0])
  }
  return matchIndexes
}

const getWpShortcodeMatches = (str) => {
  const regex = /\[([\w\-_]+)([^\]]*)?\](?:(.+?)?\[\/\1\])?/gs
  let match
  const matchIndexes = []
  while ((match = regex.exec(str)) !== null) {
    matchIndexes.push(match[0])
  }
  return matchIndexes
}

export const mapData = ({ data, mapping = [], debug }) => {
  if (isEmpty(mapping)) return []

  const documents = []
  const categories = []

  data.forEach((dataItem) => {
    const doc = mapping.reduce((result, map) => {
      const { from, to: toOrg, processing } = map

      if (!from || !toOrg) return result

      const [to] = toOrg.split('::')
      const mappedItem = mapItem(get(dataItem, from), map)

      if (!mappedItem) return result

      const item = maybeMerge({ to, processing, result, item: mappedItem })

      if (processing === 'category') {
        categories.push(
          ...mappedItem[to].map(({ name, parent }) => ({ name, parent }))
        )
      }

      return {
        ...result,
        ...item,
      }
    }, {})

    documents.push(doc)
  })

  const docsWithBlockOrShortCodes = []
  const filterdDocsForExclusion = documents
    .map((doc, i) => {
      if (skipSlugPaths.includes(doc.slug)) {
        if (debug) {
          console.log(
            `Article import #${i} present in skipSlugPaths. Skipping ${doc.slug}`
          )
        }

        return undefined
      }

      if (debug) {
        console.log(`Proceeding with article import #${i}`)
      }

      const blockMatches = getWpBlockMatches(doc.content)
      const shortcodeMatches = getWpShortcodeMatches(doc.content)

      if (blockMatches.length > 0)
        docsWithBlockOrShortCodes.push({
          publishedDate: doc.publishedDate,
          id: doc._id,
          slug: doc.slug,
          block: true,
          blocks: blockMatches,
        })

      if (shortcodeMatches.length > 0)
        docsWithBlockOrShortCodes.push({
          publishedDate: doc.publishedDate,
          id: doc._id,
          slug: doc.slug,
          shortcode: true,
          shortcodes: shortcodeMatches,
        })

      return doc
    })
    .filter(Boolean)

  const mergedArray = _.values(_.groupBy(docsWithBlockOrShortCodes, 'id')).map(
    (group) => _.merge(...group)
  )

  if (debug) {
    generateCSV(mergedArray)
  }

  return [filterdDocsForExclusion, filterDuplicateByKey(categories, 'name')]
}

export default mapData
