import field from '../field'

export const excerpt = ({ name = 'excerpt', ...props } = {}) =>
  field('text', {
    name,
    rows: 4,
    ...props,
  })

export default excerpt
