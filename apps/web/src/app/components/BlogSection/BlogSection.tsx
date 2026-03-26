'use client'

import type { BlogSectionProps, BlogCard, SanityPost, BlogCategory } from './BlogSection.types'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Text from '@/components/Text'
import BlogFeatureCard from '../BlogCard/BlogFeatureCard'
import BlogSidebar from './BlogSidebar'
import Media from '@/components/Media'
import { LinkIcon } from '@/components/Link'

type Props = BlogSectionProps & {
  excludedTags?: any[]
}

/**
 * Normalize a string for robust matching:
 * - lowercase
 * - remove diacritics
 * - trim whitespace
 */
const norm = (s?: string | null) =>
  (s ?? '')
    .toLowerCase()
    .normalize('NFD')           
    .replace(/[\u0300-\u036f]/g, '') 
    .trim()

/**
 * Try to extract a `"value":"..."` from a JSON-looking string.
 * Defensive fallback for edge cases where a string might contain serialized objects.
 */
const tryExtractValueFromJsonyString = (s?: string | null) => {
  if (!s || typeof s !== 'string') return null
  const m = s.match(/"value"\s*:\s*"([^"]+)"/)
  return m?.[1] ?? null
}

/**
 * Extract normalized tag values from a post.
 * Checks common fields: value, label, slug.current, and also tries to parse stringified JSON.
 */
function getTagValues(p: any): string[] {
  const source = Array.isArray(p?.tags)
    ? p.tags
    : Array.isArray(p?.rawTags)
    ? p.rawTags
    : [];
  const out: string[] = [];

  for (const t of source) {
    if (!t) continue;

    if (typeof t === 'string') {
      const v1 = norm(t);
      if (v1) out.push(v1);
      const extracted = tryExtractValueFromJsonyString(t);
      if (extracted) out.push(norm(extracted));
      continue;
    }

    if (typeof t === 'object') {
      const candidates = [t.value, t.label, t.slug?.current];
      for (const c of candidates) {
        const v = norm(c);
        if (v) out.push(v);
      }
      for (const v of Object.values(t)) {
        if (typeof v === 'string') {
          const ex = tryExtractValueFromJsonyString(v);
          if (ex) out.push(norm(ex));
        }
      }
    }
  }

  return Array.from(new Set(out));
}

/**
 * Build a normalized blocked-tags Set from the excludedTags prop.
 * Accepts both strings and objects, normalizes consistently with getTagValues.
 */
function normalizeBlocked(arr: any[] = []): Set<string> {
  const out: string[] = [];

  for (const t of arr) {
    if (!t) continue;

    if (typeof t === 'string') {
      const v1 = norm(t);
      if (v1) out.push(v1);
      const extracted = tryExtractValueFromJsonyString(t);
      if (extracted) out.push(norm(extracted));
      continue;
    }

    if (typeof t === 'object') {
      const candidates = [t.value, t.label, t.slug?.current];
      for (const c of candidates) {
        const v = norm(c);
        if (v) out.push(v);
      }
      for (const v of Object.values(t)) {
        if (typeof v === 'string') {
          const ex = tryExtractValueFromJsonyString(v);
          if (ex) out.push(norm(ex));
        }
      }
    }
  }

  return new Set(out);
}

