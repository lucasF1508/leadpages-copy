import type {DocumentActionComponent, DocumentActionProps} from 'sanity'
import {selectWinnerAction} from './selectWinner'

const resolveExperimentAction = (action: DocumentActionComponent) => {
  const ExperimentAction = (props: DocumentActionProps): DocumentActionComponent | null => {
    const {published, id, type, onComplete} = props || {}
    const actionProps = action(props)
    const {label} = actionProps || {}
    const disabled = published && (label === 'Delete' || label === 'Schedule')
    const selectWinnerActionProps = selectWinnerAction({onComplete, type, id, published})

    if (!actionProps || label === 'Unpublish' || label === 'Discard changes') {
      return null
    }

    if (published && !published.completed && label === 'Publish') {
      return selectWinnerActionProps
    }

    return {
      ...actionProps,
      label:
        published && published.completed && label === 'Publish'
          ? 'Experiment Complete: Result Published'
          : label,
      disabled: disabled || (published && published.completed && label === 'Publish'),
    }
  }

  return ExperimentAction
}

export default resolveExperimentAction
