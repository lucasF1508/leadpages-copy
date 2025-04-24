// import client from 'client'
import * as templatesSchema from '../legacy/schema/documents/templates'

const SANITY_STUDIO_API_VERSION = import.meta.env.SANITY_STUDIO_API_VERSION

// Note: this assumes that every document that has a slug field
// // have it on the `slug` field at the root
export function isUniqueAcrossAllDocuments(slug, context) {
  const {document, getClient} = context
  const client = getClient({apiVersion: SANITY_STUDIO_API_VERSION})

  const id = document._id.replace(/^drafts\./, '')
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  }

  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`

  return client.fetch(query, params)
}

/**
 * Method for returning a list of defined template document schemas.
 *
 * @param {string} includes - Filters document types based on a partial match of
 * schema.name of the document type
 * @param {boolean} showHidden - Includes document types with `hidden: true`.
 * Default: `false`.
 * @param {boolean} onlyHidden - Returns only document types with `hidden: true`.
 * Default: `false`.
 * @returns {array}
 */
export const getTemplateSchemas = ({
  includes,
  schema = templatesSchema,
  showHidden = false,
  onlyHidden = false,
} = {}) =>
  Object.values(schema)
    .filter((template) => {
      if (!includes) return true
      const includesArray = Array.isArray(includes) ? includes : [includes]

      return includesArray.some((includesName) => template.name.includes(includesName))
    })
    .filter((template) => (onlyHidden ? template.hidden === true : template.hidden !== !showHidden))

/**
 * Convenience method for returning a list of defined template document schema names.
 * @returns {array}
 */
export const getTemplateTypes = (props = {}) =>
  getTemplateSchemas(props).map((template) => template.name)

/**
 * Convenience method for returning a list of defined page template document schema names.
 * @returns {object}
 */
export const getPageTemplateTypes = () => {
  const includes = 'page'
  const visible = {includes, showHidden: false}
  const all = {includes, showHidden: true}
  const hidden = {includes, onlyHidden: true}

  return {
    all: getTemplateTypes(all),
    visible: getTemplateTypes(visible),
    hidden: getTemplateTypes(hidden),
  }
}
