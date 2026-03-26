import React from 'react'
import clsx from 'clsx'
import Cards from '@/components/Cards'
import { CardProps } from '@/components/Cards/Card'
import CTA from '@/components/CTA'
import { CTAProps } from '@/components/CTA'
import { hasContent } from '@/components/Text'
import { hasLinks } from '@/components/Link'

export interface FeatureCardsProps {
  cards: CardProps[]
  cta: CTAProps
  variant?: 'dark' | 'light'
}

const FeatureCards = ({ cards: _cards, cta, variant = 'dark' }: FeatureCardsProps) => {
  // Only explicit "light" should render light styles.
  // Legacy/null/empty values keep the original dark default.
  const resolvedVariant = variant === 'light' ? 'light' : 'dark'
  const isDark = resolvedVariant === 'dark'

  const cards = _cards.map((card: CardProps) => ({
    spacer: false,
    contentSize: 'large',
    classNames: {
      content: clsx(
        '[&>h3]:type-h3 text-center',
        !isDark && '[&_p]:!text-black [&_h3]:!text-black [&_h4]:!text-black [&_h5]:!text-black [&_h6]:!text-black'
      ),
      root: isDark ? '!bg-[#1A1A1A] !border-white/10' : '!bg-white !border-[#603EFF]',
      iconContainer: '!items-center !justify-center',
      icon: isDark
        ? '[filter:brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(0%)_hue-rotate(0deg)_brightness(103%)_contrast(103%)]'
        : '[filter:brightness(0)_saturate(100%)_invert(31%)_sepia(94%)_saturate(1237%)_hue-rotate(232deg)_brightness(98%)_contrast(101%)]'
    },
    ...card
  } as CardProps))

  return (
    <div className={clsx('w-full py-10 sm:py-12 md:py-16', isDark ? 'bg-transparent' : 'bg-white')}>
      <div className="max-w-base mx-auto w-full px-4 sm:px-6 lg:px-8">
        {(cta?.heading || hasContent(cta?.content) || hasLinks(cta?.links)) && (
          <CTA
            mobileAlignment="left"
            classNames={{
              root: '!pb-4',
              inner: clsx(
                'rounded-2xl border',
                isDark
                  ? '!border-2 !border-transparent [background:linear-gradient(#1A1A1A,#1A1A1A)_padding-box,conic-gradient(from_315deg_at_50%_50%,#CEFF66_0deg,#9061EE_90deg,#8FEFEF_180deg,#603EFF_270deg,#CEFF66_360deg)_border-box] [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_p]:!text-gray-300 [&_.link-button-solid]:!bg-button-surface-solid [&_.link-button-solid]:!text-button-text-solid [&_.link-button-solid]:!border-button-surface-solid [&_.link-button-solid_.link-label]:!text-button-text-solid [&_.link-button-solid_.link-icon_svg]:!stroke-button-text-solid [&_.link-button-solid]:!rounded-[40px] [&_.link-w-icon]:!bg-button-surface-solid [&_.link-w-icon]:!text-button-text-solid [&_.link-w-icon]:!border-button-surface-solid [&_.link-w-icon_.link-label]:!text-button-text-solid [&_.link-w-icon_.link-icon_svg]:!stroke-button-text-solid [&_.link-w-icon]:!rounded-[40px]'
                  : [
                      '!bg-white !border-[#603EFF] [&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_h4]:!text-black [&_p]:!text-black',
                      '[&_.link-button-solid]:!bg-[#603EFF] [&_.link-button-solid]:!text-white [&_.link-button-solid]:!border-[#603EFF]',
                      '[&_.link-button-solid_.link-label]:!text-white [&_.link-button-solid_.link-icon]:!text-white [&_.link-button-solid_.link-icon_svg]:!stroke-white [&_.link-button-solid_.link-icon-background]:hidden',
                      '[&_.link-button-solid:hover]:!bg-[#7d4fe0] [&_.link-button-solid:hover]:!border-[#7d4fe0]',
                      '[&_.link-button-solid:hover_.link-label]:!text-white [&_.link-button-solid:hover_.link-icon]:!text-white [&_.link-button-solid:hover_.link-icon_svg]:!stroke-white',
                      '[&_.link-w-icon]:!bg-[#603EFF] [&_.link-w-icon]:!text-white [&_.link-w-icon]:!border-[#603EFF] [&_.link-w-icon]:inline-flex [&_.link-w-icon]:items-center [&_.link-w-icon]:gap-2 [&_.link-w-icon]:rounded-[40px] [&_.link-w-icon]:px-3.5 [&_.link-w-icon]:h-[3rem] [&_.link-w-icon]:font-medium [&_.link-w-icon]:!no-underline',
                      '[&_.link-w-icon_.link-label]:!text-white [&_.link-w-icon_.link-icon]:!text-white [&_.link-w-icon_.link-icon_svg]:!stroke-white [&_.link-w-icon_.link-icon-background]:!hidden',
                      '[&_.link-w-icon:hover]:!bg-[#7d4fe0] [&_.link-w-icon:hover]:!border-[#7d4fe0]',
                      '[&_.link-w-icon:hover_.link-label]:!text-white [&_.link-w-icon:hover_.link-icon]:!text-white [&_.link-w-icon:hover_.link-icon_svg]:!stroke-white'
                    ]
              ),
            }}
            {...cta}
            desktopOrientation="horizontal"
          />
        )}
        <Cards cards={cards} columns={3} variant={isDark ? 'dark' : 'light'} classNames={{ root: 'mt-8 sm:mt-10' }} />
      </div>
    </div>
  )
}

export default FeatureCards