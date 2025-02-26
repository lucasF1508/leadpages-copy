import type {SanityClient} from 'sanity'

const stripOutCategory = (string: string) => {
  if (!string) return string
  const type = string.replace('category', '')
  return type.charAt(0).toLowerCase() + type.slice(1)
}

const generateBasePath = async ({
  type,
  client,
  parent,
  path = [],
}: {
  checkForArchivePath?: boolean
  client: SanityClient
  document: any
  parent: any
  path?: []
  type: string
}): Promise<string[]> => {
  if (type === 'post') {
    return ['/blog']
  }

  if (type === 'integration') {
    return ['/integrations']
  }

  if (type === 'comparison') {
    return ['/comparisons']
  }

  if (type === 'customer') {
    return ['/customers']
  }

  if (type === 'publisher') {
    return ['/blog/author']
  }

  if (type === 'categoryPost') {
    return ['/blog/category']
  }

  if (type === 'categoryIntegration') {
    return ['/integrations/category']
  }

  if (!parent) {
    return path
  }

  const response = await client.fetch(
    `*[!(_id in path('drafts.**')) && _id == "${parent._ref}"][0] {
        "id": _id,
        "type": _type,
        "slug": slug.current,
        parent,
      }`
  )

  const newPath = [response.slug, ...path]

  if (response.parent) {
    return await generateBasePath({
      ...response,
      client,
      path: newPath,
      checkForArchivePath: false,
    })
  }

  return newPath
}

export default generateBasePath
