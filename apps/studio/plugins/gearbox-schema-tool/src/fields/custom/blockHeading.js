import field from '../field'

export const blockHeading = ({
  title = 'Heading',
  name = 'heading',
  ...props
} = {}) =>
  field('blockHeading', {
    title,
    name,
    ...props,
  })

export default blockHeading
