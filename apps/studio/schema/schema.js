// We import object and document schemas
import * as componentsSchema from './components'
import * as documentsSchema from './documents'
import * as objectSchema from './objects'

export const schema = [componentsSchema, documentsSchema, objectSchema]
  .map((partial) => {
    return Object.values(partial).map((schema) => {
      return schema
    })
  })
  .flat()

export default schema
