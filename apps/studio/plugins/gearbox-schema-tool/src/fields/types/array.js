import field from '../field'

/**
 * Convenience method for quickly creating Sanity array fields
 *
 * Example usage:
 * @example
 * // String
 * F.array({ name: 'String Array', of: 'string' })
 * @example
 * // Array of types
 * F.array({ name: 'Post/page Array', of: ['post', 'page'] })
 * @example
 * // References
 * F.array({ name: 'Post/page reference Array', of: F.reference(['post', 'page']) })
 *
 * @see {@link https://www.sanity.io/docs/array-type array schema type docs}
 */
export const array = ({ of: ofOrg = [], ...props }) => {
  const of = Array.isArray(ofOrg) ? ofOrg : [ofOrg]

  return field('array', {
    ...props,
    of,
  })
}

export default array
