import type {ConfigContext, DocumentActionComponent} from 'sanity'
import PublishActionHook from './PublishActionHook'
import resolveExperimentAction from './experiments/resolveExperimentActions'
import {pageMergeAction} from './pageMerge'

const DocumentActions = (
  actions: DocumentActionComponent[],
  context: ConfigContext & {schemaType: string}
) => {
  const {schemaType} = context
  const isExperiment = schemaType === 'experiments'

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
  ].includes(schemaType)
    ? pageMergeAction
    : undefined

  return [
    ...actions.map((docAction): DocumentActionComponent => {
      if (isExperiment) {
        return resolveExperimentAction(docAction)
      }

      return docAction.action === 'publish' ? PublishActionHook(docAction, context) : docAction
    }),
    maybePageMergeAction,
  ].filter(Boolean)
}

export default DocumentActions
