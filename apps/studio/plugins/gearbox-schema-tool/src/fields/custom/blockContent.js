import field from '../field'

export const blockContent = ({
  title = 'Content',
  name = 'content',
  ...props
} = {}) =>
  field('blockContent', {
    title,
    name,
    ...props,
  })

export default blockContent
