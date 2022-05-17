import field from '../field'

export const geopoint = (props = {}) =>
  field('geopoint', {
    ...props,
  })

export default geopoint
