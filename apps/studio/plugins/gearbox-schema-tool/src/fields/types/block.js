import array from './array'

/**
 * Convenience method for quickly creating Sanity block fields
 *
 * @see {@link https://www.sanity.io/docs/block-type block schema type docs}
 */
export const block = ({ of = [], ...props }) =>
  array({
    ...props,
    of: [{ type: 'block' }, ...of],
  })

export default block
