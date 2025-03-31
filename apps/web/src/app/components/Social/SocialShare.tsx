import type { ClassValue } from 'clsx'
import type { MouseEvent } from 'react'
import React from 'react'
import clsx from 'clsx'
import useSocialShare from '@/hooks/useSocialShare'

interface SocialShareProps
  extends Omit<React.ComponentProps<'div'>, 'className'> {
  className?: ClassValue
  label?: string
  layout?: 'horizontal' | 'vertical'
  platforms: ['facebook', 'twitter', 'mailto']
}

const SocialShare = ({
  className,
  label,
  layout = 'horizontal',
  platforms,
  ...props
}: SocialShareProps) => {
  const { Icons, handleClick } = useSocialShare()

  const layouts = {
    horizontal: 'flex-row flex-nowrap',
    vertical: 'flex-col',
  }

  return (
    <div
      className={clsx(
        'flex gap-3 [&_svg]:h-3 [&_svg]:w-3 [&_svg]:cursor-pointer',
        layouts[layout],
        className
      )}
      {...props}
    >
      {label && label}
      {platforms.map((platform) => {
        const Icon = Icons[platform]
        return (
          <Icon
            key={platform}
            onClick={(event: MouseEvent<SVGElement>) =>
              handleClick(event, platform)
            }
          />
        )
      })}
    </div>
  )
}

export default SocialShare
