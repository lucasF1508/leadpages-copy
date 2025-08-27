/* eslint-disable no-console */
import sanityImport from '@sanity/import'
// @ts-expect-error - no types
import { uuid } from '@sanity/uuid'
import { transferClients } from '@src/client'
import mapAssetRef from '@src/map/map-asset-ref'
import mapBlockContent from '@src/map/map-block-content'
import { queueMappers } from '@src/utils/queueMappers'
import inquirer from 'inquirer'
import partition from 'lodash/partition'
import pick from 'lodash/pick'
import util from 'util'
import sections from '../files/landing-page-guide-sidebar.json'

const { from, to } = transferClients

const operation = 'createOrReplace'
const expected = 'yes'
const types = ['page']

const mapGuide = async (docs) =>
  docs.map((doc) => {
    const [nextCard, _content] = partition(
      doc.content,
      (item) => item._type === 'cardsPreviousNext'
    )

    const next = nextCard?.[0]?.next

    const content = mapBlockContent(_content)
      .filter(
        (block) => block._type !== 'inlineCTA' && block._type !== 'inlineCTA'
      )
      .map((block) => ({
        ...block,
        ...(block?.listItem === 'numberBranded' ? { listItem: 'number' } : {}),
      }))
      .map((block) => {
        if (!block?.markDefs?.length) return block

        return {
          ...block,
          markDefs: block.markDefs.map((markDef) => {
            {
              if (markDef._type !== 'link') return markDef

              return {
                _key: markDef._key,
                _type: 'link',
                condition: markDef.condition,
                hasIcon: false,
                linkStyle: 'inline',
                url: markDef.url,
              }
            }
          }),
        }
      })

    const { heading, label, subheading } =
      doc?.hero?.[0]?.content?.reduce((acc, block) => {
        const { text } = block.children[0] || {}
        let key = ''
        switch (block.style) {
          case 'headlineSupertitle':
            key = 'label'
            break
          case 'h1':
            key = 'heading'
            break
          default:
            key = 'subheading'
            break
        }

        return {
          ...acc,
          [key]: text.trim(),
        }
      }, {}) || {}

    return {
      ...pick(doc, [
        'title',
        'slug',
        'path',
        '_id',
        'seo',
        'slug',
        'parent',
        'modified',
        '_type',
      ]),
      components: [
        {
          _key: uuid(),
          _type: 'textBlockWithSidebar',
          content,
          sidebar: {
            heading: 'The ultimate guide to landing pages',
            sections,
          },
        },
        ...(next
          ? [
              {
                _key: uuid(),
                _type: 'cardClickable',
                heading: next.link.label,
                label: next.heading,
                link: {
                  condition: 'internal',
                  url: next.link.url,
                },
              },
            ]
          : []),
      ],
      hero: [
        {
          _key: uuid(),
          _type: 'heroBanner',
          heading,
          label,
          subheading,
        },
      ],
    }
  })

const migrateDocs = async () => {
  const data =
    await from.fetch(`*[path match '/landing-pages-guide*' && !redirectToLegacy]{
    ...,
    sidebarLinks[]{
      ...,
      links[]{
        ...,
        link{
          ...,
          page->{
            path,
            title
          }
        }
      }
    },
    content[] {
      ...,
      markDefs[] {
        ...,
        "url": select(defined(url) => url, condition == 'internal' => page->path, href)
      }
    }
  }`)

  const docs = await queueMappers(data, mapAssetRef, mapGuide)

  const { confirmation } = await inquirer.prompt([
    {
      message: `⚠️  This will ${operation} documents of types [${types}] from - "${from.config().projectId}" dataset: "${from.config().dataset}" to "${to.config().projectId}" dataset: "${to.config().dataset}".\n To confirm, type "${expected}":`,
      name: 'confirmation',
      type: 'input',
      validate: (input) =>
        input === expected || `You must type "${expected}" to confirm.`,
    },
  ])

  if (confirmation !== expected) {
    console.log('Migration cancelled. 🚫')
    return
  }

  sanityImport(docs, {
    client: to,
    operation,
  })
    .then(({ numDocs, warnings }: { numDocs: number; warnings: string[] }) => {
      console.log('Imported %d documents', numDocs)
      console.log('Warnings:', warnings)
      // Note: There might be warnings! Check `warnings`
    })
    .catch((err: Error) => {
      console.error('Import failed: %s', err.message)
    })
}

migrateDocs().catch((err) => {
  console.error(err)
  process.exit(1)
})
