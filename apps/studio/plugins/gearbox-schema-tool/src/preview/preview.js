export const preview = ({
  title = '',
  media = '',
  prepare,
  ...props
} = {}) => ({
  select: {
    title,
    media,
    ...props,
  },
  prepare,
})

export default preview
