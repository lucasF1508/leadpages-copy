import { SanityDocument } from "sanity"

type Mapper = (shapeData: any) => any

const queueMappers = (docs: SanityDocument[], ...mappers: Mapper[]): SanityDocument[] => {
  if (mappers.length === 0) return docs

  return mappers.reduce((result, mapper) => mapper(result), docs)
}

export { queueMappers }