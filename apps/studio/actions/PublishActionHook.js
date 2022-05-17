import { PublishAction } from 'part:@sanity/base/document-actions'
import { useDocumentOperation } from '@sanity/react-hooks'
import { setPathOnPublish, setSlugOnPublish } from './publish'

const PublishActionHook = (props) => {
  const { onHandle } = PublishAction(props)
  const { patch } = useDocumentOperation(props?.id, props?.type)

  return {
    ...PublishAction(props),
    onHandle: async () => {
      const slug = setSlugOnPublish(patch, props)
      await setPathOnPublish(patch, { slug, ...props })
      onHandle()
    },
  }
}

export default PublishActionHook
