// We import object and document schemas
import * as componentsSchema from './components'
import * as documentsSchema from './documents'
import * as objectSchema from './objects'

export const schema = [componentsSchema, documentsSchema, objectSchema]
  .map((partial) => Object.values(partial).map((_schema) => _schema))
  .flat()

export default schema
