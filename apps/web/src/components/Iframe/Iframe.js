import React from 'react'
import { styled } from '@design'

export const IframeContainer = styled('div', {
  position: 'relative',
  w: '100%',

  '&::before': {
    content: `''`,
    d: 'block',
    w: '100%',
    bc: '$grey3',
  },

  '& iframe': {
    of: 'cover',
    top: 0,
    left: 0,
    h: '100%',
    w: '100%',
  },
})

const IFrame = ({ className, embed }) => (
  <IframeContainer className={className}>
    <iframe
      title={embed}
      src={embed}
      frameBorder="0"
      allowFullScreen="allowfullscreen"
    />
  </IframeContainer>
)

export default IFrame
