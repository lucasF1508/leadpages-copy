import React, { memo } from 'react'
import { styled } from '@design'
import dynamic from 'next/dynamic'
import Image from '@components/Image'
import RatioContainer from '@components/RatioContainer'
import Text from '@components/Text'
import Video from '@components/Video'

const Lottie = dynamic(
  () => import('@components/Lottie'),
  { ssr: false }
)

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
          advancedConfig={advancedConfig}
          autoplay={autoplay}
          loop={loop}
          offset={offset}
          playOnScroll={playOnScroll}
          startInView={startInView}
          type={type}
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
    <$Media className={className} css={css} type={type}>
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
