import field from '../field'

export const image = (props = {}) =>
  field('image', {
    options: { hotspot: true },
    ...props,
  })

export default image
