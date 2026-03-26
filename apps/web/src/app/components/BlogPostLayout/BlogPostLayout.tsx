'use client'

import React, { useState } from 'react'
import Media from '@/components/Media'
import { PortableText as PTReact } from '@portabletext/react'
import Link from '@/components/Link'
import Rack from '@/components/Rack'
import SocialMedia from '@/components/SocialMedia'
import RelatedContent from '@/components/RelatedContent'
import SubFooter from '@/components/SubFooter'
import StartATrial from '@/components/StartATrial'
import StartATrialType from '@/components/PortableText/components/StartATrial'
import TableType from '@/components/PortableText/components/Table'
import InlineCTAType from '@/components/PortableText/components/InlineCTA'
import EmbedType from '@/components/PortableText/components/Embed'
import JavaScriptEmbedType from '@/components/PortableText/components/JavaScriptEmbed'
import AudioType from '@/components/PortableText/components/Audio'
import CardsPreviousNextType from '@/components/PortableText/components/CardsPreviousNext'
import DropShadowBoxType from '@/components/PortableText/components/DropShadowBox'

interface BlogPostLayoutProps {
  post: {
    title: string
    excerpt?: string
    image?: {
      asset: {
        _ref: string
        _type: string
      }
      alt?: string
      altText?: string
    }
    content?: any[]
    publishedDate?: string
    _updatedAt?: string
    primaryCategory?: {
      title: string
      slug: { current: string }
      url?: string
    }
    secondaryCategories?: Array<{
      title: string
      slug: { current: string }
    }>
    publisher?: {
      name: string
      title?: string
      slug?: { current: string }
    }
    relatedArticles?: any[]
    settings?: any
    components?: any[]
    hero?: any
  }
}

