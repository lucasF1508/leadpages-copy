import field from '../field'

/**
 * Convenience method for quickly creating Sanity object fields
 *
 * @see {@link https://www.sanity.io/docs/object-type object schema type docs}
 */
export const object = (props = {}) => field('object', props)

export default object
