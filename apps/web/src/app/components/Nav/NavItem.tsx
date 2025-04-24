import React from 'react'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'
import Link from '@/components//Link'
import Image from '@/components/Image'
import { useCarouselStore } from './NavColumnCarousel'

interface NavItemProps {
  data: any
}

const NavItem = ({ data }: NavItemProps) => {
  const {clearTimeoutId, setIsTimerActive, setTimeoutId, timeoutId, updateImageData} = useCarouselStore(
    useShallow((state) => ({
      clearTimeoutId: state.clearTimeoutId,
      setIsTimerActive: state.setIsTimerActive,
      setTimeoutId: state.setTimeoutId,
      timeoutId: state.timeoutId,
      updateImageData: state.updateImageData
    })
  ))

  const { icon, links, pillContent, secondaryText, templateImage } = data || {}
  const { label, ...link } = links?.[0] || {}

  const handleMouseEnter = () => {
    if (templateImage) {
      updateImageData(templateImage)
    }
    if (timeoutId) {
      clearTimeout(timeoutId)
      clearTimeoutId()
    }
  }

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsTimerActive(true)
    }, 2000)
    setTimeoutId(id)
  }

  if (!link.condition) return null

  return (
    <div
      className={clsx(
        'box-border flex w-full items-star py-1.5 px-0.5 sm:p-1.5 hover:bg-obsidian-800/30 rounded-sm transition-color duration-200',
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link {...link}>
          <div className="flex items-start gap-2">
            {icon && (
              <div className="flex shrink-0 h-3 w-3 items-center justify-center theme-dark:grayscale theme-dark:invert">
                <Image image={icon} />
              </div>
            )}
            <div className="flex flex-col gap-[0.125rem]">
              <div className='flex items-center gap-1'>
                {label && <h5 className="type-h5 !leading-normal">{label}</h5>}
                {pillContent && (
                  <div className='bg-gradient-purple-invert flex items-center rounded-lg'>
                    <span className="type-overline-xxs py-[0.25rem] px-1.5 bg-gradient-purple text-transparent bg-clip-text">
                      {pillContent}
                    </span>
                  </div>
                )}
              </div>
              {secondaryText && (
                <span className="hidden md:block type-caption-xs text-body-neutral-body">{secondaryText}</span>
              )}
            </div>
        </div>
      </Link>
    </div>
  )
}

export default NavItem
