import type { Params } from '@types'
import { seoQuery } from './globalQueries'

const join = (arr: (string | false | undefined | null)[], sep = ',') =>
  arr.filter(Boolean).join(sep)

interface BlogQueryProps {
  searchTerm?: string
  searchFilter?: string
  category?: string | { slug?: { current: string } }
  exclude?: string | { slug?: { current: string } }
  categoryField?: string
  docFilter?: string
  foundCount?: boolean
}

const getSearchFilter = (props: BlogQueryProps) => {
  const { searchTerm, searchFilter } = props

  const search = join(
    [
      searchTerm && `pt::text(content) match $searchTerm + "*"`,
      searchTerm && `excerpt match $searchTerm + "*"`,
      searchTerm && `title match $searchTerm + "*"`,
      searchFilter && searchFilter,
    ],
    ' || '
  )

  return search && `(${search})`
}

const getCategorySlug = (category?: string | { slug?: { current: string } }) =>
  typeof category === 'object' ? category?.slug?.current : category

const getCategoryFilter = (props: BlogQueryProps) => {
  const { category, exclude, categoryField = 'primaryCategory' } = props

  const categoryFilter = join(
    [
      category &&
      `${categoryField}->slug.current == '${getCategorySlug(category)}'`,
      exclude &&
      `${categoryField}->slug.current != '${getCategorySlug(exclude)}'`,
    ],
    ' && '
  )

  return categoryFilter
}

const getFilters = (props: BlogQueryProps) => {
  const { docFilter } = props

  const filters = join(
    [
      `_type == $docType`,
      `!(_id in path('drafts.**'))`,
      getCategoryFilter(props),
      getSearchFilter(props),
      docFilter && docFilter,
    ],
    ' && '
  )

  return `*[${filters}]`
}

const getScore = (props: BlogQueryProps) => {
  const { searchTerm } = props

  const score = join(
    [
      searchTerm && `pt::text(content) match $searchTerm + "*"`,
      searchTerm && `excerpt match $searchTerm + "*"`,
      searchTerm && `title match $searchTerm + "*"`,
    ],
    ','
  )

  return score && `| score(${score})`
}

const getOrder = (props: BlogQueryProps) => {
  const { searchTerm } = props

  const order = join([
    searchTerm && '_score desc',
    'publishedDate desc',
    '_createdAt desc',
  ])

  return order && `| order(${order})`
}

const getSlice = () => `[$start..$end]`

export const getBlogQuery = (props: BlogQueryProps = {}) => {
  const { foundCount = false } = props

  const blogQuery = join(
    [
      getFilters(props),
      getScore(props),
      getOrder(props),
      !foundCount && getSlice(),
    ],
    ' '
  )

  return foundCount ? `count(${blogQuery})` : blogQuery
}

export const getPageType = (path?: string[]) => {
  if (!path?.length) {
    return 'archive'
  }
  if (path?.includes('category')) {
    return 'category'
  }
  if (path?.includes('author')) {
    return 'author'
  }

  return 'article'
}

// Content query for blog posts
export const contentQuery = `content[] {
  ...,
  _type == "schemaInlineCTAGlobalBlock" => {
    ...,
    cta-> {
      ...,
      image {
        asset-> {
          _id,
          _type,
          url,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
            lqip
          }
        },
        altText,
        hotspot,
        crop,
        lqip
      }
    }
  },
  _type == "startATrial" => {
    ...,
    link {
      ...,
      internal-> {
        _id,
        _type,
        "slug": slug.current,
        "path": path
      }
    },
    backgroundImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions { width, height },
          lqip,
        },
      },
    },
  },
}`

// Query for getting a single post by slug
export const postQuery = `*[_type == 'post' && slug.current == $slug] | order(_updatedAt desc) [0]{
  ...,
  ${contentQuery},
  components[] {
    ...,
    _type == 'textBlockWithSidebar' => {
      ...,
      sidebar {
        ...,
        sections[] {
          ...,
          links[] {
            ...
          }
        }
      }
    }
  },
  relatedArticles[]->{
    ...,
    publisher->,
    primaryCategory->
  },
  publisher->,
  primaryCategory-> {
    ...,
    "url": path
  },
  secondaryCategories[]->, 
  "settings": *[_type == 'postSettings'][0] {
    ...,
    cta->,
    trendingArticles[]->
  },
  ${seoQuery}
}`

// Query for getting posts by category
export const categoryPostsQuery = (categorySlug?: string) => {
  const categoryFilter = categorySlug
    ? `&& primaryCategory->slug.current == "${categorySlug}"`
    : ''

  return `*[_type == 'post' && !(_id in path('drafts.**')) ${categoryFilter}] | order(publishedDate desc) {
    ...,
    primaryCategory->,
    secondaryCategories[]->
  }`
}

// Query for getting all categories with post count
export const categoriesQuery = `*[_type == "categoryPost"] | order(lower(title) asc) {
  ...,
  "postCount": count(*[_type == "post" && !(_id in path('drafts.**')) && references(^._id)])
}`

// Query for getting a single category
export const categoryQuery = `*[_type == 'categoryPost' && slug.current == $slug] [0]{
  ...,
  ${seoQuery}
}`

// Query for getting posts by author/publisher
export const authorPostsQuery = (authorSlug?: string) => {
  const authorFilter = authorSlug
    ? `&& publisher->slug.current == "${authorSlug}"`
    : ''

  return `*[_type == 'post' && !(_id in path('drafts.**')) ${authorFilter}] | order(publishedDate desc) {
    _id,
    title,
    excerpt,
    slug,
    image,
    publishedDate,
    "primaryCategory": primaryCategory->{title, slug},
    "seoDescription": seo.seoDescription
  }`
}

// Query for getting a single author/publisher
export const authorQuery = `*[_type == 'publisher' && slug.current == $slug] [0]{
  _id,
  title,
  slug,
  headshot,
  jobTitle,
  bioShort,
  bioLong,
  email,
  linkedInUrl,
  ${seoQuery}
}`

// Query for getting all authors (optimized - only essential fields)
export const authorsQuery = `*[_type == "publisher"] | order(lower(title) asc) {
  _id,
  title,
  slug,
  "postCount": count(*[_type == "post" && !(_id in path('drafts.**')) && references(^._id)])
}`

export type { BlogQueryProps }

