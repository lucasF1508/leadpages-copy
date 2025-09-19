import React from 'react'
import clsx from 'clsx'
import Link, { LinkIcon } from '@/components/Link'
import { LinkType } from '@/types'

interface CardData {
  label: string
  heading: string
  link: LinkType
}

interface PrevNextCardsRowProps {
  prevCard: CardData
  nextCard: CardData
}

const PrevNextCard = ({ prevCard, nextCard }: PrevNextCardsRowProps) => {
  const renderCard = (card: CardData, direction: 'prev' | 'next') => {
    const isPrev = direction === 'prev'

    return (
      <Link
        {...card.link}
        hasIcon={false}
        linkStyle="none"
        className={clsx(
          'bg-surface-muted border border-neutral rounded-lg md:rounded-xl flex items-center px-8 py-6 transition-[box-shadow] hover:shadow-highest theme-dark:shadow-brand-secondary/20 w-full h-full'
        )}
      >
        {isPrev && (
          <div className="flex flex-col items-center mr-4 shrink-0">
            <LinkIcon className="w-4 h-4 rotate-180" />
            <span className="w-full h-[3px] bg-brand-secondary mt-1" />
          </div>
        )}

        <div className="flex flex-col flex-1 min-w-0">
          {card.label && (
            <span className="type-overline-xs theme-light:text-body-muted mb-2">
              {card.label}
            </span>
          )}
          {card.heading && (
            <span className="type-h6 md:type-h5 whitespace-nowrap text-ellipsis">
              {card.heading}
            </span>
          )}
        </div>

        {!isPrev && (
          <div className="flex flex-col items-center ml-4 shrink-0">
            <LinkIcon className="w-4 h-4" />
            <span className="w-full h-[3px] bg-brand-secondary mt-1" />
          </div>
        )}
      </Link>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center max-w-[1200px] mx-auto h-full">
      <div className="flex-1">{renderCard(prevCard, 'prev')}</div>
      <div className="flex-1">{renderCard(nextCard, 'next')}</div>
    </div>
  )
}

export default PrevNextCard
