import type {
  ConfigContext,
  DocumentActionProps,
  FieldOperationsAPI,
  ObjectSchemaType,
  SanityDocument,
} from 'sanity'
import {generateSlug} from 'bolts/utils'
import isBlank from '@/utils/isBlank'

export const setSlugOnPublish = (
  patch: FieldOperationsAPI['patch'],
  {type, draft}: Pick<DocumentActionProps, 'draft' | 'type'>,
  {schema}: Pick<ConfigContext, 'schema'>
) => {
  // Schema
  const documentSchema: ObjectSchemaType = schema._registry[type].get()
  if (!documentSchema) return undefined

  const slugSchema = documentSchema?.fields.find(({type}) => type?.name === 'slug')

  if (!slugSchema || !draft) return undefined

  // Document
  const slug = draft[slugSchema.name] as SanityDocument['slug']
  const source = !isBlank(slug?.current)
    ? slug?.current
    : (draft?.[slugSchema?.type?.options?.source] as string | undefined)

  const current = generateSlug(source)

  if (draft?.slug?.current !== current) {
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
