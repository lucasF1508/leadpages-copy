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
  css: cssOrg,
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
    maxWidth,
    align,
    video,
    ...media
  } = {},
  ...props
}) => {
  const alignMargin = {
    ml: align === 'left' ? 0 : 'auto',
    mr: align === 'right' ? 0 : 'auto',
  }

  const css = {
    maxWidth,
    ...alignMargin,
    ...cssOrg,
  }

  const Element = () => {
    switch (condition) {
      case 'video':
        return <Video type={type} video={video} {...media} {...props} />
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
