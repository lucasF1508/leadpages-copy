import type {DocCreationControlConfig, Actions, NewDocumentOptions, Templates} from './types'
import {definePlugin} from 'sanity'
import {applyIncludeExclude} from './utils'

/**
 * A Sanity plugin for controlling document creation options based on include/exclude configurations.
 * This plugin allows fine-grained control over the availability of actions, newDocumentOptions, and initialValue templates,
 * using both global and granular configurations to determine inclusion or exclusion criteria.
 *
 * The plugin supports the following configurations:
 * - `include` / `exclude`: Global include/exclude settings that apply to all options.
 * - `actions`: Control the availability of document actions (e.g., unpublish, delete, duplicate) based on schema types.
 * - `newDocumentOptions`: Filter new document creation options based on template IDs and creation context.
 * - `templates`: Control which schema templates are available in the studio.
 *
 * Each configuration can be specified as a boolean or as an `IncludeExclude` object:
 * - `true` (default): No filtering, all items are included.
 * - `false`: All items are excluded.
 * - `IncludeExclude` object: Specifies `include` and/or `exclude` lists for fine-grained control.
 *
 * Usage in `sanity.config.ts` (or .js):
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {docCreationControl} from 'sanity-plugin-external-document-sync'
 *
 * export default defineConfig({
 *   // Other configuration settings...
 *   plugins: [
 *     docCreationControl({
 *       include: ['app', 'post'],  // Global include list for schema types
 *       exclude: ['comment'],      // Global exclude list for schema types
 *       actions: {                 // Specific configuration for actions
 *         include: ['post'],
 *         exclude: ['comment']
 *       },
 *       newDocumentOptions: true,  // Enable all new document options
 *       templates: {               // Specific configuration for templates
 *         include: ['page'],
 *       },
 *     }),
 *   ],
 * })
 * ```
 *
 * In this example, the plugin configuration:
 * - Globally includes `app` and `post` schema types while excluding `comment`.
 * - Customizes actions to include only `post` and exclude `comment` schema types.
 * - Enables all new document options without filtering.
 * - Restricts templates to include only those with the schema type `page`.
 */
export const docCreationControl = definePlugin<DocCreationControlConfig | void>((config = {}) => {
  const {
    include,
    exclude,
    actions: actionsConfig,
    newDocumentOptions: newDocumentOptionsConfig,
    templates: templatesConfig,
  } = config || {}
  const globalConfig = {include, exclude}

  const actions: Actions = (prev, {schemaType}) => {
    if (!applyIncludeExclude(schemaType, actionsConfig, globalConfig)) {
      return prev.filter(({action}) => !['unpublish', 'delete', 'duplicate'].includes(action || ''))
    }
    return prev
  }

  const newDocumentOptions: NewDocumentOptions = (prev, {creationContext}) => {
    if (creationContext.type === 'global') {
      return prev.filter((templateItem) =>
        applyIncludeExclude(templateItem.templateId, newDocumentOptionsConfig, globalConfig)
      )
    }
    return prev
  }

  const templates: Templates = (prev) => {
    return prev.filter(({schemaType}) =>
      applyIncludeExclude(schemaType, templatesConfig, globalConfig)
    )
  }

  const pluginConfig = {
    document: {
      newDocumentOptions,
      actions,
    },
    schema: {
      templates,
    },
  }

  return {
    name: 'sanity-plugin-doc-creation-control',
    ...(!!Object.entries(pluginConfig).length ? pluginConfig : {}),
  }
})
