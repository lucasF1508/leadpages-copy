import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Link from '@/components/Link'

interface NavStackedCardProps {
  data: any
}

const NavStackedCard = ({ data }: NavStackedCardProps) => {
  const { content, heading, image, link } = data

  return (
    <Link
      {...link}
      className={clsx(
        'flex flex-col items-start gap-1.5 rounded p-1.5 hover:[&>.link-label]:!transform-none',
        link && 'cursor-pointer hover:bg-obsidian-800/30'
      )}
      hasIcon={false}
      hasLabel={false}
      linkStyle={false}
    >
      <div className='rounded-sm overflow-hidden'>
      <Image image={image} />
      </div>
      <div className='p-1.5 flex flex-col items-start gap-1.5'>
      {heading && <h5 className='type-h5'>{heading}</h5>}
      {content && <p className='type-caption-xs text-body-neutral-body'>{content}</p>}
      {
        link && <Link {...link} condition={null} hasIcon linkStyle='text-secondary hover:[&_.link-label]:!translate-x-2'/>
      }
      </div>
    </Link>
  )
}

export default NavStackedCard
