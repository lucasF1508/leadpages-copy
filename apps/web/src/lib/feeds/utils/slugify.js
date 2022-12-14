import _slugify from 'slugify'

const slugify = (value) => {
  if (!value) return value

  return _slugify(`${value}`, {
    replacement: '-',
    lower: true,
    strict: true,
  })
}

export default slugify
