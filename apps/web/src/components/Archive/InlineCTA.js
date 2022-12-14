import React from 'react'
import { styled } from '@design'
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
  mr: '$5',
  pt: '$3',
  d: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '92.5%',

  '@>s': {
    py: '$3',
    mx: 0,
    flex: '0 0 auto',
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

  '@>s': {
    d: 'flex',
  },

  variants: {
    contentRight: {
      true: {},
      false: {
        flexDirection: 'row-reverse',
      },
    },
    imageBottom: {
      true: {
        [`${$CTAImage}`]: {
          pb: 0,
          justifyContent: 'flex-end',
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

          [`${$Heading}`]: {
            c: '$white',
          },
        },
      },
      secondary: { bc: '$ctaPurple' },
      grayAlt: { bc: '$grayAlt' },
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

const InlineCta = ({ node = {}, ...props }) => {
  const {
    image,
    title,
    content,
    ctaLink,
    contentRight,
    imageBottom,
    bgColor,
    imageWidth = 'third',
  } = node

  return (
    <$InlineCta
      {...props}
      contentRight={contentRight}
      imageBottom={imageBottom}
      bgColor={bgColor}
    >
      <$CTAImage imageWidth={imageWidth}>
        <Image objectFit="contain" image={image || ImageFallback} />
      </$CTAImage>
      <$CTAContent>
        {title && <$Heading tag="h2" tagStyle="h3" heading={title} />}
        {content && <$Text content={content} />}
        {ctaLink && (
          <$CTAButton isFlex={true}>
            <Link
              {...ctaLink}
              linkStyle={bgColor === 'primary' ? 'buttonInverse' : 'button'}
              label={`${ctaLink.label} →`}
            />
          </$CTAButton>
        )}
      </$CTAContent>
    </$InlineCta>
  )
}

export default InlineCta
