// @ts-nocheck
/* eslint-disable no-console */
import config from 'config'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import {client} from '@src/client'
import util from 'util'
import { findPaths } from '@gearbox-built/bolts/utils'
import migrate from '@src/utils/migrate'

const pageTemplates = config?.studio?.docTypes

const filters = [...pageTemplates, 'testimonial', 'popUp', 'navigation', 'footer', 'siteBanner']
  .map((type) => `_type == "${type}"`)
  .join(' || ')

const query = `*[${filters}]`

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

migrate({
  query,
  mappers: mapDocuments,
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
