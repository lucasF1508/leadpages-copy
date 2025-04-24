import type {IncludeExclude} from './types'

/**
 * Applies include/exclude filtering based on the provided configuration.
 * If local settings are not defined, global settings are used as fallback.
 * @param {string} item - The item being checked (e.g., schemaType or templateId).
 * @param {boolean | IncludeExclude | undefined} localConfig - The local include/exclude configuration.
 * @param {IncludeExclude} globalConfig - The global include/exclude configuration.
 * @returns {boolean} Whether the item passes the include/exclude checks.
 */
export const applyIncludeExclude = (
  item: string,
  localConfig: boolean | IncludeExclude | undefined,
  globalConfig: IncludeExclude
): boolean => {
  if (typeof localConfig === 'boolean') {
    return localConfig
  }
  const {include: localInclude, exclude: localExclude} = localConfig || {}
  const {include: globalInclude, exclude: globalExclude} = globalConfig

  // Check local include/exclude first, then fall back to global include/exclude
  if (localInclude?.length) {
    if (!localInclude.includes(item)) {
      return false
    }
  } else if (globalInclude?.length && !globalInclude.includes(item)) {
    return false
  }

  if (localExclude?.length) {
    if (localExclude.includes(item)) {
      return false
    }
  } else if (globalExclude?.length && globalExclude.includes(item)) {
    return false
  }

  return true
}
