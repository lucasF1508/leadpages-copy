import slugify from 'slugify'
import { isBlank } from 'part:gearbox-utils/utils'
import schema from '../../schema'

const getSchemaRegistry = (schemaType) => {
  const { _registry } = schema
  return _registry?.[schemaType] ? _registry[schemaType].get() : undefined
}

export const setSlugOnPublish = (patch, { id, type, draft }) => {
  // Schema
  const documentSchema = getSchemaRegistry(type)
  const slugSchema = documentSchema?.fields.find(
    ({ type }) => type?.name === 'slug'
  )

  if (!slugSchema) return null

  // Document
  const slug = draft[slugSchema?.name]
  const source = draft[slugSchema?.type?.options?.source]
  const current = !isBlank(slug?.current)
    ? slug?.current
    : slugify(source, { lower: true, remove: /[*+~.()'"!:@]/g })

  if (isBlank(slug?.current)) {
    patch.execute([
      {
        set: {
          [slugSchema?.name]: {
            _type: 'slug',
            current,
          },
        },
      },
    ])
  }

  return current
}

export default setSlugOnPublish
