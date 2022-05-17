import React from 'react'
import { styled } from '@design'

const $Embed = styled('div', {
  '> *': {
    maxWidth: '100%',
  },
  variants: {
    isResponsive: {
      true: {
        position: 'relative',
        '> *': {
          position: 'absolute',
          inset: '0',
          height: '100%',
          width: '100%',
        },
      },
    },
  },
})

const Embed = ({ code, isResponsive, ratio = '16:9', ...props }) => {
  const css = isResponsive
    ? {
        ratio,
      }
    : {}

  return (
    <$Embed
      isResponsive={isResponsive}
      css={css}
      {...props}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}

export default Embed
