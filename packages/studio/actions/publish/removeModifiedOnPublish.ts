import type {DocumentActionProps, FieldOperationsAPI} from 'sanity'

interface RemoveModifiedOnPublishProps
  extends Pick<DocumentActionProps, 'draft' | 'id' | 'published' | 'type'> {}

export const removeModifiedOnPublish = async (
  patch: FieldOperationsAPI['patch'],
  {draft}: RemoveModifiedOnPublishProps
) => {
  const modified = draft?.modified as string | undefined

  if (!modified) {
    return null
  }

  patch.execute([{unset: ['modified']}])
  return draft?._updatedAt
}

export default removeModifiedOnPublish
