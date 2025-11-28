import React from 'react'
import { styled, darkTheme, theme } from '@design'
import { features } from 'config'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'
import ImageFallback from '@images/Leadpages-Free-Trial@2x.png'

const $Heading = styled(Heading, {
  pb: '$3',
  pt: '$0_5',
})

const $Text = styled(Text, {
  fontSize: '$sizes$2',
})

const $CTAButton = styled('button', {
  textAlign: 'left',

  variants: {
    isFlex: {
      true: {
        a: {
          d: 'inline-flex',
          border: '2px solid',

          '&:hover': {
            border: '2px solid',
          },
        },
      },
    },
  },
})

const $CTAContent = styled('div', {
  p: '$2_5',
  d: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  [`${$Heading}`]: {
    mb: '$0',
  },

  '@>s': {
    px: '$5',
    py: '$3',
  },
})

const $CTAImage = styled('div', {
  position: 'relative',
  width: '100%',
  minHeight: '200px',
  pt: '$3',
  d: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  overflow: 'hidden',

  '& > figure': {
    width: '100%',
    height: '100%',
    minHeight: '150px',
  },

  '@>s': {
    minHeight: 'auto',
    py: '$3',
    mr: '$5',
    mx: 0,
    flex: '0 0 auto',
    maxWidth: '92.5%',
    alignItems: 'flex-start',

    '& > figure': {
      minHeight: 'auto',
    },
  },

  variants: {
    imageWidth: {
      half: {
        '@>s': {
          maxWidth: '50%',
        },
      },
      third: {
        '@>s': {
          maxWidth: '33%',
        },
      },
      quarter: {
        '@>s': {
          maxWidth: '25%',
        },
      },
    },
  },
})

const $InlineCta = styled('div', {
  bc: '$grayAlt',
  mb: '$3',
  d: 'flex',
  flexDirection: 'column',

  '@>s': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  variants: {
    contentRight: {
      true: {
        '@>s': {
          flexDirection: 'row',
        },
      },
      false: {
        '@>s': {
          flexDirection: 'row-reverse',
        },
      },
    },
    imageBottom: {
      true: {
        flexDirection: 'column-reverse',
        '@>s': {
          flexDirection: 'row',
        },
        [`${$CTAImage}`]: {
          pb: 0,
          pt: 0,
          justifyContent: 'flex-end',
          '@>s': {
            pt: '$3',
          },
        },
      },
      false: {},
    },
    bgColor: {
      primary: {
        bc: '$primary',

        [`${$CTAContent}`]: {
          '& p': {
            c: '$white',
          },

          [`h2, h3, h4`]: {
            c: '$white',
          },
        },
      },
      secondary: { 
        bc: '$ctaPurple',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$white',
          },
          [`h2, h3, h4`]: {
            c: '$white',
          },
        },
      },
      grayAlt: { 
        bc: '$grayAlt',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      tan: { 
        bc: '$tan',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      lavenderLight: { 
        bc: '$lavenderLight',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      textHighlight: { 
        bc: '$textHighlight',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      champagne: { 
        bc: '$champagne',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      magnolia: { 
        bc: '$magnolia',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      lavenderBlush: { 
        bc: '$lavenderBlush',
        [`${$CTAContent}`]: {
          '& p': {
            c: '$text',
          },
          [`h2, h3, h4`]: {
            c: '$text',
          },
        },
      },
      transparent: {
        bc: 'transparent',
        [`${$CTAContent}`]: {
          p: 0,

          '@>s': {
            px: '$5',
            py: '$3',
          },
        },
      },
    },
  },
})

const $Links = styled('div', {
  d: 'flex',
  gap: '$2',
})

const InlineCta = ({ node = {}, ...props }) => {
  const { cta: globalCta, ...rest } = node

  const data = {
    ...rest,
    ...(globalCta || {}),
  }

  const {
    image,
    content,
    ctaLink,
    contentRight,
    imageBottom,
    bgColor,
    imageWidth = 'third',
    links,
    legacyLink,
  } = data

  const { darkBackgrounds } = features
  const useDarkMode =
    bgColor !== 'transparent' &&
    [...darkBackgrounds, 'primary'].includes(bgColor)

  // Determine order of elements based on contentRight
  // contentRight: true (default) = image left, content right → mobile: image top, content bottom
  // contentRight: false = content left, image right → mobile: content top, image bottom
  // Normalize image structure - create a simple reference for useImageParserLegacy
  const normalizedImage = image?.asset 
    ? { 
        _type: 'image', 
        asset: {
          _ref: image.asset._id || image.asset._ref,
          _type: 'reference',
        },
        ...(image.altText ? { altText: image.altText } : {}),
        ...(image.alt ? { altText: image.alt } : {}),
        ...(image.lqip ? { lqip: image.lqip } : {}),
        ...(image.hotspot ? { hotspot: image.hotspot } : {}),
        ...(image.crop ? { crop: image.crop } : {}),
      }
    : image?._type === 'image' 
      ? image 
      : null

  const imageElement = normalizedImage ? (
    <$CTAImage imageWidth={imageWidth}>
      <Image 
        objectFit="contain" 
        image={normalizedImage}
        type="static"
      />
    </$CTAImage>
  ) : null
  
  const contentElement = (
    <$CTAContent>
      {content && <$Text content={content} usePostTokens={true} />}
      {legacyLink && ctaLink && (
        <$CTAButton isFlex={true}>
          <Link
            {...ctaLink}
            linkStyle={bgColor === 'primary' ? 'buttonInverse' : 'button'}
            label={`${ctaLink.label} →`}
          />
        </$CTAButton>
      )}
      <$Links>
        {!legacyLink &&
          !!links?.length &&
          links?.map(({ _key, _type, linkStyle, ...link }) => (
            <>
              <Link
                key={_key}
                className={
                  (_type === 'signUp' || linkStyle === 'button') &&
                  useDarkMode
                    ? darkTheme
                    : theme
                }
                bgColor={bgColor}
                align={'start'}
                _type={_type}
                linkStyle={linkStyle}
                {...link}
              />
            </>
          ))}
      </$Links>
    </$CTAContent>
  )

  return (
    <$InlineCta
      {...props}
      contentRight={contentRight}
      imageBottom={imageBottom}
      bgColor={bgColor}
    >
      {contentRight === false ? contentElement : imageElement}
      {contentRight === false ? imageElement : contentElement}
    </$InlineCta>
  )
}

export default InlineCta
