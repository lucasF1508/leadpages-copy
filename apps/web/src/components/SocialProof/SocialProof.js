import React from 'react'
import { styled, darkTheme } from '@design'
import Link from '@components/Link'
import Text from '@components/Text'
import Image from '@components/Image'
import Media from '@components/Media'
import { features } from 'config'
import { Ratings } from '@components/Testimonial'

const $SocialProofSection = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'column',
  jc: 'space-between',
  o: 'hidden',
  mw: '$extended',
  borderTopLeftRadius: '$statsCard',
  borderBottomRightRadius: '$statsCard',
  px: '$6',
  py: '$7',
  alignItems: 'center',
  gap: '4.75rem',

  '@>m': {
    py: '$10',
    px: '$8',
  },

  '@>1025': {
    ff: 'row',
    gap: '6.125rem',
  },

  '@>1400': {
    py: '$16',
    px: '$14',
    gap: '10rem',
  },

  variants: {
    bgColor: {
      gray: {
        bc: '$grayAlt',
      },
      gray4: {
        bc: '$gray',
      },
      white: {
        bc: '$white',
      },
      lavender: {
        bc: '$lavenderLight',
      },
      teal: {
        bc: '$tealLight',
      },
      purple: {
        bc: '$purple',
      },
      navy: {
        bc: '$darkBlue',
      },
      purpleDark: {
        bc: '$purpleDark',
      },
    },
  },

  defaultVariants: {
    bgColor: 'navy',
  },
})

const $Text = styled(Text, {
  mb: 0,
  textAlign: 'center',

  h3: {
    typeSizes: 'h1Alt',

    '@>m': { typeSizes: '6xl' },
  },

  '&:last-child': {
    mb: 0,
  },

  '@>1025': {
    textAlign: 'left',
  },
})

const $SocialProofContent = styled('div', {
  gap: '$3',
  d: 'flex',
  ff: 'column',
  flex: '1 0 100%',
  pb: '$6',
  mx: 'auto',

  '@>1025': {
    mw: '29rem',
    pb: 0,
  },

  '@>l': {
    mw: '39.375rem',
    jc: 'center',
  },

  [`${$Text}`]: {
    mb: 0,
  },
})

const $Overline = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'center',
  ai: 'center',
  gap: '$1_5',
  type: 'overline',
  ta: 'center',

  '& article': {
    c: '$primary',
    typeSizes: 'xs',

    '@>l': {
      lh: '1',
      top: '2px',
    },
  },

  '@>1025': {
    ta: 'left',
    ai: 'flex-start',
    jc: 'flex-start',
  },

  '@>l': {
    ff: 'row',
    ai: 'center',
  },
})

const $Links = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'center',
  gap: '$3',

  '@>600': {
    ff: 'row',
  },

  '@>1025': {
    jc: 'flex-start',
    gap: '$1_5',
  },
})

const $Media = styled('div', {
  width: '100%',
  mw: '16.25rem',
  zIndex: 1,
})

const $Background = styled('div', {
  position: 'absolute',
  w: '29.875rem',
  bottom: '0',

  '@>1025': {
    right: '0',
  },
})

const SocialProof = ({
  bgColor: _bgColor,
  rating,
  content,
  links,
  overline,
  image,
  background,
}) => {
  const bgColor = _bgColor || 'navy'
  const darkBackground = features.darkHeros.includes(bgColor)

  return (
    <$SocialProofSection
      className={darkBackground && darkTheme}
      bgColor={bgColor}
    >
      <$SocialProofContent>
        <$Overline>
          <Ratings rating={rating} white={true} />
          <Text content={overline} />
        </$Overline>
        <$Text content={content} />
        <$Links>
          {!!links.length &&
            links.map(({ _key, ...link }) => (
              <Link key={_key} {...link} css={{ minWidth: 'unset' }} />
            ))}
        </$Links>
      </$SocialProofContent>
      <$Media>
        <Media media={image} />
      </$Media>
      <$Background>
        <Image image={background} ratio="1:1" />
      </$Background>
    </$SocialProofSection>
  )
}

export default SocialProof
