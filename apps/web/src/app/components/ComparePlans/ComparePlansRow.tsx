import React, { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion as m } from 'motion/react'
import CaratIcon from '@/components/Icons/CaratIcon'
import CheckIcon from '@/components/Icons/CheckIcon'
import XIcon from '@/components/Icons/XIcon'
import Text from '@/components/Text'
import { comparePlansAnimationVariants } from './ComparePlans'

interface Column {
  _key: string
  isAvailable?: boolean
  text: string
  textSecondary?: string
}

interface ComparePlansRowProps {
  columns: Column[]
  description?: string
  isLast?: boolean
  title: string
}

const ComparePlansRow: React.FC<ComparePlansRowProps> = ({
  columns,
  description,
  title,
}) => {
  const [active, setActive] = useState(false)

  return (
    <div 
      className={
        clsx(
          "grid col-span-full py-2 relative type-body-sm gap-x-4", 
          description && 'cursor-pointer'
        )}
      onClick={() => setActive(!active)}
      style={{ gridTemplateColumns: `repeat(${columns?.length + 1}, minmax(12.5rem, 1fr))` }}
    >
      <div className="bg-gradient-border-light h-px absolute bottom-0 left-0 right-0" />
      <div className="sticky left-0 z-10 pl-2 bg-surface">
        <div className='flex items-center gap-x-2'>
          {description &&          
            <div className={clsx('transition-transform duration-400', active && '-rotate-180')}>
              <CaratIcon />
            </div>
          }
          {title &&          
            <div className={
              clsx(
                'whitespace-nowrap transition-colors duration-400',
                active ? 'text-body-neutral-primary' : 'text-body-neutral',
              )
            }>
              {title}
            </div>
          }
        </div>
        <AnimatePresence initial={false}>
          {description && active && (
            <m.p
              animate="animate"
              exit="exit"
              initial="initial"
              key="description"
              variants={comparePlansAnimationVariants}
            >
              <Text
                className="mt-1.5 [&_.link-inline]:!text-body-neutral"
                classNames={{
                  normal: 'type-caption-xxs',
                }}
                content={description}
              />
            </m.p>
          )}
        </AnimatePresence>
      </div>
      {columns.map(({ _key, isAvailable, text, textSecondary }) => (
        <div className={clsx("flex items-start gap-x-1 relative", `group/column`)} key={_key}>
          <div className={clsx(isAvailable ? 'text-body' : 'text-body-neutral-disabled')}>
            {isAvailable ? <CheckIcon /> : <XIcon />}
          </div>
          <div>
            {text && <div>{text}</div>}
            {textSecondary && <div className="type-caption-xxs text-body-neutral-disabled">{textSecondary}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ComparePlansRow