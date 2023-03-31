import slugify from '../slugify'

export const category = (value) => {
  const { name } = value
  const slug = slugify(name)

  return {
    _type: 'categoryPost',
    path: `/blog/category/${slug}`,
    slug: {
      _type: 'slug',
      current: slug,
    },
    title: name,
  }
}
