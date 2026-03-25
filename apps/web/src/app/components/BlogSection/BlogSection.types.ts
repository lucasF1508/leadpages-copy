// components/blog/BlogSection.types.ts

export type BlogCard = {
  _key?: string
  _id?: string
  title?: string
  author?: string
  excerpt?: string
  href?: string
  url?: string
  // Puede venir como {src,...} o como objeto Sanity con asset
  image?: { alt?: string; asset?: any; height?: number; src?: string; width?: number }
  publishedDate?: string
  date?: string
  tag?: string
  category?: string
}

// Post type from Sanity
export type SanityPost = {
  _id: string
  _key?: string
  title?: string
  excerpt?: string
  slug?: { current: string }
  image?: {
    asset?: any
    alt?: string
    altText?: string
    lqip?: string
  }
  publishedDate?: string
  primaryCategory?: {
    title?: string
    slug?: { current: string }
  }
  publisher?: {
    title?: string
    name?: string
    slug?: { current: string }
  }
  seo?: {
    seoDescription?: string
    seoTitle?: string
  }
}

export type BlogCategory = {
  _key: string
  name: string
  url: string
}

export type PopularPost = {
  _key?: string
  _id?: string
  title: string
  url?: string
  slug?: { current: string }
  image?: { alt?: string; asset?: any; height?: number; src?: string; width?: number }
}

export type BlogSectionProps = {
  className?: string
  mainTitle?: string
  image?: { alt?: string; asset?: any; height?: number; src?: string; width?: number }
  pill?: string
  heading: string
  /** Post marked in Sanity (blogSectionMainHero); drives hero when set and not excluded by tags. */
  mainHeroPost?: SanityPost | null
  items?: BlogCard[] // Legacy support
  posts?: SanityPost[] // New posts from Sanity
  postSelection?: 'manual' | 'category' | 'latest' | 'trending' // Post selection method
  postsLimit?: number // Limit how many posts to display
  subheading?: string
  enableSidebar?: boolean
  searchPlaceholder?: string
  sidebarImage?: { alt?: string; asset?: any; height?: number; src?: string; width?: number }
  categoriesHeading?: string
  categorySelection?: 'automatic' | 'manual'
  categories?: BlogCategory[] // Manual categories
  autoCategories?: Array<{ // Automatic categories from Sanity
    _id: string
    title: string
    slug: { current: string }
    postCount: number
  }>
  popularPostsHeading?: string
  popularPosts?: PopularPost[]
}
