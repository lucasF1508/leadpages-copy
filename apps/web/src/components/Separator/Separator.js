import React from 'react'
import { styled } from '@design'
import * as Primitives from '@radix-ui/react-separator'

const $Separator = styled(Primitives.Root, {
  bc: '$white',
  '&[data-orientation=horizontal]': {
    h: 1,
    w: '100%',
  },

  '&[data-orientation=vertical]': {
    h: '100%',
    w: 1,
  },
})

const Separator = ({
  decorative = true,
  orientation = 'horizontal',
  ...props
}) => (
  <$Separator decorative={decorative} orientation={orientation} {...props} />
)

export default Separator
