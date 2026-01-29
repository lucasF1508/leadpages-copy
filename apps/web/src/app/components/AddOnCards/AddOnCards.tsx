import type { PriceType } from '@/components/Price'
import type { ContentType, LinkType, SanityImageProps } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components//Heading'
import Link, { hasLink, LinkIcon } from '@/components//Link'
import Image from '@/components/Image'
import { defaultLargeBlockStyles } from '@/components/PortableText'
import Price from '@/components/Price'
import Text from '@/components/Text'
import Pill from '../Pill'
import AddOnCardsPriceLabel from './AddOnCardsPriceLabel'
import AddOnCardsText from './AddOnCardsText'

interface AddOnProps {
  _key: string
  content: ContentType
  icon: SanityImageProps
  image: SanityImageProps
  links: LinkType[]
  prices: PriceType[]
  pricesLabel: string
  title: string
}

interface AddOnCardsProps {
  cards: AddOnProps[]
  children?: React.ReactNode
  className?: string
  classNames?: {
    root?: string
  }
  columnCount?: '2' | '3' | '4'
  content: ContentType
  pillContent: string
  variant?: 'default' | 'dark' | 'light'
}

const AddOnCards = ({
  cards,
  className,
  classNames = { root: '' },
  content,
  pillContent,
  variant = 'default',
}: AddOnCardsProps) => {
  const columnCount =
    (cards?.length >= 4 && '4') || (cards?.length === 3 && '3') || '2'

  // Si es variante dark o light, usar el nuevo diseño
  if (variant === 'dark' || variant === 'light') {
    const isDark = variant === 'dark'

    return (
      <div
        className={clsx(
          'py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative w-full',
          isDark ? 'bg-[#1A1A1A]' : 'bg-white'
        )}
        style={isDark ? { 
          backgroundColor: '#1A1A1A !important',
          backgroundImage: 'none !important',
          background: '#1A1A1A !important',
        } : undefined}
      >
        {/* Overlay para eliminar cualquier gradiente */}
        {isDark && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: '#1A1A1A',
              backgroundImage: 'none',
              background: '#1A1A1A',
              zIndex: 0,
            }}
          />
        )}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 lg:items-start">
            {/* Columna izquierda: Pill, título y descripción */}
            <div className="flex-1 lg:flex-[0.7] lg:min-w-0">
              {pillContent && (
                <div className="mb-4">
                  <div 
                    className="inline-flex py-1 px-3 rounded-lg"
                    style={{
                      background: 'linear-gradient(to right, #10B981, #F59E0B)',
                    }}
                  >
                    <span className="text-white uppercase type-overline-xs font-medium">
                      {pillContent}
                    </span>
                  </div>
                </div>
              )}
              {content && (
                <div className={clsx(isDark ? 'text-white' : 'text-dark')}>
                  <Text 
                    blockStyles={{
                      h2: {
                        className: 'font-display font-extrabold type-title-t5 sm:type-title-t4 md:type-title-t3 mb-4',
                        tag: 'h2',
                      },
                      normal: {
                        className: 'type-body-md sm:type-body-lg',
                        tag: 'p',
                      },
                    }} 
                    content={content} 
                  />
                </div>
              )}
            </div>

            {/* Columna derecha: Cards */}
            <div className="flex-1 lg:flex-[1.725] lg:min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {cards.map(
                  ({ _key, content: cardContent, icon, links, prices, pricesLabel, title }, i) => {
                    const [link] = links || []

                    return (
                      <div
                        key={_key}
                        className={clsx(
                          'flex flex-col justify-between p-6 rounded-lg',
                          'border border-white/10'
                        )}
                        style={{
                          backgroundColor: '#2A2A2A !important',
                          background: '#2A2A2A !important',
                        }}
                      >
                        <div className="w-full mb-4">
                          {icon && (
                            <div className="w-6 h-6 relative mb-3">
                              <Image image={icon} />
                            </div>
                          )}
                          {title && (
                            <h3 className={clsx(
                              'type-h3 font-bold mb-2',
                              'text-white'
                            )}>
                              {title}
                            </h3>
                          )}
                          {cardContent && (
                            <div className={clsx(
                              'type-body-sm mb-4',
                              'text-white/80'
                            )}>
                              <Text as="p" content={cardContent} />
                            </div>
                          )}
                        </div>
                        <div className="w-full">
                          {!!prices?.length && (
                            <>
                              <div className="mb-2">
                                <span className="text-white/60 type-body-xs">
                                  {pricesLabel || 'From'}
                                </span>
                              </div>
                              <div className="mb-1">
                                {(() => {
                                  // Usar el primer precio disponible si no hay coincidencia con currentSelection
                                  const [firstPrice] = prices || []
                                  if (!firstPrice) return null
                                  
                                  return (
                                    <div className="flex items-baseline gap-1">
                                      <span className="type-stat-lg text-white font-bold">
                                        {firstPrice.symbol}
                                      </span>
                                      <span className="type-stat-lg text-white font-bold mr-1">
                                        {firstPrice.price}
                                      </span>
                                      <span className="type-body-sm text-white/60">
                                        {firstPrice.currency}
                                      </span>
                                      <span className="type-body-sm text-white/60">
                                        /{firstPrice.period === 'monthly' ? 'mo' : 'yr'}
                                      </span>
                                    </div>
                                  )
                                })()}
                              </div>
                              <div className="mb-4">
                                <AddOnCardsText
                                  className="type-body-xs text-white/60"
                                  prices={prices}
                                />
                              </div>
                            </>
                          )}
                          {hasLink(link) && (
                            <Link
                              url={link.url || link.href}
                              condition={link.condition || 'internal'}
                              hasIcon={false}
                              className={clsx(
                                'inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors font-medium w-full justify-center',
                                'bg-[#1A1A1A] border-white/20 text-white hover:bg-[#2A2A2A]'
                              )}
                            >
                              <span>{link.label || (typeof link.children === 'string' ? link.children : 'View')}</span>
                              <LinkIcon className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Variante default (comportamiento original)
  return (
    <div
      className={clsx(
        'text-light flex flex-col items-center gap-7',
        className,
        classNames.root
      )}
    >
      <div>
        <div className="text-center">
          {pillContent && (
            <Pill
              className="mb-3 py-1 px-3"
              classNames={{ label: '!type-overline-xs' }}
              content={pillContent}
            />
          )}
        </div>
        {content && (
          <Text blockStyles={defaultLargeBlockStyles} content={content} />
        )}
      </div>
      <div
        className={clsx(
          'grid mx-auto w-full grid-cols-1 gap-3 nav-break:gap-8',
          'nav-break:bg-surface-neutral-opacity nav-break:p-5 nav-break:rounded-lg',
          columnCount === '2' && 'nav-break:grid-cols-2 max-w-cols8',
          columnCount === '3' && 'nav-break:grid-cols-3',
          columnCount === '4' && 'nav-break:grid-cols-4'
        )}
      >
        {cards.map(
          ({ _key, content: cardContent, icon, links, prices, pricesLabel, title }, i) => {
            const [link] = links || []
            const isLast = i === cards.length - 1

            return (
              <div
                className="flex flex-col justify-between relative max-nav-break:p-3 max-nav-break:bg-surface-neutral-opacity max-nav-break:rounded-lg max-nav-break:max-w-cols6 max-nav-break:mx-auto"
                key={_key}
              >
                {!isLast && (
                  <div
                    className={clsx(
                      'hidden nav-break:block absolute top-0 bottom-0 -right-4 w-px bg-gradient-to-b from-transparent via-surface-neutral-light/20 to-transparent'
                    )}
                  />
                )}
                <div className="w-full">
                  {icon && (
                    <div className="size-5 relative mb-2">
                      <Image image={icon} />
                    </div>
                  )}
                  {title && (
                    <Heading as="h4" className="type-h2 mb-1" content={title} />
                  )}
                  {cardContent && (
                    <div className="mb-2 type-body-xs nav-break:min-h-[3.75rem]">
                      <Text as="p" content={cardContent} />
                    </div>
                  )}
                </div>
                <div className="w-full">
                  {!!prices?.length && (
                    <>
                      <div className="mb-2">
                        <AddOnCardsPriceLabel label={pricesLabel} />
                      </div>
                      <div className="mb-1">
                        <Price
                          classNames={{
                            currency: 'type-caption-xs',
                            period: 'type-caption-xs ',
                            price: 'type-stat-md mr-1',
                            symbol: 'type-stat-md',
                          }}
                          period="/mo"
                          prices={prices}
                        />
                      </div>
                      <div className="mb-4">
                        <AddOnCardsText
                          className="type-caption-xs"
                          prices={prices}
                        />
                      </div>
                    </>
                  )}
                  {hasLink(link) && <Link className="w-full" {...link} />}
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default AddOnCards
