'use client'

import React, { useState } from 'react'
import BlogFeatureCard from '@/components/BlogCard/BlogFeatureCard'
import Image from '@/components/Image'
import Link from '@/components/Link'
import PortableText from '@/components/PortableText'

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

interface Author {
  _id: string
  title: string
  slug: { current: string }
  headshot?: {
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  jobTitle?: string
  bioShort?: any[]
  bioLong?: any[]
  email?: string
  linkedInUrl?: string
  postCount?: number
}

interface BlogAuthorLayoutProps {
  author: Author
  posts: Post[]
}

const BlogAuthorLayout = ({ author, posts }: BlogAuthorLayoutProps) => {
  // State for pagination - initially show 9 posts
  const [displayCount, setDisplayCount] = useState<number>(9)
  
  // Apply display limit
  const displayPosts = posts.slice(0, displayCount)
  const hasMorePosts = posts.length > displayCount
  
  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 9)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0E13' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-12">
        {/* Header - BLOG / AUTHOR NAME */}
        <header className="text-center mb-12">
          <p 
            className="mb-8 uppercase tracking-widest type-overline-xs"
            style={{
              color: '#9D9AA7',
              fontWeight: 500
            }}
          >
            <Link
              condition="internal"
              url="/blog"
              className="hover:underline"
              hasIcon={false}
              linkStyle="none"
              style={{ color: '#9D9AA7' }}
            >
              BLOG
            </Link>
            {' / '}
            {author.title?.toUpperCase()}
          </p>

          {/* Profile Picture - Centered */}
          {author.headshot && (
            <div className="flex justify-center mb-6">
              <Image
                image={author.headshot}
                alt={author.headshot.alt || author.title}
                sizes="80px"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          )}

          {/* Author Name - Centered, Large, Bold */}
          <h1 
            className="type-title-t5 mb-3"
            style={{ 
              color: '#FFFFFF',
              fontWeight: 700
            }}
          >
            {author.title}
          </h1>

          {/* Job Title - Centered */}
          {author.jobTitle && (
            <p className="type-body mb-6" style={{ color: '#FFFFFF' }}>
              {author.jobTitle}
            </p>
          )}

          {/* Biography - Centered */}
          {author.bioLong && author.bioLong.length > 0 && (
            <div className="max-w-3xl mx-auto type-body" style={{ color: '#DBD8E4' }}>
              <PortableText content={author.bioLong} />
            </div>
          )}
          {author.bioShort && !author.bioLong && author.bioShort.length > 0 && (
            <div className="max-w-3xl mx-auto type-body" style={{ color: '#DBD8E4' }}>
              <PortableText content={author.bioShort} />
            </div>
          )}
        </header>

        {/* Posts Grid - 3 columns */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '35px' }}
        >
          {displayPosts.map((post) => (
            <BlogFeatureCard
              key={post._id}
              item={{
                _key: post._id,
                _id: post._id,
                title: post.title,
                excerpt: post.excerpt || (post as any).seoDescription || (post as any).seo?.seoDescription || '',
                href: `/blog/${post.slug.current}`,
                image: post.image,
                publishedDate: post.publishedDate || '',
                author: author.title,
                tag: post.primaryCategory?.title || '',
                category: post.primaryCategory?.title || '',
              }}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="link-button-solid"
            >
              Load More Posts →
            </button>
          </div>
        )}

        {displayPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="type-body" style={{ color: '#9D9AA7' }}>No articles found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogAuthorLayout

