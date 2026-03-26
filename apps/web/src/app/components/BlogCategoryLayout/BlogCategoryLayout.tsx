'use client'

import React, { useState } from 'react'
import BlogCard from '@/components/BlogCard/BlogCard'
import Link from '@/components/Link'

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
  postCount?: number
  hero?: any
  seo?: any
}

interface BlogCategoryLayoutProps {
  category: Category
  posts: Post[]
  categories: Category[]
}

const BlogCategoryLayout = ({ category, posts, categories }: BlogCategoryLayoutProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Filter posts based on search
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesSearch
  })

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0E13' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-400">
            <li>
              <Link condition="internal" url="/blog" hasIcon={false} className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">{category.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder={`Search ${category.title} articles...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {/* Results Count */}
            <div className="mb-6 text-gray-400">
              {filteredPosts.length === 0 ? (
                <p>No articles found matching your criteria.</p>
              ) : (
                <p>
                  Showing {filteredPosts.length}{' '}
                  {filteredPosts.length === 1 ? 'article' : 'articles'}
                </p>
              )}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  category={post.primaryCategory?.title || category.title}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    condition="internal"
                    url="/blog"
                    hasIcon={false}
                    className="block px-4 py-2 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
                  >
                    All Articles
                  </Link>
                </li>
                {categories.filter(cat => cat && cat.slug && cat.slug.current).map((cat) => (
                  <li key={cat._id}>
                    <Link
                      condition="internal"
                      url={`/blog/category/${cat.slug.current}`}
                      hasIcon={false}
                      className={`group relative flex items-center justify-between gap-3 px-4 py-2 rounded transition-colors ${
                        cat.slug.current === category.slug.current
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span className="truncate" title={cat.title}>
                        {cat.title}
                      </span>
                      {cat.postCount !== undefined && (
                        <span className="text-sm opacity-75 tabular-nums shrink-0">
                          {cat.postCount}
                        </span>
                      )}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 right-4 top-full mt-1 z-20 hidden rounded-md bg-[#1d1a29] px-2.5 py-1.5 text-xs leading-snug text-white shadow-lg ring-1 ring-white/10 group-hover:block group-focus-within:block"
                      >
                        {cat.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default BlogCategoryLayout

