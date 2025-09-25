'use client'

import React, { useState, useEffect } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import clsx from 'clsx'
import Media from '@/components/Media'
import Text from '@/components/Text'

export interface CarouselCard {
  _key: string
  button: {
    href: string
    label: string
    target?: string
  }
  description: string
  image: {
    altText?: string
    asset: {
      _ref: string
      _type: string
    }
  }
  title: string
}

export interface CarruselWithArrowsProps {
  cards: CarouselCard[]
  heading: string
  label?: string
  description?: string
}

const CarruselWithArrows = ({
  cards,
  heading,
  label,
  description,
}: CarruselWithArrowsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Responsive visible cards: 1 on mobile, 2 on tablet, 4 on desktop
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1 // mobile
      if (window.innerWidth < 1024) return 2 // tablet
      return 4 // desktop
    }
    return 4 // default
  }

  const [visibleCards, setVisibleCards] = useState(getVisibleCards())
  
  // Calculate max index based on whether arrows should be hidden
  const shouldHideArrows = !isMobile && cards.length <= 4
  const maxIndex = shouldHideArrows ? 0 : Math.max(0, cards.length - 1)

  // Update visible cards on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial mobile state
    setIsMobile(window.innerWidth < 768)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goPrev = () => {
    if (shouldHideArrows) return
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const goNext = () => {
    if (shouldHideArrows) return
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1))
  }

  const getTransform = () => {
    const cardWidth = isMobile ? 280 : 276 // wider cards on mobile
    return `translateX(-${currentIndex * cardWidth}px)`
  }

  if (!cards?.length) return null

  return (
    <div
      style={{
        maxWidth: '100%',
        padding: isMobile ? '2rem 1rem' : '120px',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
        <h2
          style={{
            color: 'white',
            fontSize: isMobile ? '24px' : '36px',
            fontWeight: 'bold',
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {heading}
        </h2>
        {label && (
          <div
            style={{
              color: 'white',
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '0.2em',
              marginTop: '8px',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </div>
        )}
        {description && (
          <p
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: 'normal',
              lineHeight: 1.4,
              marginTop: '8px',
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Carousel */}
      <div
        style={{
          overflow: 'hidden',
          padding: isMobile ? '0 1rem' : '0 2rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            transform: shouldHideArrows ? 'none' : getTransform(),
            transition: 'transform 0.3s ease',
            justifyContent: shouldHideArrows ? 'center' : 'flex-start',
          }}
        >
          {cards.map((card) => (
            <div
              key={card._key}
              style={{
                borderRadius: '13.44px',
                display: 'flex',
                flex: isMobile ? '0 0 280px' : '0 0 calc(25% - 0.75rem)',
                flexDirection: 'column',
                minHeight: isMobile ? '350px' : '299px',
                width: isMobile ? '280px' : '260px',
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: isMobile ? '280px' : '260px',
                  height: isMobile ? '200px' : '200px',
                  position: 'relative',
                  borderRadius: '13.45px',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: '13.45px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '13.44px',
                      overflow: 'hidden',
                    }}
                  >
                    <Media
                      media={{
                        condition: 'image',
                        image: card.image,
                      }}
                      priority
                      sizes="160px"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  gap: '8px',
                  justifyContent: 'space-between',
                  padding: '12px',
                  minHeight: 0,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                  <div
                    style={{
                      flex: 1,
                      marginTop: '20px',
                      fontSize: '13px',
                      lineHeight: 1.6,
                    }}
                  >
                    <Text content={card.description} />
                  </div>
                </div>

                {/* Button */}
                <div style={{ marginTop: 'auto' }}>
                  <a
                    href={card.button.href}
                    target={
                      card.button.target === '_blank' ? '_blank' : '_self'
                    }
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'white',
                      textDecoration: 'none',
                      borderBottom: '2px solid #10b981',
                      paddingBottom: '2px',
                      transition: 'all 0.2s',
                    }}
                  >
                    {card.button.label}
                    <FiArrowRight style={{ width: '12px', height: '12px' }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        {!shouldHideArrows && (
          <>
            <button
              aria-label="Previous"
              className={clsx(
                'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1',
                'inline-flex h-10 w-10 items-center justify-center rounded-md',
                'bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20',
                'text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                'md:h-11 md:w-11'
              )}
              onClick={goPrev}
              type="button"
            >
              <span aria-hidden>←</span>
            </button>

            <button
              aria-label="Next"
              className={clsx(
                'absolute right-0 top-1/2 -translate-y-1/2 translate-x-1',
                'inline-flex h-10 w-10 items-center justify-center rounded-md',
                'bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20',
                'text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70',
                'md:h-11 md:w-11'
              )}
              onClick={goNext}
              type="button"
            >
              <span aria-hidden>→</span>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default CarruselWithArrows
