import React from 'react'
import clsx from 'clsx'
import Text from '@/components/Text'
import Pinion from '@/components/Pinion'

export interface InspirationDescriptionProps {
  content?: string
  className?: string
}

const InspirationDescription = ({
  content,
  className,
}: InspirationDescriptionProps) => {
  if (!content) return null

  return (
    <Pinion
      component="inspirationDescription"
      className={clsx('theme-dark', className)}
    >
      <div className="w-full">
        <Text
          as="div"
          className="type-body-lg text-body/90 leading-relaxed"
          content={content}
        />
      </div>
    </Pinion>
  )
}

export default InspirationDescription

