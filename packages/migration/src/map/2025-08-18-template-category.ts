/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { toPlainText } from '@portabletext/react'
import { uuid } from '@sanity/uuid'
import migrate from '@src/utils/migrate'

const mapTemplateCategory = (docs) =>
  docs.map((doc) => ({
    _id: doc._id,
    _rev: doc._rev,
    hero: {
      _type: 'object',
      content: toPlainText(doc.heroContent),
      heading: [
        {
          _key: uuid(),
          _type: 'block',
          children: [
            {
              _key: uuid(),
              _type: 'span',
              text: doc.heroTitle,
            },
          ],
          style: 'h2-hero',
        },
      ],
      label: 'Leadpages Template Marketplace',
    },
  }))

const migrateDocs = async () => {
  await migrate({
    mappers: mapTemplateCategory,
    query: `*[_type == 'templateCategory']`,
  })
}

migrateDocs()
