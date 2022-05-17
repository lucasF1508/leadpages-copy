import field from '../field'

const defaultRows = 4

export const text = (props = {}) =>
  field('text', {
    rows: defaultRows,
    ...props,
  })

export default text
