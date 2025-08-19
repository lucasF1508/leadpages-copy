import React from 'react'
import {F} from '@/schema/tool'
import {blockContent} from './blockContent'

const [toolbar] = (blockContent as any)?.of  || []

export const blockContentSimple = F.array({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  of: [toolbar]
})
