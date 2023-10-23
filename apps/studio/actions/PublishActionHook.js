import { PublishAction } from 'part:@sanity/base/document-actions'
import { useDocumentOperation } from '@sanity/react-hooks'
import { setPathOnPublish, setSlugOnPublish } from './publish'

const PublishActionHook = (props) => {
  const { onHandle } = PublishAction(props)
  const { patch } = useDocumentOperation(props?.id, props?.type)
  const { draft, type } = props

  const actions = {
    ...PublishAction(props),
    onHandle: async () => {
      const slug = setSlugOnPublish(patch, props)
      await setPathOnPublish(patch, { slug, ...props })
      onHandle()
    },
  }

  if (type === 'experiments') {
    const completedExperiment = draft?.completed
    if (completedExperiment) actions.disabled = true

    return {
      ...actions,
      label: completedExperiment ? 'Completed' : 'Publish',
    }
  }

  return actions
}

export default PublishActionHook
