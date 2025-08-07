import React from 'react'
import Cards from '@/components/Cards'
import { CardProps } from '@/components/Cards/Card'
import CTA from '@/components/CTA'
import { CTAProps } from '@/components/CTA'
import { hasContent } from '@/components/Text'
import { hasLinks } from '@/components/Link'

export interface FeatureCardsProps {
  cards: CardProps[]
  cta: CTAProps
}

const FeatureCards = ({ cards: _cards, cta }: FeatureCardsProps) => {
  const cards = _cards.map((card: CardProps) => ({
    spacer: false,
    contentSize: 'small',
    classNames: {
      content: '[&>h3]:type-h3',
      root: 'bg-opacity-light-100/10',
      iconContainer: '!items-start'
    },
    ...card
    } as CardProps
  ))

  return (
    <>
      {(cta?.heading || hasContent(cta?.content) || hasLinks(cta?.links)) && (
        <CTA
          mobileAlignment='left'
          classNames={{
            root: '!pb-4'
          }}
          {...cta}
          desktopOrientation='horizontal'
        />
      )}
      <Cards cards={cards} columns={3} />
    </>
  )
}

export default FeatureCards