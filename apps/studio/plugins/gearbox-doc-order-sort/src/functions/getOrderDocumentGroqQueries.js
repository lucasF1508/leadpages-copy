const PAGE_SIZE = 25
// note: going above 25 can lead to Promises not resolving

export const getOrderDocumentGroqQueries = ({
  docField,
  docType,
  appendQuery,
  excludeDrafts = true,
  referenceDocumentId = false,
} = {}) => {
  const groqQuery = `*[
    ${excludeDrafts ? `!(_id in path("drafts.**")) && ` : ''}
    ${referenceDocumentId ? `references($ref) && ` : ''}
    _type == "${docType}"
    ${appendQuery ? ` && ${appendQuery}` : ''}
  ]`

  return {
    docQuery: `${groqQuery} | order(${docField} asc, order asc, _createdAt desc)`,
    countQuery: `count(${groqQuery})`,
  }
}

export const getOrderDocumentGroqQueriesRange = ({ length = 0 } = {}) => {
  return `[${length}...${length + PAGE_SIZE}]`
}
