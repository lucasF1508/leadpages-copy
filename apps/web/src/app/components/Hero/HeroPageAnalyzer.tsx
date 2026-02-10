import type { ContentType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'
import Image from '@/components/Image'

export interface HeroPageAnalyzerProps {
  content?: ContentType
  logo?: any
}

const HeroPageAnalyzer = ({
  content,
  logo,
}: HeroPageAnalyzerProps) => {
  if (!content || content.length === 0) return null

  return (
    <Pinion component="hero" className="!my-0">
      <div className="flex flex-col items-center justify-center gap-2 md:gap-3 max-w-cols10 mx-auto text-center py-4 md:py-6">
        <Text
          as="div"
          className={clsx(
            'text-center [&>*]:!my-0 gap-2 md:gap-3 flex-col flex',
            '[&>h1]:text-4xl [&>h1]:md:text-6xl [&>h1]:font-bold',
            '[&>h2]:text-4xl [&>h2]:md:text-6xl [&>h2]:font-bold',
            '[&>p]:text-xl [&>p]:md:text-2xl [&>p]:max-w-4xl [&>p]:mx-auto'
          )}
          content={content}
        />
      </div>
    </Pinion>
  )
}

export default HeroPageAnalyzer
