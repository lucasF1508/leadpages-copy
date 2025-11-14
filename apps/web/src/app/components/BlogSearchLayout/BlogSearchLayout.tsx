'use client'

import React, { useState, useEffect } from 'react'
import BlogCard from '@/components/BlogCard/BlogCard'
import Link from '@/components/Link'
import { useRouter } from 'next/navigation'

interface Post {
  _id: string
  title: string
  excerpt?: string
  slug: { current: string }
  image?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  publishedDate?: string
  primaryCategory?: {
    title: string
    slug: { current: string }
    url?: string
  }
  publisher?: {
    name: string
  }
}

interface Category {
  _id: string
  title: string
  slug: { current: string }
  postCount: number
}

interface BlogSearchLayoutProps {
  posts: Post[]
  categories: Category[]
  initialSearchTerm?: string
}

const BlogSearchLayout = ({ posts, categories, initialSearchTerm = '' }: BlogSearchLayoutProps) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Update URL with search query
  useEffect(() => {
    if (searchTerm) {
      const params = new URLSearchParams()
      params.set('q', searchTerm)
      router.replace(`/blog/search?${params.toString()}`, { scroll: false })
    }
  }, [searchTerm, router])

  // Filter posts based on search and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      !selectedCategory || post.primaryCategory?.slug.current === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0E13' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-400">
            <li>
              <Link condition="internal" url="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">Search</li>
          </ol>
        </nav>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-2xl px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              autoFocus
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setSelectedCategory(category.slug.current)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.slug.current
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          {!searchTerm ? (
            <p>Enter a search term to find articles.</p>
          ) : filteredPosts.length === 0 ? (
            <p>No articles found matching "{searchTerm}".</p>
          ) : (
            <p>
              Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}{' '}
              matching "{searchTerm}"
            </p>
          )}
        </div>

        {/* Blog Grid */}
        {searchTerm && filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post._id}
                _key={post._id}
                title={post.title}
                excerpt={post.excerpt || ''}
                slug={post.slug.current}
                featuredImage={post.image as any}
                featuredImageAlt={post.image?.alt}
                publishedDate={post.publishedDate || ''}
                author={post.publisher?.name || 'Anonymous'}
                category={post.primaryCategory?.title || 'Uncategorized'}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogSearchLayout

