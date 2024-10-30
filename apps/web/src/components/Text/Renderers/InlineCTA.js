import React from 'react'
import { styled, theme } from '@design'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'
import ImageFallback from '@images/Leadpages-Free-Trial@2x.png'
import omit from 'lodash/omit'

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
    justifyContent: 'space-between',
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

          [`h2, h3, h4`]: {
            c: '$white',
          },
        },
      },
      secondary: { bc: '$ctaPurple' },
      grayAlt: { bc: '$grayAlt' },
      tan: { bc: '$tan' },
      lavenderLight: { bc: '$lavenderLight' },
      textHighlight: { bc: '$textHighlight' },
      champagne: { bc: '$champagne' },
      magnolia: { bc: '$magnolia' },
      lavenderBlush: { bc: '$lavenderBlush' },
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
            links?.map(({ _key, ...link }) => (
              <Link
                className={
                  bgColor !== 'purple' && link.linkStyle === 'button' && theme
                }
                bgColor={bgColor}
                key={_key}
                align={'start'}
                {...link}
              />
            ))}
        </$Links>
      </$CTAContent>
    </$InlineCta>
  )
}

export default InlineCta
