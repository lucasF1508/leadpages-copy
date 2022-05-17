import React from 'react'
import { styled } from '@design'

const $Spacer = styled('div', {
  position: 'relative',
  z: '$under',
})

const Spacer = ({ multiplier, ...props }) => {
  const css = {
    box: { property: 'my', multiplier },
  }

  return <$Spacer css={css} {...props} />
}

export default Spacer
