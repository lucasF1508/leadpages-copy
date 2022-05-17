export const getDocTypeFromArrayOfReferences = ({ of: array }) => {
  if (!array) return false
  const [docType] = array
    .filter(({ type }) => type.name == 'reference')
    .map(({ to: [{ name }] }) => name)
  return docType
}
