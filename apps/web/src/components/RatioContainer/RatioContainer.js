import React from 'react'
import { styled } from '@design'

const $RatioContainer = styled('div', {
  position: 'relative',
  '&::before': {
    content: `''`,
    d: 'block',
  },
  [`
    video,
    img
  `]: {
    objectFit: 'cover',
    objectPosition: 'center center',
  },
})

const RatioContainer = ({
  className,
  ratio = '16:9',
  style,
  children,
  ...props
}) => {
  const [width, height] = ratio.split(':')
  const pb = `${(height / width) * 100}%`

  return (
    <$RatioContainer
      className={className}
      css={{
        '&::before': {
          pb,
        },
      }}
      {...props}
    >
      {children}
    </$RatioContainer>
  )
}

export default RatioContainer
export { $RatioContainer }
