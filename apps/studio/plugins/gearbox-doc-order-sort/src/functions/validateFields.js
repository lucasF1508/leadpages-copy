export const validateFields = ({ docType, docField }) => {
  if (!docType) {
    return 'doc-order-sort requires the type to be an array of references'
  }
  if (!docField) {
    return 'doc-order-sort requires a field to sort by and update. This field should be a type: number on the doc you wish sort'
  }
}
