import {SanityClient, SanityDocument} from 'sanity'

const getChildrenDocuments = async ({
  client,
  ids,
  collection = [],
}: {
  client: SanityClient
  ids: string[]
  collection?: SanityDocument[] | []
}): Promise<SanityDocument[] | []> => {
  const children: SanityDocument[] | [] = await client.fetch(
    `
    *[!(_id in path('drafts.**')) && parent._ref in $ids] {
      _id,
      _rev,
      path,
    }
  `,
    {ids}
  )

  if (children?.length) {
    return await getChildrenDocuments({
      client,
      ids: children.map((child) => child?._id),
      collection: [...collection, ...children],
    })
  }

  return collection
}

export default getChildrenDocuments
