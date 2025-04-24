import type {DocumentPluginOptions, SchemaPluginOptions} from 'sanity'

export type IncludeExclude = {
  include?: string[]
  exclude?: string[]
}

export interface DocCreationControlConfig extends IncludeExclude {
  actions?: boolean | IncludeExclude
  newDocumentOptions?: boolean | IncludeExclude
  templates?: boolean | IncludeExclude
}

export type Actions = DocumentPluginOptions['actions']
export type NewDocumentOptions = DocumentPluginOptions['newDocumentOptions']
export type Templates = SchemaPluginOptions['templates']
