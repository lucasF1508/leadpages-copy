import {SanityClient} from 'sanity'

const getReferencedDocuments = async ({client, id}: {client: SanityClient; id: string}) =>
  client.fetch(`
    *[references('${id}')]
  `)

export default getReferencedDocuments
