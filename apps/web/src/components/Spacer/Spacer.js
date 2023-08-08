import React from 'react'
import { styled } from '@design'

const $Spacer = styled('div', {
  position: 'relative',
  z: '$under',
})

const Spacer = ({
  multiplier,
  multiplierSmall,
  multiplierMedium,
  multiplierLarge,
  ...props
}) => {
  const css = {
    box: { property: 'my', multiplier },
    ...(typeof multiplierMedium === 'number'
      ? {
          '@>m': {
            box: { property: 'my', multiplier: multiplierMedium },
          },
        }
      : {}),
    ...(typeof multiplierLarge === 'number'
      ? {
          '@>l': {
            box: { property: 'my', multiplier: multiplierLarge },
          },
        }
      : {}),
  }

  return <$Spacer css={css} {...props} />
}

export default Spacer
