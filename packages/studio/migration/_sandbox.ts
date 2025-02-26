// @ts-nocheck
/* eslint-disable no-console */
// Taken from https://www.sanity.io/schemas/migrate-plain-text-field-to-portable-text-a05f0300
// To run, navigate to the studio folder and run:
// sanity exec migration/_sandbox.ts --with-user-token
import config from 'config'
import util from 'util'
import isEmpty from 'lodash/isEmpty'
import get from 'lodash/get'
import findPaths from '../utils/findPaths'
import {migrateDocs} from './utils'
import {getCliClient} from 'sanity/cli'

const client = getCliClient().withConfig({apiVersion: '2021-06-15'})

const pageTemplates = config?.studio?.docTypes

const filters = [...pageTemplates, 'testimonial', 'popUp', 'navigation', 'footer', 'siteBanner']
  .map((type) => `_type == "${type}"`)
  .join(' || ')

const query = `*[${filters}]`
// const query = `*[defined(components)]`

const mapDocuments = (docs: any) => {
  // update to condition internal
  const paths = findPaths(docs, (key, value) => value?.condition === 'internal')
  console.log(paths)

  // return docs.reduce((patches, doc, index) => {
  //   const components = paths[index].reduce((acc, path) => {
  //     const component = get(doc, path)

  //     console.log(doc.title)
  //     // console.log(component)

  //     return {
  //       ...acc,
  //       [path]: {
  //         ...component,
  //         page: {
  //           ...component.page,
  //           _weak: true,
  //         },
  //       },
  //     }
  //   }, {})

  //   if (isEmpty(components)) {
  //     return patches
  //   }

  //   return [
  //     ...patches,
  //     {
  //       _id: doc._id,
  //       _rev: doc._rev,
  //       ...components,
  //     },
  //   ]
  // }, [])
}

const migrateDocs = async () => {
  const docs = await client.fetch(`*[_type == "post" && slug.current == "website-design-trends"]`)
  const mapDocsSet = mapDocuments(docs)

  // console.log(`Run sandbox complete.`)
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
