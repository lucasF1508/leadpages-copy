'use client'

import React from 'react'
import clsx from 'clsx'
import Media from '@/components/Media'
import Link from '@/components/Link'

export interface BlogCardProps {
  _key: string
  author: string
  category: string
  excerpt?: string
  featuredImage: {
    altText?: string
    asset: {
      _ref: string
      _type: string
    }
  }
  featuredImageAlt?: string
  publishedDate: string
  slug: string
  title: string
}

const BlogCard = ({
  author,
  category,
  excerpt,
  featuredImage,
  featuredImageAlt,
  publishedDate,
  slug,
  title,
}: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).toUpperCase()
  }

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
      {/* Featured Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <Media
          media={{
            condition: 'image',
            image: featuredImage,
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-400">
            POSTED {formatDate(publishedDate)}
          </span>
          <span className="text-sm text-gray-400">
            {author.toUpperCase()}
          </span>
        </div>

        {/* Category */}
        <div className="mb-3">
          <span className="text-sm font-semibold text-purple-500 uppercase">
            {category.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-4 leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {excerpt}
          </p>
        )}

        {/* Read More Button */}
        <Link
          condition="internal"
          url={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-white hover:text-green-400 transition-colors"
        >
          <span className="border-b-2 border-green-500 pb-1">
            Read More
          </span>
          <span className="text-green-500">→</span>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
