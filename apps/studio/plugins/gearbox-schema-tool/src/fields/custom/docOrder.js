import * as F from '../../fields'
import DocOrderSort from 'part:gearbox-doc-order-sort/doc-order-sort'
import startCase from 'lodash/startCase'

const message = 'The order is saved in real time and does not require publish'

export const docOrder = (
  docType = 'post',
  {
    name = 'order',
    title = `Order of ${startCase(docType)}`,
    options,
    description = options?.referenceDocumentId != true ? message : undefined,
    defaultOptions = {
      field: 'order',
      referenceDocumentId: false,
      excludeDrafts: true,
      appendQuery: undefined,
    },
    ...props
  } = {}
) =>
  F.array({
    name,
    title,
    description,
    options: {
      ...defaultOptions,
      ...options,
    },
    ...props,
    inputComponent: DocOrderSort,
    of: F.reference(docType, { weak: true }),
  })

export default docOrder
