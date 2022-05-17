import React, { memo } from 'react'
import Image from '@components/Image'
import Video from '@components/Video'
import RatioContainer from '@components/RatioContainer'
import Text from '@components/Text'
import { styled } from '@design'

const $Media = styled('div', {
  position: 'relative',
  w: '100%',
  variants: {
    type: {
      fluid: {
        position: 'static',
      },
    },
  },
})

const $MediaCaption = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'flex-start',
  ai: 'center',

  '@>m': {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translate3d(-50%, 0, 0)',
  },
})

const Media = ({
  className,
  css,
  ratio,
  priority,
  type,
  media: { condition, caption, ...media } = {},
  ...props
}) => {
  const Element = () =>
    condition === 'video' ? (
      <Video type={type} {...media} {...props} />
    ) : (
      <Image
        priority={priority}
        type={type || (ratio ? 'fluid' : 'static')}
        {...media}
        {...props}
      />
    )

  return (
    <$Media className={className} type={type} css={css}>
      {ratio ? (
        <RatioContainer ratio={ratio}>
          <Element />
        </RatioContainer>
      ) : (
        <Element />
      )}

      {caption && (
        <$MediaCaption>
          <Text content={caption} tagStyle="caption" />
        </$MediaCaption>
      )}
    </$Media>
  )
}

export default memo(Media)
