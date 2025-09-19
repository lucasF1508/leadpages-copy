// apps/web/src/components/ComparisonCard.tsx
import type { ImageType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'

export interface ComparisonCardProps {
  className?: string
  ctaHref: string
  ctaLabel: string
  description: string
  heading?: string // 🔹 Nuevo heading opcional
  logo: ImageType
  logoAlt: string
  showTitle?: boolean
  target?: '_blank' | '_self'
  title?: string
}

const ComparisonCard = ({
  className,
  ctaHref,
  ctaLabel,
  description,
  heading, // 🔹 Nuevo prop
  logo,
  logoAlt,
  showTitle = false,
  target = '_self',
  title,
}: ComparisonCardProps) => {
  const titleId = React.useId()

  return (
    <article
      aria-labelledby={titleId}
      className={clsx(
        'group relative rounded-3xl bg-white/5 border border-white/10',
        'p-5 sm:p-6 md:p-6 text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]',
        'hover:border-white/20 transition-colors',
        'flex flex-col items-center text-center',
        className
      )}
    >
      <div className="mb-4 w-full flex items-center justify-center">
        <div
          className={clsx(
            'h-[48px] sm:h-[56px] md:h-[64px] w-full flex items-center justify-center',
            '[&_img]:h-full [&_img]:w-auto [&_img]:!object-contain',
            '[&_picture>img]:h-full [&_picture>img]:w-auto [&_picture>img]:!object-contain'
          )}
        >
          <Image
            alt={logoAlt}
            className="max-h-full max-w-[200px] w-auto"
            hasPlaceholder={false}
            image={logo}
            sizes="(max-width: 640px) 180px, 240px"
          />
        </div>
      </div>

      {showTitle && title ? (
        <h3 className="type-h5 sm:type-h4 text-white mb-2" id={titleId}>
          {title}
        </h3>
      ) : (
        <span className="sr-only" id={titleId}>
          {title || logoAlt}
        </span>
      )}

      {heading && (
        <h4 className="type-h6 sm:type-h5 text-white/90 mb-2">{heading}</h4>
      )}

      <p className="type-body-sm text-white/80 mb-5 max-w-prose">
        {description}
      </p>

      <a
        aria-label={ctaLabel}
        className={clsx(
          'inline-flex items-center gap-3 font-medium',
          'text-white/80 hover:text-white transition-colors',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30'
        )}
        href={ctaHref}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        target={target}
      >
        <span>{ctaLabel}</span>
        <span
          aria-hidden="true"
          className={clsx(
            'grid h-6 w-6 place-items-center rounded-md',
            'bg-white/10 ring-1 ring-white/10',
            'group-hover:bg-white/20 group-hover:ring-white/20',
            'transition-colors',
            'text-base leading-none'
          )}
        >
          <svg
            className="w-3 h-3 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.002 12h-16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
            <path
              d="M15 17s5-3.682 5-5-5-5-5-5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </svg>
        </span>
      </a>
    </article>
  )
}

export default ComparisonCard
