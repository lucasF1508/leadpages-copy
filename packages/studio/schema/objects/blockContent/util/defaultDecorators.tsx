import { colors } from '@/schema/decorators/colors'
import React from 'react'

const defaultDecorators = [
  {title: 'Strong', value: 'strong'},
  {title: 'Emphasis', value: 'em'},
  {
    title: 'UnderLine',
    value: 'underline',
    icon: () => <span style={{textDecoration: 'underline', fontWeight: 700}}>U</span>,
  },
  ...colors
]

export default defaultDecorators
