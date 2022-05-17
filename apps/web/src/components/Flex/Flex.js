import React from 'react'
import { getAlignmentUtil } from '@design/utils/align'
import { getMaxWidthUtil } from '@design/utils/maxWidth'

import { styled } from '@design'

const $Flex = styled('div', {
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'center',
  w: '100%',
  variants: {
    maxWidth: getMaxWidthUtil(),
    align: getAlignmentUtil(),
  },
})

const Flex = ({ children, ...props }) => <$Flex {...props}>{children}</$Flex>

export default Flex
