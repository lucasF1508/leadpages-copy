'use client'

import type { BlogCategory, PopularPost } from './BlogSection.types'
import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'
import Media from '@/components/Media'

interface BlogSidebarProps {
  categories?: BlogCategory[]
  categoriesHeading?: string
  onCategoryChange?: (category: null | string) => void
  onSearchChange?: (query: string) => void
  popularPosts?: PopularPost[]
  popularPostsHeading?: string
  searchPlaceholder?: string
  searchQuery?: string
  selectedCategory?: null | string
  sidebarImage?: {
    alt?: string
    asset?: any
    height?: number
    src?: string
    width?: number
  }
}

const BlogSidebar = ({
  categories = [],
  categoriesHeading = 'CATEGORIES',
  onCategoryChange,
  onSearchChange,
  popularPosts = [],
  popularPostsHeading = 'Popular Posts',
  searchPlaceholder = 'Search our blog...',
  searchQuery = '',
  selectedCategory = null,
  sidebarImage,
}: BlogSidebarProps) => (
    <aside className="flex flex-col gap-6 rounded-md py-4 lg:py-6 z-dropdown max-h-[calc(100dvh-2rem)] overflow-scroll scrollbar-hide">
      {/* Search filter */}
      <div className="px-3 lg:px-4">
        <div className="relative">
          <input
            className="w-full px-2.5 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            style={{ backgroundColor: 'rgba(82, 79, 95, 0.05)' }}
            type="text"
            value={searchQuery}
          />
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
            <svg
              className="w-3.5 h-3.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Optional promo/image */}
      {sidebarImage && (
        <div className="px-3 lg:px-4">
          <div className="relative w-full rounded-lg overflow-hidden">
            <Media
              className="w-full h-auto"
              media={{ condition: 'image', image: sidebarImage }}
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </div>
        </div>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <div className="flex flex-col gap-2">
          <h4 className="type-overline-sm px-3 lg:px-4 text-gray-900 font-semibold uppercase tracking-wider">
            {categoriesHeading}
          </h4>

          {/* 2-column grid. Rows auto-height so long labels don’t get cramped */}
          <div className="grid grid-cols-1">
            {/* All Categories (left column, first row) */}
            <div className="flex flex-col divide-y divide-white/10">
              <div className="px-3 lg:px-4 py-2">
                <button
                  className="type-body-xs transition-colors block text-left w-full leading-snug break-normal whitespace-normal"
                  onClick={() => onCategoryChange?.(null)}
                  style={{
                    color: selectedCategory === null ? '#7C3AED' : '#E4D1FF',
                    fontWeight: selectedCategory === null ? 600 : 400,
                    hyphens: 'none',
                  }}
                >
                  All Categories
                </button>
              </div>
              <div
                className="mx-3 lg:mx-4"
                style={{
                  background:
                    'linear-gradient(to right, rgba(156,163,175,0) 0%, rgba(156,163,175,0.6) 50%, rgba(156,163,175,0) 100%)',
                  height: 1,
                }}
              />
            </div>

            {/* Category items (auto height + gradient separators) */}
            {categories.map((category, idx) => {
              // Glue "&" to the following word but allow a break before "&"
              const label = category.name?.replace(/ & /g, ' &\u00A0') ?? ''
              const isSelected = selectedCategory === category.name
              const isLast = idx === categories.length - 1

              return (
                <div className="flex flex-col" key={category._key}>
                  <div className="px-3 lg:px-4 py-2">
                    <button
                      className={clsx(
                        'type-body-xs transition-colors block text-left w-full leading-snug break-normal whitespace-normal'
                        // add 'line-clamp-2' if you want to cap to 2 lines
                      )}
                      onClick={() => onCategoryChange?.(category.name)}
                      style={{
                        color: isSelected ? '#7C3AED' : '#E4D1FF',
                        fontWeight: isSelected ? 600 : 400,
                        hyphens: 'none',
                      }}
                    >
                      {label}
                    </button>
                  </div>
                  {/* gradient separator, hidden on last */}
                  <div
                    className={clsx('mx-3 lg:mx-4', isLast && 'hidden')}
                    style={{
                      background:
                        'linear-gradient(to right, rgba(156,163,175,0) 0%, rgba(156,163,175,0.6) 50%, rgba(156,163,175,0) 100%)',
                      height: 1,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Popular posts (kept from pulled changes, adjusted to our styling) */}
      {popularPosts.length > 0 && (
        <div className="flex flex-col gap-4 mt-4">
          {/* Header with trending icon */}
          <div className="flex items-center gap-2 px-3 lg:px-4">
            <h4
              className="type-body font-semibold uppercase tracking-wider"
              style={{ color: '#FFFFFF' }}
            >
              {popularPostsHeading}
            </h4>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 14L6 10L9 13L14 2"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M10 2H14V6"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Posts list */}
          <div className="flex flex-col gap-4">
            {popularPosts.slice(0, 4).map((post) => (
              <div className="px-3 lg:px-4" key={post._key}>
                <Link
                  className="flex gap-2.5 transition-opacity hover:opacity-80 cursor-pointer"
                  condition="internal"
                  hasIcon={false}
                  linkStyle="none"
                  url={post.url}
                >
                  {post.image && (
                    <div className="flex-shrink-0 w-14 h-14 rounded-md overflow-hidden">
                      <Media
                        className="w-full h-full object-cover"
                        media={{ condition: 'image', image: post.image }}
                        sizes="56px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h5
                      className="type-body-xs"
                      style={{ color: '#FFFFFF', lineHeight: '1.4' }}
                    >
                      {post.title}
                    </h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  )

export default BlogSidebar
