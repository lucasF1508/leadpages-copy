import type {
  ConfigContext,
  DocumentActionComponent,
  DocumentActionDescription,
  DocumentActionProps,
} from 'sanity'
import {useToast} from '@sanity/ui'
import {useDocumentOperation} from 'sanity'
import {setPathOnPublish, setSlugOnPublish, removeModifiedOnPublish} from './publish'

const PublishActionHook = (
  _action: DocumentActionComponent,
  context: ConfigContext
): DocumentActionComponent => {
  const PublishAction = (props: DocumentActionProps): DocumentActionDescription => {
    const action = _action(props) as DocumentActionDescription
    const {patch} = useDocumentOperation(props.id, props.type)
    const toast = useToast()

    return {
      ...action,
      onHandle: async () => {
        const slug = await setSlugOnPublish(patch, props, context)
        await setPathOnPublish(patch, {slug, ...props}, context, toast)
        await removeModifiedOnPublish(patch, {...props})
        action?.onHandle?.()
      },
    }
  }
  return PublishAction
}

export default PublishActionHook
