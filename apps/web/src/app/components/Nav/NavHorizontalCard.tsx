import React from 'react'
import Link from 'next/link'
import Image from '@/components/Image'
import LinkIcon from '@/components/Link/LinkIcon'

interface NavHorizontalCardProps {
  data: any
}

const NavHorizontalCard = ({
  data
}: NavHorizontalCardProps) => {
  const { content, heading, image, link, linkLabel } = data
  const { hasIcon, url } = link || {}

  if (!image) return null

  return (
    <article>
      <Link href={url}>
        <div className='flex gap-2 p-1.5 w-full hover:bg-obsidian-800/30 group/card-horizontal transition-all duration-200 items-start'>
          <div className='w-full max-w-[6.25rem] group-hover/card-horizontal:scale-[1.05] transition-all duration-200 rounded-sm overflow-hidden aspect-1'>
            <Image image={image}/>
          </div>
          <div className='flex flex-col gap-1.5'>
            <h5 className='type-h5'>{heading}</h5>
            <p className="type-caption-xs text-body-neutral-body">{content}</p>
            <span className="link-label">{linkLabel}</span>
            {
              hasIcon &&                     
                <span className="link-icon">
                  <span className="link-icon-background" />
                  <LinkIcon />
                </span>
            }
          </div>
        </div>
      </Link>
    </article>
  )
}

export default NavHorizontalCard
