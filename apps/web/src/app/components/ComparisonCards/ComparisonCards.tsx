// apps/web/src/components/ComparisonCards.tsx
import type { ImageType } from '@types'
import React from 'react'
import ComparisonCard from '@/components/ComparisonCard'
import Pinion from '@/components/Pinion'
import { normalizeUrl } from '@/lib/utils/normalizeUrl'

export type ComparisonCardItem = {
  _type: 'comparisonCard'
  description?: string
  heading?: string
  links?: {
    href?: string
    internal?: { slug?: { current?: string } }
    label?: string
    route?: { slug?: { current?: string } }
    slug?: { current?: string }
    target?: '_blank' | '_self'
    url?: { current?: string } | string
  }[]
  logo: ImageType
  logoAlt?: string
  title?: string
}

export interface ComparisonCardsProps {
  cards: ComparisonCardItem[]
  className?: string
  showTitle?: boolean
}

function normalizePath(p: string): string {
  if (/^(https?:)?\/\//.test(p)) {
    // Para URLs externas, usar normalizeUrl
    return normalizeUrl(p)
  }
  const withSlash = p.startsWith('/') ? p : `/${p}`
  // Normalizar para eliminar trailing slashes y dobles slashes
  const normalized = withSlash.replace(/\/{2,}/g, '/')
  return normalizeUrl(normalized)
}

function resolveHref(link: any): string | undefined {
  if (!link) return undefined
  if (typeof link.url === 'string' && link.url) return normalizePath(link.url)
  if (typeof link.href === 'string' && link.href)
    return normalizePath(link.href)
  if (typeof link?.url?.current === 'string' && link.url.current) {
    return normalizePath(link.url.current)
  }

  const slug =
    link?.route?.slug?.current ||
    link?.internal?.slug?.current ||
    link?.slug?.current

  return slug ? normalizePath(slug) : undefined
}

function resolveTarget(link: any, href?: string): '_blank' | '_self' {
  if (link?.target === '_blank' || link?.target === '_self') return link.target
  return href && /^(https?:)?\/\//.test(href) ? '_blank' : '_self'
}

const ComparisonCards = ({
  cards,
  className,
  showTitle = false,
}: ComparisonCardsProps) => (
  <section className={className}>
    <Pinion component="featureCards">
      <div className="relative">
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
            aspect-[1/1] h-[75%] rounded-full
            bg-[radial-gradient(ellipse_at_center,_#372A6E_0%,_rgba(0,0,0,0)_75%)]
            z-0
          "
        />

        <div className="relative z-10">
          <div className="max-740:max-w-[26rem] mx-auto 740:grid-cols-2 grid gap-4 lg:grid-cols-3">
            {cards?.map((it, i) => {
              const rawLink = it.links?.[0]
              const href = resolveHref(rawLink) ?? '#'
              const label = rawLink?.label ?? 'See More Info'
              const target = resolveTarget(rawLink, href)

              return (
                <ComparisonCard
                  className="h-full"
                  ctaHref={href}
                  ctaLabel={label}
                  description={it.description ?? ''}
                  heading={it.heading ?? ''}
                  key={i}
                  logo={it.logo}
                  logoAlt={it.logoAlt ?? it.title ?? 'Logo'}
                  showTitle={showTitle}
                  target={target}
                  title={it.title}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Pinion>
  </section>
)

export default ComparisonCards
