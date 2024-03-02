import defaultResolve, {
  PublishAction,
  UnpublishAction,
  DeleteAction,
} from 'part:@sanity/base/document-actions'
import PublishActionHook from './PublishActionHook'
import {
  previewFeed,
  importFeed,
  publishToggle,
  unpublishFeed,
} from './feedActions'
import { pageMergeAction } from './pageMerge'
import { selectWinnerAction } from './selectWinner'

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

  const maybeWinnerAction =
    ['experiments'].includes(props.type) && props?.published?.completed !== true
      ? selectWinnerAction
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
          const { type, published } = props
          const isPublishedExperiment = type === 'experiments' && published

          if (Action === DeleteAction && isPublishedExperiment) {
            return null
          }
          if (Action === UnpublishAction && isPublishedExperiment) {
            return null
          }
          if (Action === PublishAction) {
            return PublishActionHook
          }

          return Action
        }),
        maybePageMergeAction,
        maybeWinnerAction,
      ].filter(Boolean)
  }
}

export default resolveDocumentActions
