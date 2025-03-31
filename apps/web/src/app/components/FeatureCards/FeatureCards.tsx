import React from 'react'
import Cards from '@/components/Cards'
import { CardProps } from '@/components/Cards/Card'
import CTA from '@/components/CTA'
import { CTAProps } from '@/components/CTA'
 
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
      <CTA 
        mobileAlignment='left'
        classNames={{
          root: '!pb-4'
        }} 
        {...cta}
        desktopOrientation='horizontal'
      />
      <Cards cards={cards} columns={3} />
    </>
  )
}
 
export default FeatureCards