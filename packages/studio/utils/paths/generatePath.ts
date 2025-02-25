import type {SanityClient} from 'sanity'
import generateBasePath from './generateBasePath'
export interface GeneratePathProps {
  client: SanityClient
  document: any
  parent?: any
  slug?: string
  type?: string
}

export const joinPath = (path: string[]): string =>
  path.filter(Boolean).join('/').replace(/\/\/+/g, '/')

export const generatePath = async ({
  slug: _slug,
  type: _type,
  document,
  client,
}: GeneratePathProps) => {
  const slug = _slug || document.slug.current
  const type = _type || document._type

  const basePath = (await generateBasePath({type, client, parent: document?.parent, document})) || [
    '/',
  ]

  return joinPath(['/', ...basePath, slug])
}

export default generatePath
