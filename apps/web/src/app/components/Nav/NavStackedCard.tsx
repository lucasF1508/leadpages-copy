import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Link from '@/components/Link'
import LinkIcon from '../Link/LinkIcon'

interface NavStackedCardProps {
  data: any
}

const NavStackedCard = ({ data }: NavStackedCardProps) => {
  const { content, heading, image, link } = data

  return (
    <article
      className={clsx(
        'flex flex-col items-start gap-1.5 rounded p-1.5',
        link && 'cursor-pointer hover:bg-obsidian-800/30'
      )}
    >
      <div className='rounded-sm overflow-hidden'>
      <Image image={image} />
      </div>
      <div className='p-1.5 flex flex-col items-start gap-1.5'>
      {heading && <h5 className='type-h5'>{heading}</h5>}
      {content && <p className='type-caption-xs text-body-neutral-body'>{content}</p>}
      {
        link && <Link {...link} linkStyle='text-secondary' hasIcon/>
      }
      </div>
    </article>
  )
}

export default NavStackedCard
