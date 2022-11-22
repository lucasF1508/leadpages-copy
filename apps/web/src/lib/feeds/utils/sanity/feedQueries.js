export const feedProjection = /* groq */ `
  title,
  'type': feedOptions.condition,
  feedOptions,
  "fileUrl": feedOptions.csvFile.asset->url,
  url,
  mapping[] {
    'from': mapping.from,
    'to': mapping.to,
    processingRegex,
    'processing': processingOptions.condition,
    'category': processingOptions.categoryMapping,
    'prepend': processingOptions.slugifyPrepend,
    'imageType': processingOptions.imageType
  },
`

export const feedQuery = ({ id }) => /* groq */ `
*[_type == 'feed' ${
  id ? ' && _id in [$id, "drafts." + $id]' : ' && !(_id in path("drafts.**"))'
}] | order(_updatedAt desc) {
  ${feedProjection}
}
`
export const feedIdsQuery = /* groq */ `
*[_type == 'feed'
  && !(_id in path("drafts.**"))
] | order(_updatedAt desc)[]._id
`

export const categoryQuery = /* groq */ `*[_type == 'category' && !(_id in path("drafts.**"))]`

export const postQuery = /* groq */ `*[_type == 'post']`

export const categoryPostQuery = /* groq */ `
*[0] {
  'categories': ${categoryQuery},
  'posts': ${postQuery},
}
`

export default feedQuery
