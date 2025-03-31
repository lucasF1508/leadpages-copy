import type { ColumnOptionWidthKeysType } from '@/lib/utils/getColumnsOptionWidth'
import React from 'react'
import clsx from 'clsx'
import getColumnsOptionWidth from '@/lib/utils/getColumnsOptionWidth'

interface MaxWidthProps {
  children?: React.ReactNode
  value?: {
    columnsWidth?: ColumnOptionWidthKeysType
  }
}

const MaxWidth = ({ children, value }: MaxWidthProps) => {

  if(!value?.columnsWidth) return <>{children}</>

  const maxWidth = getColumnsOptionWidth(value?.columnsWidth)

  return <span className={clsx('block [.text-center_&]:mx-auto', maxWidth)}>{children}</span>
}

export default MaxWidth
