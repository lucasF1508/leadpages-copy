import React, { memo } from 'react'
import Image from '@components/Image'
import Video from '@components/Video'
import Lottie from '@components/Lottie'
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
  media: {
    condition,
    caption,
    advancedConfig,
    autoplay,
    loop,
    offset,
    playOnScroll,
    startInView,
    yoyo,
    videoControls,
    ...media
  } = {},
  ...props
}) => {
  const Element = () => {
    switch (condition) {
      case 'video':
        return <Video type={type} {...media} {...props} />
      case 'lottie':
        return (
          <Lottie
            type={type}
            advancedConfig={advancedConfig}
            autoplay={autoplay}
            loop={loop}
            offset={offset}
            playOnScroll={playOnScroll}
            startInView={startInView}
            yoyo={yoyo}
            {...media}
            {...props}
          />
        )
      default:
        return (
          <Image
            priority={priority}
            type={type || (ratio ? 'fluid' : 'static')}
            {...media}
            {...props}
          />
        )
    }
  }

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
