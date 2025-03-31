import React from 'react'
import clsx from 'clsx'

const Star = () => (
  <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="url(#gradient)"/>
    <defs>
      <linearGradient gradientUnits="userSpaceOnUse" id="gradient" x1="0" x2="20" y1="9.51" y2="9.51">
        <stop stopColor="#9061EE"/>
        <stop offset="1" stopColor="#C47FF3"/>
      </linearGradient>
    </defs>
  </svg>
)

const Stars = ({ rating = 5, }) => {
  const partial = rating % 1

  return (
    <div className='flex flex-row gap-0.5'>
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={`${i}-${Math.random()}`} />
      ))}
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="star-mask">
            <svg viewBox="0 0 20 20" xmlSpace="preserve">
              <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#fff"/>
            </svg>
          </mask>
        </defs>
        <rect
          className={clsx('h-full')}
          fill="url(#gradient)"
          mask={`url(#star-mask)`}
          width={`${100*partial}%`}
        />
      </svg>
    </div>
  )
}

export default Stars