function formatCardDate(publishedDate?: string): string {
  if (!publishedDate) return ''
  return new Date(publishedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/** Map a Sanity Post into a BlogCard for the grid component */
function convertPostToBlogCard(post: SanityPost): BlogCard {
  return {
    _key: post._key || post._id,
    _id: post._id,
    title: post.title || '',
    author: post.publisher?.title || post.publisher?.name || 'Leadpages Team',
    excerpt: post.excerpt || (post as any).seoDescription || post.seo?.seoDescription || '',
    href: `/blog/${post.slug?.current || ''}`,
    image: post.image,
    publishedDate: post.publishedDate || '',
    category: post.primaryCategory?.title || '',
    tag: post.primaryCategory?.title || '',
  }
}

/** Convert popular posts to a minimal shape for the sidebar list */
function convertPopularPosts(posts: any[]): any[] {
  if (!posts || !posts.length) return []
  return posts
    .filter(Boolean)
    .map((post) => {
      if (post?.slug?.current) {
        return {
          _key: post._key || post._id,
          _id: post._id,
          title: post.title,
          url: `/blog/${post.slug.current}`,
          image: post.image,
        }
      }
      return post
    })
}

/**
 * BlogSection:
 * - Filters posts by excludedTags (matches any tag.value/label/slug.current)
 * - Supports optional category & search filtering via UI
 * - Renders main grid + optional sidebar (popular posts & categories)
 */
export default function BlogSection(props: Props) {
  const {
    className,
    mainTitle,
    image,
    pill,
    heading,
    items,
    posts,
    postsLimit,
    subheading,
    enableSidebar = false,
    searchPlaceholder,
    sidebarImage,
    categoriesHeading,
    categorySelection = 'automatic',
    categories,
    autoCategories,
    popularPostsHeading,
    popularPosts,
    mainHeroPost,
    excludedTags = [],
  } = props

  // State for filters and pagination (UI state for category and search filters)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')
  const initialLimit = postsLimit || 9
  const [displayCount, setDisplayCount] = useState<number>(initialLimit)
  const [additionalPosts, setAdditionalPosts] = useState<SanityPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMoreFromServer, setHasMoreFromServer] = useState(true)

  // Build excluded tag set and filter posts by those tags
  const EXCLUDED = normalizeBlocked(excludedTags)
  
  // Combine initial posts with dynamically loaded posts
  const allPosts = [...(posts ?? []), ...additionalPosts]
  const safePosts = allPosts.filter(Boolean)
  const filteredPostsData = safePosts.filter((p) => {
    const tags = getTagValues(p)
    const matched = tags.some((t) => EXCLUDED.has(t))
    return !matched
  })

  // Final cards (fallback to `items` if no posts available)
  const allBlogCards: BlogCard[] =
    filteredPostsData.length ? filteredPostsData.map(convertPostToBlogCard) : (items ?? [])

  // Popular posts (apply the same exclusion logic)
  const filteredPopular = (popularPosts ?? []).filter((p: any) => !getTagValues(p).some((t) => EXCLUDED.has(t)))
  const convertedPopularPosts = convertPopularPosts(filteredPopular)

  // Build categories (automatic or provided)
  const finalCategories: BlogCategory[] =
    categorySelection === 'automatic' && autoCategories
      ? autoCategories
          .filter((cat) => cat && cat.slug && cat.slug.current)
          .reduce<BlogCategory[]>((acc, cat) => {
            if (!acc.some((c) => c.name === cat.title)) {
              acc.push({
                _key: cat._id,
                name: cat.title,
                url: `/blog/category/${cat.slug.current}`,
              })
            }
            return acc
          }, [])
      : categories || []

  /**
   * Apply UI filters:
   * - Category filter (strict match by displayed category name)
   * - Search filter (title/excerpt contains query)
   */
  const filteredCards: BlogCard[] = allBlogCards.filter((card) => {
    const matchesCategory = !selectedCategory || card.category === selectedCategory
    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !q ||
      card.title?.toLowerCase().includes(q) ||
      card.excerpt?.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  const mainHeroSanity =
    mainHeroPost &&
    !getTagValues(mainHeroPost).some((t) => EXCLUDED.has(t))
      ? mainHeroPost
      : null
  const selectedMainCard = mainHeroSanity ? convertPostToBlogCard(mainHeroSanity) : null

  const heroMainTitle = selectedMainCard?.title ?? mainTitle
  const heroImage = selectedMainCard?.image ?? image
  const displayPill = selectedMainCard?.category ?? pill
  const displayHeading = selectedMainCard
    ? [selectedMainCard.author, formatCardDate(selectedMainCard.publishedDate)].filter(Boolean).join(' · ') ||
      heading
    : heading
  const usePostExcerptHero = Boolean(selectedMainCard?.excerpt?.trim())

  // Apply display limit for pagination
  const blogCards = filteredCards.slice(0, displayCount)
  const hasMoreInMemory = filteredCards.length > displayCount
  const hasMorePosts = hasMoreInMemory || (hasMoreFromServer && !selectedCategory && !searchQuery)
  
  const handleLoadMore = async () => {
    // If we still have posts in memory, just show more
    if (hasMoreInMemory) {
      setDisplayCount(prev => prev + initialLimit)
      return
    }
    
    // Otherwise, fetch more from the server
    if (!hasMoreFromServer || isLoading) return
    
    setIsLoading(true)
    try {
      const offset = allPosts.length
      const params = new URLSearchParams({
        offset: offset.toString(),
        limit: '100', // Fetch 100 more posts
        selection: props.postSelection || 'latest',
      })
      
      const response = await fetch(`/api/blog/posts?${params}`)
      const data = await response.json()
      
      if (data.posts && data.posts.length > 0) {
        setAdditionalPosts(prev => [...prev, ...data.posts])
        setHasMoreFromServer(data.hasMore)
        setDisplayCount(prev => prev + initialLimit)
      } else {
        setHasMoreFromServer(false)
      }
    } catch (error) {
      console.error('Failed to load more posts:', error)
      setHasMoreFromServer(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Nothing to render
  if (!allBlogCards.length) {
    return null
  }

  // Render
  return (
    <section
      className={clsx('', className)}
      style={{
        backgroundColor: 'rgba(82, 79, 95, 0.1)',
        paddingTop: '0px',
        paddingBottom: '70px',
        maxWidth: '1440px',
        margin: '-20px auto 0 auto',
        width: '100%',
      }}
    >
      <div className="px-4 md:px-8" style={{ paddingTop: '40px' }}>
        <div className={clsx('flex flex-col gap-6', enableSidebar ? 'lg:flex-row lg:gap-8' : '')}>
          {/* Main column */}
          <div className="flex-1 flex flex-col" style={{ gap: '35px' }}>
            {(heroMainTitle || heroImage) && (
              <div className="text-left">
                {heroMainTitle && (
                  <h1
                    className="mb-4"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      lineHeight: '1.1',
                      color: '#C4B5FD',
                    }}
                  >
                    {heroMainTitle}
                  </h1>
                )}
                {heroImage && (
                  <div className="relative w-full" style={{ maxWidth: '800px' }}>
                    <Media
                      media={{ condition: 'image', image: heroImage }}
                      sizes="(max-width: 800px) 100vw, 800px"
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Section header */}
            <div className="text-left" style={{ maxWidth: enableSidebar ? '100%' : '50%' }}>
              {displayPill && (
                <div className="inline-flex py-0.5 rounded-lg bg-gradient-purple-invert px-1.5 mb-3">
                  <span className="type-overline-xs text-light pt-[0.125rem] uppercase tracking-wider">
                    {displayPill}
                  </span>
                </div>
              )}
              {displayHeading && (
                <h2 className="type-h2 md:type-h1 text-gray-900 mb-2">{displayHeading}</h2>
              )}
              {usePostExcerptHero && selectedMainCard?.excerpt ? (
                <p className="type-body-sm text-gray-600">{selectedMainCard.excerpt}</p>
              ) : (
                subheading && <Text className="type-body-sm text-gray-600" content={subheading} />
              )}
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: '35px' }}>
              {blogCards.map((item, index) => (
                <BlogFeatureCard key={item._key || item._id || index} item={item} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMorePosts && (
              <div className="flex justify-center mt-8">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="link-button-solid link-w-icon [&_.link-icon-background]:hidden"
                  disabled={isLoading}
                >
                  <span className="link-label">{isLoading ? 'Loading...' : 'Load More Posts'}</span>
                  {!isLoading && (
                    <span className="link-icon">
                      <span className="link-icon-background" />
                      <LinkIcon />
                    </span>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          {enableSidebar && (
            <div className="flex-[0_0_auto] w-full lg:w-[20rem]">
              <div className="lg:sticky lg:top-4">
                <BlogSidebar
                  searchPlaceholder={searchPlaceholder}
                  sidebarImage={sidebarImage}
                  categoriesHeading={categoriesHeading}
                  categories={finalCategories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  /** Pass search state down so the sidebar can render a search input */
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  popularPostsHeading={popularPostsHeading}
                  popularPosts={convertedPopularPosts}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
