import type { ContentType } from '@types'
import React from 'react'
import Text from '@/components/Text'

interface TextColumnProps {
  _key: string
  content?: ContentType
  title?: string
}

interface TextColumnsProps {
  columns?: TextColumnProps[]
}

const TextColumns = ({ columns }: TextColumnsProps) => (
    <>
      {columns?.length && (
        <div className='flex flex-col 740:flex-row gap-4'>
          {columns.map(({_key, content, title}) => (
            <div className='flex flex-col gap-1 sm:gap-1.5 min-w-cols2 max-w-cols4 flex-[1_1_auto]' key={_key}>
              <div className='type-stat-xs sm:type-stat-sm bg-gradient-dark-purple text-transparent bg-clip-text'>{title}</div>
              <Text content={content} />
            </div>
          ))}
        </div>
      )}
    </>
  )

export default TextColumns
