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
import { pageMergeAction } from './pageMerge'

const resolveDocumentActions = (props) => {
  const maybePageMergeAction = [
    'page',
    'pageHome',
    'post',
    'customer',
    'comparison',
    'integration',
    'testimonial',
    'faq',
    'feature',
    'cta',
  ].includes(props.type)
    ? pageMergeAction
    : undefined

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
      return [
        ...defaultResolve(props).map((Action) => {
          if (Action === PublishAction) {
            return PublishActionHook
          }
          return Action
        }),
        maybePageMergeAction,
      ].filter(Boolean)
  }
}

export default resolveDocumentActions
