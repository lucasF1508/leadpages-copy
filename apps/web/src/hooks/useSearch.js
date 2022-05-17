// import { useMemo } from 'react'
// import dynamic from 'next/dynamic'

// TODO Refactor Search && useSearch with new query builder addition. Data shape has changed
// const lunr = dynamic(() => import('lunr'))
// const searchData = dynamic(() => import('@public/indices/siteSearch.json'))

const defaultQuery = (inputValue) =>
  `title:${inputValue}*^10 content:${inputValue}*^5 ${inputValue} ${inputValue}*`

const trimLength = (string, length) =>
  string.length > length ? `${string.slice(0, length - 3)}...` : string

const formatResults = ({
  title,
  content = '',
  excerpt: orgExcerpt,
  url,
  score,
  headingLength = 35,
  excerptLength = 128,
}) => {
  const heading = trimLength(title, headingLength)
  const excerpt = trimLength(orgExcerpt || content, excerptLength)

  return {
    label: heading,
    value: url,
    heading,
    excerpt,
    score,
  }
}

// const buildSearchIndex = (docs) =>
//   lunr(function () {
//     const fields = ['title', 'content', 'slug', 'url', 'type']

//     fields.forEach((field) => {
//       this.field(field)
//     })

//     docs.forEach((doc) => {
//       this.add(doc)
//     })
//   })

const useSearch = () => {
  // const searchIndex = useMemo(() => buildSearchIndex(searchData), [])
  // const search = (query) => {
  //   const results = searchIndex.search(query).slice(0, 5)
  //   const resultsRefs = results.map(({ ref }) => ref)
  //   return searchData
  //     .filter((node) => resultsRefs.includes(node.id))
  //     .map((node) => {
  //       const [{ score }] = results.filter(({ ref }) => ref === node.id)
  //       return {
  //         ...node,
  //         score,
  //       }
  //     })
  //     .sort((a, b) => (a.score > b.score ? -1 : 1))
  // }
  // return search
}

export default useSearch
export { defaultQuery, formatResults }
