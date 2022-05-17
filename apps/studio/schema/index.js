import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import schema from './schema'

const types = [...schemaTypes, ...schema]

const sanitySchema = createSchema({
  name: 'rack-pinion',
  types,
})

export default sanitySchema
export { schema, schemaTypes, types }
