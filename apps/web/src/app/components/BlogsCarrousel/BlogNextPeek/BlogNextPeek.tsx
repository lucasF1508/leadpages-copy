'use client'

import type { BestOfBlogItem } from '../BestOfBlog.types'
import clsx from 'clsx'
import Media from '@/components/Media'

interface BlogNextPeekProps {
  className?: string
  nextItem: BestOfBlogItem
}

export default function BlogNextPeek({ className, nextItem }: BlogNextPeekProps) {
  const image = nextItem?.image

  return (
    <div
      aria-hidden="true"
      className={clsx(
        'relative overflow-hidden rounded-2xl',
        'w-full h-full md:min-h-[18rem] lg:min-h-[20rem]',
        className
      )}
    >
      <div className="absolute inset-3 rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
        {image ? (
          <Media
            classNames={{ media: 'object-cover grayscale opacity-60', root: 'absolute inset-0' }}
            fill
            media={{ condition: 'image', image, ratio: undefined }}
            priority={false}
            sizes="(min-width:1280px) 18vw, (min-width:768px) 20vw, 40vw"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-800" />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </div>
  )
}
