import slugify from 'slugify'

export const generateSlug = (_source: string | string[] = ''): string => {
  const source = Array.isArray(_source) ? _source.join(' ') : _source
  return slugify(source, {
    lower: true,
    remove: /[^A-Za-z0-9\s/]/g,
  })
}

export default generateSlug
