import React, { memo } from 'react'
import Image from '@components/Image'
import Video from '@components/Video'
import Lottie from '@components/Lottie'
import RatioContainer from '@components/RatioContainer'
import Text from '@components/Text'
import { styled } from '@design'
import dynamic from 'next/dynamic'

const WistiaEmbed = dynamic(() =>
  import('@legacy/components/videos/Wistia_CustomerFeatureVideo')
)

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

const Element = ({ condition, type, media, priority, ratio, ...props }) => {
  const {
    advancedConfig,
    autoplay,
    loop,
    offset,
    playOnScroll,
    startInView,
    yoyo,
    wistiaId,
    video,
  } = media

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
    case 'wistia':
      return <WistiaEmbed videoId={wistiaId} />
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

const Media = ({
  className,
  css: cssOrg,
  ratio,
  priority,
  type,
  media: { condition, caption, maxWidth, align, ...media } = {},
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

  const elementProps = {
    condition,
    type,
    priority,
    ratio,
    media,
    ...props,
  }

  return (
    <$Media className={className} type={type} css={css}>
      {ratio ? (
        <RatioContainer ratio={ratio}>
          <Element {...elementProps} />
        </RatioContainer>
      ) : (
        <Element {...elementProps} />
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
