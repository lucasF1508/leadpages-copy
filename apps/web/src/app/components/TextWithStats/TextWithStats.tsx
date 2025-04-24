import type { ContentType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Text from '@/components/Text'

type StatType = {
  _key: string
  content?: string
  stat?: string
  statSize?: 'large' | 'small'
}

interface TextWithStatsProps {
  content?: ContentType
  stats: StatType[]
}

const TextWithStats = ({ content, stats }: TextWithStatsProps) => (
    <div className='flex flex-col 740:flex-row gap-4 justify-between 740:px-0 xs:px-3'>
      <div className='max-w-cols7 flex-[1_1_auto]'>
        <Text className='[&_p]:text-body-muted' content={content} />
      </div>
      {stats?.length && (
        <div className='flex flex-col gap-4 sm:gap-5 min-w-cols2 max-w-cols4 flex-[1_1_auto]'>
          {stats.map((stat) => (
            <div className='flex flex-col gap-1 sm:gap-1.5' key={stat?._key}>
              <div className={
                clsx(
                  'bg-gradient-purple text-transparent bg-clip-text', 
                  stat?.statSize === 'large' ? 'type-stat-md sm:type-stat-lg' : `type-stat-sm`
                )
              }>
                  {stat?.stat}
              </div>
              <div className='type-body-xs'>{stat?.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

export default TextWithStats