const BlogPostLayout = ({ post }: BlogPostLayoutProps) => {
  const {
    title,
    excerpt,
    image,
    content,
    publishedDate,
    primaryCategory,
    secondaryCategories,
    publisher,
    components,
    hero,
  } = post

  const formatDate = (dateString?: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  // Auto-generate sidebar from content headings
  const generateSidebarFromContent = (content?: any[]) => {
    if (!content || content.length === 0) return null

    // Extract all H2 and H3 headings from content
    const headings = content
      .filter(
        (block) =>
          block._type === 'block' &&
          (block.style === 'h2' || block.style === 'h3')
      )
      .map((block, index) => {
        const text =
          block.children?.map((child: any) => child.text).join('') || ''
        const slug = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
        return {
          _key: block._key || `heading-${index}`,
          _type: 'link',
          condition: 'anchor' as const,
          text,
          url: `#${slug}`,
        }
      })
      .filter((heading) => heading.text)

    if (headings.length === 0) return null

    return {
      heading: 'In This Article',
      sections: [
        {
          heading: '',
          links: headings,
        },
      ],
    }
  }

  // Check if post has components (like textBlockWithSidebar)
  const hasComponents = components && components.length > 0

  // If post has components, render them using Rack (respects Sanity styling)
  if (hasComponents) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0F0E13' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-400">
              <li>
                <Link
                  condition="internal"
                  url="/blog"
                  className="hover:text-white"
                  hasIcon={false}
                  linkStyle="none"
                >
                  Blog
                </Link>
              </li>
              {primaryCategory && (
                <>
                  <li>/</li>
                  <li>
                    <Link
                      condition="internal"
                      url={
                        primaryCategory.url ||
                        `/blog/category/${primaryCategory.slug.current}`
                      }
                      className="hover:text-white"
                      hasIcon={false}
                      linkStyle="none"
                    >
                      {primaryCategory.title}
                    </Link>
                  </li>
                </>
              )}
              <li>/</li>
              <li className="text-white">{title}</li>
            </ol>
          </nav>

          {/* Render components dynamically */}
          <Rack components={components} />
        </div>
      </div>
    )
  }

  // Default layout (fallback) - Use TextWithSidebar with auto-generated sidebar
  const autoSidebar = generateSidebarFromContent(content)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0E13' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-12">
        {/* LAYOUT: Left sidebar (desktop) + Right content */}
        <div className="flex flex-col md:flex-row items-start gap-4 lg:gap-8">
          {/* Sidebar Desktop - LEFT side, sticky, hidden on mobile */}
          {autoSidebar && (
            <aside className="hidden md:flex flex-[0_0_auto] w-[15.6rem] lg:w-[20rem] sticky top-2 gap-3 flex-col rounded-md bg-surface-muted border border-surface-neutral-medium py-4 lg:py-6 max-h-[calc(100dvh-2rem)] overflow-scroll scrollbar-hide">
              <h4 className="type-h4 lg:type-h3 px-3 lg:px-4">
                {autoSidebar.heading}
              </h4>
              {autoSidebar.sections.map(({ links }, sectionIdx) => (
                <div className="flex flex-col gap-3" key={sectionIdx}>
                  {links?.map((link) => (
                    <div className="relative px-3 lg:px-4" key={link._key}>
                      <a
                        href={link.url}
                        className="type-body-sm lg:type-body relative hover:text-button-text-inline transition-colors block"
                      >
                        {link.text}
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </aside>
          )}

          {/* Main Content Column - RIGHT side on desktop, full width on mobile */}
          <div className="flex-1 w-full">
            {/* Header */}
            <header className="mb-8">
              {/* Category - Small uppercase */}
              {primaryCategory && (
                <p
                  className="mb-4 uppercase tracking-widest type-overline-xs"
                  style={{
                    color: '#9D9AA7',
                    fontWeight: 500,
                  }}
                >
                  <a
                    href="/blog"
                    className="hover:underline transition-colors cursor-pointer"
                    style={{ color: '#9D9AA7' }}
                  >
                    BLOG
                  </a>
                  {' / '}
                  {primaryCategory.title.toUpperCase()}
                </p>
              )}

              {/* Title */}
              <h1
                className="type-title-t5 mb-6"
                style={{
                  color: '#E4D1FF',
                  fontWeight: 700,
                  letterSpacing: 0,
                }}
              >
                {title}
              </h1>

              {/* Meta Info */}
              <div
                className="flex flex-wrap items-center gap-2 mb-8 type-body-sm"
                style={{ color: '#9D9AA7' }}
              >
                {/* Leadpages violet logo */}
                <img
                  src="/favicon-32x32.png"
                  alt="Leadpages"
                  width={20}
                  height={20}
                  style={{
                    width: 20,
                    height: 20,
                    objectFit: 'contain',
                    borderRadius: 4,
                  }}
                />
                <span>
                  By{' '}
                  {publisher?.slug?.current ? (
                    <Link
                      condition="internal"
                      url={`/blog/author/${publisher.slug.current}`}
                      className="transition-colors hover:underline"
                      hasIcon={false}
                      linkStyle="none"
                      style={{ color: '#9D9AA7' }}
                    >
                      {publisher?.name ||
                        publisher?.title ||
                        'The Leadpages Team'}
                    </Link>
                  ) : (
                    <span>
                      {publisher?.name ||
                        publisher?.title ||
                        'The Leadpages Team'}
                    </span>
                  )}
                </span>
                {publishedDate && (
                  <>
                    <span>|</span>
                    <span>Published {formatDate(publishedDate)}</span>
                  </>
                )}
                {post._updatedAt && (
                  <>
                    <span>|</span>
                    <span>Updated {formatDate(post._updatedAt)}</span>
                  </>
                )}
              </div>
            </header>

            {/* Sidebar Mobile - Collapsible, BEFORE image, sticky */}
            {autoSidebar && (
              <div className="md:hidden mb-8 sticky top-2 z-dropdown">
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-md bg-surface-muted border border-surface-neutral-medium"
                  style={{ color: '#FFFFFF' }}
                >
                  <span className="type-body font-medium">{autoSidebar.heading}</span>
                  <svg
                    className="w-5 h-5 transition-transform"
                    style={{ transform: isSidebarOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isSidebarOpen && (
                  <div className="mt-2 rounded-md bg-surface-muted border border-surface-neutral-medium p-4">
                    {autoSidebar.sections.map(({ links }, sectionIdx) => (
                      <div className="flex flex-col gap-2" key={sectionIdx}>
                        {links?.map((link) => (
                          <a
                            key={link._key}
                            href={link.url}
                            className="type-body-sm hover:text-button-text-inline transition-colors block py-1"
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Featured Image */}
            {image && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <Media
                  media={{
                    condition: 'image',
                    image: image,
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            {content && content.length > 0 ? (
              <PTReact
                value={content}
                components={{
                  block: {
                    h1: ({ children, value }: any) => {
                      const text =
                        value.children
                          ?.map((child: any) => child.text)
                          .join('') || ''
                      const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '')
                      return (
                        <h1
                          id={id}
                          className="type-h1 mb-6 scroll-mt-20"
                          style={{ color: '#FFFFFF' }}
                        >
                          {children}
                        </h1>
                      )
                    },
                    h2: ({ children, value }: any) => {
                      const text =
                        value.children
                          ?.map((child: any) => child.text)
                          .join('') || ''
                      const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '')
                      return (
                        <h2
                          id={id}
                          className="type-h2 mb-4 mt-8 scroll-mt-20"
                          style={{ color: '#FFFFFF' }}
                        >
                          {children}
                        </h2>
                      )
                    },
                    h3: ({ children, value }: any) => {
                      const text =
                        value.children
                          ?.map((child: any) => child.text)
                          .join('') || ''
                      const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '')
                      return (
                        <h3
                          id={id}
                          className="type-h3 mb-3 mt-6 scroll-mt-20"
                          style={{ color: '#FFFFFF' }}
                        >
                          {children}
                        </h3>
                      )
                    },
                    h4: ({ children }: any) => (
                      <h4
                        className="type-h4 mb-2 mt-4"
                        style={{ color: '#FFFFFF' }}
                      >
                        {children}
                      </h4>
                    ),
                    h5: ({ children }: any) => (
                      <h5
                        className="type-h5 mb-2 mt-3"
                        style={{ color: '#FFFFFF' }}
                      >
                        {children}
                      </h5>
                    ),
                    h6: ({ children }: any) => (
                      <h6
                        className="type-h6 mb-2 mt-3"
                        style={{ color: '#FFFFFF' }}
                      >
                        {children}
                      </h6>
                    ),
                    normal: ({ children }: any) => (
                      <p
                        className="type-body mb-4"
                        style={{ color: '#DBD8E4', lineHeight: '1.8' }}
                      >
                        {children}
                      </p>
                    ),
                  },
                  types: {
                    audio: ({ value }: any) => (
                      <AudioType value={value} />
                    ),
                    cardsPreviousNext: ({ value }: any) => (
                      <CardsPreviousNextType value={value} />
                    ),
                    dropShadowBox: ({ value }: any) => (
                      <DropShadowBoxType value={value} />
                    ),
                    embed: ({ value }: any) => (
                      <EmbedType value={value} />
                    ),
                    inlineCTA: ({ value }: any) => (
                      <InlineCTAType value={value} />
                    ),
                    javascriptEmbed: ({ value }: any) => (
                      <JavaScriptEmbedType value={value} />
                    ),
                    media: ({ value }: any) => {
                      if (!value?.image) return null
                      return (
                        <div
                          className="my-8 rounded-lg overflow-hidden"
                          style={{ maxWidth: '800px' }}
                        >
                          <Media
                            media={{
                              condition: 'image',
                              image: value.image,
                            }}
                            sizes="(max-width: 768px) 100vw, 800px"
                            className="w-full h-auto"
                          />
                        </div>
                      )
                    },
                    schemaInlineCTAGlobalBlock: ({ value }: any) => (
                      <InlineCTAType value={value} />
                    ),
                    startATrial: ({ value }: any) => (
                      <StartATrialType value={value} />
                    ),
                    table: ({ value }: any) => (
                      <TableType value={value} />
                    ),
                  },
                  list: {
                    bullet: ({ children }: any) => (
                      <ul
                        className="type-body list-disc pl-6 mb-4 space-y-2"
                        style={{ color: '#DBD8E4' }}
                      >
                        {children}
                      </ul>
                    ),
                    number: ({ children }: any) => (
                      <ol
                        className="type-body list-decimal pl-6 mb-4 space-y-2"
                        style={{ color: '#DBD8E4' }}
                      >
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }: any) => (
                      <li className="type-body" style={{ color: '#DBD8E4' }}>
                        {children}
                      </li>
                    ),
                    number: ({ children }: any) => (
                      <li className="type-body" style={{ color: '#DBD8E4' }}>
                        {children}
                      </li>
                    ),
                  },
                  marks: {
                    strong: ({ children }: any) => (
                      <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {children}
                      </strong>
                    ),
                    em: ({ children }: any) => (
                      <em style={{ color: '#DBD8E4' }}>{children}</em>
                    ),
                    link: ({ children, value }: any) => {
                      const url = value?.url || value?.href || '#'
                      const isExternal = url.startsWith('http') || (!url.startsWith('/') && !url.startsWith('#'))
                      
                      return (
                        <a
                          href={url}
                          className="transition-colors hover:underline"
                          style={{ color: '#C47FF3' }}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                        >
                          {children}
                        </a>
                      )
                    },
                    sidebarLink: ({ children, value }: any) => {
                      const href = value?.href || value?.url || '#'
                      return (
                        <a
                          href={href}
                          className="transition-colors hover:underline"
                          style={{ color: '#C47FF3' }}
                        >
                          {children}
                        </a>
                      )
                    },
                  },
                }}
              />
            ) : (
              <div className="text-center py-12">
                <p style={{ color: '#9D9AA7', fontSize: '1.125rem' }}>
                  No content available
                </p>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Getting Started Section (before Social Media) */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8">
        <h2
          className="type-title-t6 mb-4"
          style={{ color: '#E4D1FF', fontWeight: 700, letterSpacing: 0 }}
        >
          Getting Started Is Easy
        </h2>
        <div className="space-y-4">
          <p className="type-body" style={{ color: '#DBD8E4' }}>
            Turn generic campaigns into personalized experiences, improve
            targeting, and focus on the right audience effortlessly.
          </p>
          <p className="type-body" style={{ color: '#DBD8E4' }}>
            Audience Insights works with all Leadpages content, including
            landing pages, pop-ups, and websites. All you need is a Leadpages
            account and some traffic. (Please note: It’s not available for
            WordPress-published pages, sub-accounts, or EU-based visitors.)
          </p>
          <p className="type-body" style={{ color: '#DBD8E4' }}>
            <a
              href="/pricing"
              className="underline"
              style={{ color: '#8DE1C7' }}
            >
              Start your Leadpages 14-day free trial today
            </a>
          </p>
          <p className="type-body" style={{ color: '#DBD8E4' }}>
            Already a Leadpages user?{' '}
            <a
              href="/pricing"
              className="underline"
              style={{ color: '#8DE1C7' }}
            >
              Try Audience Insights
            </a>{' '}
            free for 30 days
          </p>
          <p className="type-body" style={{ color: '#DBD8E4' }}>
            and unlock a clearer view of your visitors.
          </p>
          <p className="type-body" style={{ color: '#DBD8E4' }}>
            Welcome to smarter, more effective marketing—seamlessly built into
            Leadpages.
          </p>
        </div>
      </section>

      {/* Social Media Section - Always shown */}
      <SocialMedia
        heading="Share this post"
        icons={[
          {
            _key: 'facebook',
            platform: 'facebook',
            url: 'https://facebook.com/leadpages',
          },
          {
            _key: 'linkedin',
            platform: 'linkedin',
            url: 'https://linkedin.com/company/leadpages',
          },
          {
            _key: 'instagram',
            platform: 'instagram',
            url: 'https://instagram.com/leadpages',
          },
          {
            _key: 'youtube',
            platform: 'youtube',
            url: 'https://youtube.com/leadpages',
          },
          {
            _key: 'pinterest',
            platform: 'pinterest',
            url: 'https://pinterest.com/leadpages',
          },
          { _key: 'x', platform: 'x', url: 'https://twitter.com/leadpages' },
        ]}
        buttonText={`By ${
          publisher?.name || publisher?.title || 'The Leadpages Team'
        }`}
        buttonUrl={
          publisher?.slug?.current
            ? `/blog/author/${publisher.slug.current}`
            : '/blog'
        }
        buttonLogo={{
          src: '/favicon-32x32.png',
          alt: 'Leadpages',
          width: 32,
          height: 32,
        }}
      />

      {/* Related Content Section - Dynamic */}
      {post.relatedArticles && post.relatedArticles.length > 0 && (
        <RelatedContent
          heading="Related Content"
          items={post.relatedArticles.map((article: any) => ({
            _key: article._id || article._key,
            title: article.title,
            image: article.image,
            author:
              article.publisher?.name ||
              article.publisher?.title ||
              'Leadpages Team',
            date: article.publishedDate || new Date().toISOString(),
            url: `/blog/${article.slug?.current || ''}`,
          }))}
        />
      )}

      {/* SubFooter */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <SubFooter
          label="LET’S GET STARTED"
          heading="Curious About Leadpages ?"
          subheading="Begin your Leadpages 14-day free trial today."
          ctaHref="/pricing"
          ctaLabel="Start Free Trial"
          target="_self"
        />
      </div>
    </div>
  )
}

export default BlogPostLayout

