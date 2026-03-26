import React, { useId } from 'react'

const Star = ({ gradientId }: { gradientId: string }) => (
  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill={`url(#${gradientId})`}/>
  </svg>
)

interface StarsProps { rating?: number; variant?: 'purple' | 'green' | 'blue' | 'brandPurple' }

const Stars = ({ rating = 5, variant = 'purple' }: StarsProps) => {
  const uid = useId().replace(/:/g, '')
  const gradientId = `stars-${variant}-${uid}`
  const maskId = `star-mask-${uid}`
  const partial = rating % 1

  const gradient = variant === 'blue' ? (
    <>
      <stop stopColor="#1e40af"/>
      <stop offset="1" stopColor="#3b82f6"/>
    </>
  ) : variant === 'green' ? (
    <>
      <stop stopColor="#84cc16"/>
      <stop offset="1" stopColor="#a3e635"/>
    </>
  ) : variant === 'brandPurple' ? (
    <>
      <stop stopColor="#603EFF"/>
      <stop offset="1" stopColor="#603EFF"/>
    </>
  ) : (
    <>
      <stop stopColor="#9061EE"/>
      <stop offset="1" stopColor="#C47FF3"/>
    </>
  )

  return (
    <div className='flex flex-row gap-0.5'>
      <svg width={0} height={0} aria-hidden>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="0" x2="20" y1="9.51" y2="9.51">
            {gradient}
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id={`${gradientId}-partial`} x1="0" x2="20" y1="9.51" y2="9.51">
            {gradient}
          </linearGradient>
          <mask id={maskId}>
            <svg viewBox="0 0 20 20" xmlSpace="preserve">
              <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#fff"/>
            </svg>
          </mask>
        </defs>
      </svg>
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={`${i}-${uid}`} gradientId={gradientId} />
      ))}
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <rect
          height="20"
          fill={`url(#${gradientId}-partial)`}
          mask={`url(#${maskId})`}
          width={`${100*partial}%`}
        />
      </svg>
    </div>
  )
}

export default Stars