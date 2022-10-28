import React from 'react'
import { getAlignmentUtil } from '@design/utils/align'
import { getMaxWidthUtil } from '@design/utils/maxWidth'

import { styled } from '@design'

const $Flex = styled('div', {
  d: 'flex',
  w: '100%',

  variants: {
    maxWidth: getMaxWidthUtil(),
    align: getAlignmentUtil(),
    layout: {
      horizontal: {
        ff: 'row wrap',
        jc: 'flex-start',
        ai: 'center',
      },
      vertical: {
        ff: 'column wrap',
        ai: 'flex-start',
      },
    },
  },
  defaultVariants: {
    layout: 'vertical',
  },
})

const Flex = ({ children, ...props }) => <$Flex {...props}>{children}</$Flex>

export default Flex
