import type { BlogCard } from '../../BlogSection/BlogSection.types'
import clsx from 'clsx'
import Link from '@/components/Link'
import Media from '@/components/Media'

interface BlogFeatureCardProps {
  className?: string
  item: BlogCard
}

export default function BlogFeatureCard({ className, item }: BlogFeatureCardProps) {
  const { author, excerpt, href = '#', image, publishedDate, tag } = item

  // Decide if the link is internal or external and normalize it
  const isRelative = href.startsWith('/')
  const hasProtocol = href.startsWith('http://') || href.startsWith('https://')
  const normalizedHref = isRelative || hasProtocol ? href : `https://${href}`

  const site = (process.env.NEXT_PUBLIC_SITE_URL || '').replace(/\/$/, '')
  const isExternal = hasProtocol && (site ? !normalizedHref.startsWith(site) : true)

  // Format date
  const formattedDate = publishedDate
    ? new Date(publishedDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return (
    <article
      className={clsx(
        // Full-height card so footer can pin to the bottom
        'bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors flex flex-col h-full',
        className
      )}
    >
      {/* Featured Image */}
      <div className="flex justify-center pb-3">
        <div
          className="relative overflow-hidden flex-shrink-0"
          style={{
            width: '396px',
            height: '260px',
            borderRadius: '8px', // sm radius
          }}
        >
          {image ? (
            <Media
              media={{ condition: 'image', image }}
              sizes="396px"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'bottom' }}
            />
          ) : (
            <div className="w-full h-full bg-gray-700" />
          )}
        </div>
      </div>

      {/* Content */}
      {/* IMPORTANT: no items-center here; it would vertically center the inner block and break mt-auto */}
      <div className="flex-1 flex justify-center pb-6 pt-0">
        <div className="flex flex-col flex-1" style={{ width: '396px' }}>
          {/* Meta */}
          {(formattedDate || author) && (
            <div className="flex justify-between items-center mb-2">
              {formattedDate && (
                <span
                  className="font-medium uppercase"
                  style={{
                    fontSize: '10px',
                    lineHeight: '12px',
                    letterSpacing: '0.16em',
                    color: '#DBD8E4',
                    fontFamily: 'Roc Grotesk, sans-serif',
                  }}
                >
                  POSTED {formattedDate.toUpperCase()}
                </span>
              )}
              {author && (
                <span
                  className="font-medium uppercase"
                  style={{
                    fontSize: '10px',
                    lineHeight: '12px',
                    letterSpacing: '0.16em',
                    color: '#DBD8E4',
                    fontFamily: 'Roc Grotesk, sans-serif',
                  }}
                >
                  {author.toUpperCase()}
                </span>
              )}
            </div>
          )}

          {/* Category */}
          {tag && (
            <div className="mb-0">
              <span
                className="font-medium uppercase"
                style={{
                  fontSize: '10px',
                  lineHeight: '12px',
                  letterSpacing: '0.16em',
                  color: '#C47FF3', // purple from design
                  fontFamily: 'Roc Grotesk, sans-serif',
                }}
              >
                {tag.toUpperCase()}
              </span>
            </div>
          )}

          {/* Excerpt */}
          {excerpt && (
            <div className="type-body-sm text-white font-medium mb-3">
              {excerpt}
            </div>
          )}

          {/* Read More (pinned to bottom via mt-auto) */}
          <div className="flex justify-end mt-auto">
            <Link
              condition={isExternal ? 'external' : 'internal'}
              url={normalizedHref}
              className="inline-flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <span className="type-body-sm text-white font-medium border-b-2 border-green-500 pb-1">
                Read More
              </span>
              <span className="type-body-sm text-green-500 font-medium">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
