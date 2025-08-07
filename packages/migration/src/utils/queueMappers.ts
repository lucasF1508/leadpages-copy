import { SanityDocument } from "sanity"

type Mapper = (docs: SanityDocument[]) => Promise<SanityDocument[]> | SanityDocument[]

const queueMappers = async (
  docs: SanityDocument[],
  ...mappers: Mapper[]
): Promise<SanityDocument[]> => {
  return mappers.reduce(
    async (prevDocsPromise, mapper) => {
      const resolvedDocs = await prevDocsPromise
      return mapper(resolvedDocs)
    },
    Promise.resolve(docs)
  )
}

export { queueMappers }