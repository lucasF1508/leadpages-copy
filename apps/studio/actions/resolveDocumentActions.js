import defaultResolve, {
  PublishAction,
  UnpublishAction,
} from 'part:@sanity/base/document-actions'
import PublishActionHook from './PublishActionHook'
import {
  previewFeed,
  importFeed,
  publishToggle,
  unpublishFeed,
} from './feedActions'

const resolveDocumentActions = (props) => {
  switch (props.type) {
    case 'feed':
      return [
        publishToggle,
        unpublishFeed,
        ...defaultResolve(props).filter(
          (Action) => Action !== PublishAction && Action !== UnpublishAction
        ),
        importFeed,
        previewFeed,
      ]

    default:
      return defaultResolve(props).map((Action) => {
        if (Action === PublishAction) {
          return PublishActionHook
        }
        return Action
      })
  }
}

export default resolveDocumentActions
