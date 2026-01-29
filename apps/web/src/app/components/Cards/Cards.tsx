import type { CardProps } from './Card'
import type {ClassValue} from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Card from './Card'

export interface CardsProps {
  cards?: CardProps[]
  className?: ClassValue
  classNames?: {
    card?: ClassValue
    grid?: ClassValue
    root?: ClassValue
  }
  columns?: '2' | '3' | 2 | 3
  variant?: 'default' | 'dark' | 'light'
}

const Cards = ({
  cards,
  className,
  classNames,
  columns = 2,
  variant = 'default',
}: CardsProps) => {
  if(!cards?.length) return null

  // Convertir columns a número si viene como string
  const columnsNum = typeof columns === 'string' ? parseInt(columns, 10) : columns

  return (
    <div className={clsx(className, classNames?.root)}>
      <div
        className={clsx(
          'max-740:max-w-[26rem] mx-auto 740:grid-cols-2 grid gap-4',
          columnsNum === 3 && 'lg:grid-cols-3',
          classNames?.grid
        )}
      >
          {cards?.map((card) => (
            <Card
              className={classNames?.card}
              key={card?._id || card?._key}
              variant={variant}
              {...card}
            />
          ))}
      </div>
    </div>
  )
}

export default Cards
