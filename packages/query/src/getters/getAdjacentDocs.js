import getDocSlugs from './getDocSlugs'

export const getAdjacentDocs = async (
  { data },
  loop = true,
  order = 'order(order asc, publishedDate desc, _createdAt desc)'
) => {
  const [{ slug, _type }] = data
  const docs = await getDocSlugs(_type, {
    order,
  })

  const currentIndex = docs.indexOf(
    docs.find((doc) => slug?.current === doc?.slug)
  )
  const next = docs[currentIndex + 1] || (loop ? docs[0] : false)
  const prev = docs[currentIndex - 1] || (loop ? docs[docs.length - 1] : false)

  return {
    next,
    prev,
  }
}

export default getAdjacentDocs
