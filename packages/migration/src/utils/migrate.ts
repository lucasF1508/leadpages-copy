//@ts-nocheck
/* eslint-disable no-console */
import util from 'util'
import { SanityDocument } from '@sanity/client'
import { client } from '@src/client'
import { queueMappers } from '@src/utils/queueMappers'
import { batchCommit, mergePatches, buildPatches } from '@gearbox-built/bolts'
import inquirer from 'inquirer'

type Mapper = (docs: SanityDocument[]) => SanityDocument[]

const migrate = async ({
  query,
  params = {},
  documents,
  mappers: _mappers = [],
}: {
  query?: string,
  params?: Record<string, any>,
  documents?: SanityDocument[]
  mappers?: Mapper[]
}) => {
  if (!query && !documents) {
    throw new Error('You must provide either a query or a set of documents.')
  }

  const mappers = Array.isArray(_mappers) ? _mappers : [_mappers]
  const docs = documents || await client.fetch(query, params)
  const transformed = queueMappers(docs, ...mappers) 
  const patches = mergePatches(buildPatches(transformed))
  console.log(`Found ${patches.length} documents to migrate`)

  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        { name: '🧪 Dry run (Output Patches)', value: 'dryrun' },
        { name: '❌ Cancel', value: 'cancel' },
        { name: '✅ Proceed with migration (commit patches)', value: 'commit' },
      ],
    },
  ])

  switch (action) {
    case 'commit':
      console.log('🔄 Committing patches...')
      await batchCommit({ patches, client })
      console.log('✅ Migration completed.')
      break
    case 'dryrun':
      console.log('🧪 Dry run selected.')
      console.log(util.inspect(patches, { showHidden: false, depth: null, colors: true }))
      break
    case 'cancel':
      console.log('❌ Migration cancelled by user.')
      process.exit(0)
      break
  }
  
}

export default migrate