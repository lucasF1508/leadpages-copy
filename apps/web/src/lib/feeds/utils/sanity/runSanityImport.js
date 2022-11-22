import sanityImport from '@sanity/import'
import getClient from 'client'

const client = getClient({ preview: true })

export const runSanityImport = async (docs) => {
  const response = await sanityImport(
    docs.filter((doc) => doc?._type),
    {
      client,
      operation: 'createIfNotExists',
    }
  )
    .then(({ numDocs, warnings }) => {
      // eslint-disable-next-line no-console
      console.log('Imported %d documents', numDocs)
      return { numDocs, warnings }
    })
    .catch(({ message, response: { body } = {} }) => {
      console.error(
        'Import failed: %s',
        body ? JSON.stringify(body, null, 2) : message
      )
      return { error: { message } }
    })

  return { response, docs }
}

export default runSanityImport
