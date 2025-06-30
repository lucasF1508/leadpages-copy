//@ts-nocheck
import inquirer from 'inquirer'
import type { PatchesType } from 'studio/utils/batchCommit';
import batchCommit, { buildDeletePatches } from 'studio/utils/batchCommit'
import { transferClients } from '@src/client'
import { runner } from '@src/utils/runner'

const main = async () => {
  const { docType } = await inquirer.prompt([
    {
      message: 'Enter the document type to delete (e.g. "post"):',
      name: 'docType',
      type: 'input',
      validate: (val) => !!val || 'You must provide a document type.',
    },
  ])

  const { dataset: {key, name}} = await inquirer.prompt([
    {
      choices: Object.entries(transferClients).map(([key, client]) => ({
        name: client.config().dataset,
        value: {
          key,
          name: client.config().dataset
        },
      })),
      message: 'Select the dataset to delete the documents from:',
      name: 'dataset',
      type: 'list',
    },
  ])

  const client = transferClients[key as keyof typeof transferClients]

  const docs = await client.fetch(`*[_type == "${docType}"]`)
  if (docs?.length === 0) {
    console.log(`No documents of type "${docType}" found.`)
    return
  }

  console.log(`Found ${docs.length} documents of type "${docType}" in dataset "${name}".`)

  const { confirmation } = await inquirer.prompt([
    {
      message: `⚠️  This will delete ${docs.length} documents of type "${docType}" from - projectId: "${client.config().projectId}" dataset: "${name}".\nTo confirm, type the dataset name exactly (${name}):`,
      name: 'confirmation',
      type: 'input',
      validate: (input) => {
        const expected = name
        return input === expected || `You must type "${expected}" to confirm.`
      },
    },
  ])

  if (confirmation !== name) {
    console.log('Deletion cancelled. 🚫')
    return
  }

  const patches = buildDeletePatches(docs) as unknown as PatchesType
  
  await batchCommit({
    client,
    patches,
  })

  console.log(`🚀 Deleted ${patches.length} "${docType}" documents.`)
}

runner(main)