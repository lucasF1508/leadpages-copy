import React, { useState } from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { LinkType, SanityImageProps } from '@/types'

interface NavRowCard {
  _key?: string
  image: SanityImageProps
  label: string
  link: LinkType
  backgroundColor?: string
  hoverColor?: 'white' | 'black'
  disableHover?: boolean
}

interface NavRowCardsProps {
  cards: NavRowCard[]
}

const Card = (card: NavRowCard) => {
  const [hover, setHover] = useState(false)
  const { _key, image, label, link, hoverColor, backgroundColor, disableHover } = card
  const { condition, url } = link

  return (
    <Link 
      className="flex flex-row sm:flex-col sm:items-start gap-[0.625rem] sm:gap-1.5 group/card" 
      condition={condition} 
      key={_key} 
      url={url} 
    >
      <div 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        className={clsx(
          "flex cursor-pointer flex-col items-center justify-center h-6 w-6 sm:h-9 sm:w-full rounded-sm bg-obsidian-800/30 px-1 relative",
          'transition-all [&_img]:transition-all [&_img]:duration-300 duration-300',
          !disableHover && hoverColor === 'black' && 'group-hover/card:[&_img]:[filter:brightness(0)]',
          !disableHover && hoverColor === 'white' && 'group-hover/card:[&_img]:[filter:brightness(0)_invert(100%)]'
        )}
        style={{
          backgroundColor: hover ? backgroundColor : undefined
        }}
      >
        <Image image={image} className='!object-contain max-h-3 sm:max-h-none'/>
      </div>
      <div className="type-h6 sm:type-h5 flex items-center">{label}</div>
    </Link>
  )
}

const NavRowCards = ({
  cards
}: NavRowCardsProps) => (
  <div
    className={clsx(
      'grid w-full grid-cols-1 sm:grid-cols-5 gap-2'
    )}
  >
    {cards.map(
      ({_key, ...card}) => <Card {...card} key={_key}/>
    )}
  </div>
)

export default NavRowCards
