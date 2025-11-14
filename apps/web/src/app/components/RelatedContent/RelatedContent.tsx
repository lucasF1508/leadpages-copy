import React from 'react'
import Media from '../Media'
import { RelatedContentProps } from './RelatedContent.types'

type Props = RelatedContentProps

const RelatedContent: React.FC<Props> = ({ heading, items }) => {
  if (!items || items.length === 0) return null

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <section className="py-16 px-4 md:px-8" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 
          className="text-white text-center mb-12" 
          style={{ 
            fontFamily: 'var(--font-roc-grotesk-variable, serif)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            lineHeight: '1.2',
            letterSpacing: '0px',
            textAlign: 'center',
            marginBottom: '2rem'
          }}
        >
          {heading}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-6xl mx-auto">
          {items.map((post) => (
            <a
              key={post._key}
              href={post.url}
              className="relative rounded-xl overflow-hidden block"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '521.87px',
                height: '393.49px',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none'
              }}
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div 
                  className="relative w-full overflow-hidden" 
                  style={{ 
                    width: '521.87px',
                    height: '273.49px',
                    borderRadius: '9.72px'
                  }}
                >
                  <Media
                    media={{
                      condition: 'image',
                      image: post.image,
                    }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full"
                    style={{
                      objectFit: 'fill'
                    }}
                  />
                </div>

                {/* Content */}
                <div 
                  className="px-6 py-3 flex-1 flex flex-col justify-start"
                  style={{
                    height: '120px'
                  }}
                >
                  {/* Title - Optional */}
                  {post.title && (
                    <h3 className="text-white font-semibold mb-2 leading-tight" style={{ fontSize: '1rem' }}>
                      {post.title}
                    </h3>
                  )}

                  {/* Footer */}
                  <div 
                    className="text-gray-400 mt-auto"
                    style={{
                      fontFamily: 'Roc Grotesk',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      lineHeight: '1.2',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase'
                    }}
                  >
                    POSTED BY {post.author.toUpperCase()} | {formatDate(post.date)}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedContent
