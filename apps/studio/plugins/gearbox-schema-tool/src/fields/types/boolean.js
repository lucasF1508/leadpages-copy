import field from '../field'

export const boolean = (props = {}) =>
  field('boolean', {
    initialValue: false,
    ...props,
  })

export default boolean
