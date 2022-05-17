import PublishActionHook from './PublishActionHook'
import defaultResolve, {
  PublishAction,
} from 'part:@sanity/base/document-actions'

const resolveDocumentActions = (props) =>
  defaultResolve(props).map((Action) => {
    if (Action === PublishAction) {
      return PublishActionHook
    }
    return Action
  })

export default resolveDocumentActions
