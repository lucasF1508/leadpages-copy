import sanitySchema from '@studio/schema'

export const getSchemaRegistry = (schemaType) => {
  const { _registry } = sanitySchema
  return _registry?.[schemaType] ? _registry[schemaType].get() : undefined
}

export default sanitySchema
