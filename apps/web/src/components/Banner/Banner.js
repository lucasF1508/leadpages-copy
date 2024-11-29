import React from 'react'
import { styled, darkTheme, theme } from '@design'
import Image from '@components/Image'
import Link from '@components/Link'
import { features } from 'config'
import { colorOptions } from '@design/objects'

const $Banner = styled('div', {
  maxWidth: '$narrow',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  background: '$grayAlt',

  variants: {
    backgroundColor: colorOptions,
  },
})

const $BannerInner = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',
  textAlign: 'center',
  gap: '$1_5',

  '@>769': {
    flexDirection: 'row',
    textAlign: 'left',
    gap: 0,
  },
})

const $Image = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  minWidth: '12.5rem',
  maxWidth: '15.5rem',
  alignSelf: 'center',

  '@>769': {
    mt: '$4_5',
    alignSelf: 'unset',
  },

  '> figure': {
    alignSelf: 'flex-end',
  },

  variants: {
    imagePosition: {
      edge: {},
      content: {
        mb: '$4_5',
        ml: '$4_5',
      },
    },
  },
})

const $Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  '@>769': {
    padding: '$4_5',
  },

  '@>1200': {
    gap: '$4_5',
  },

  variants: {
    hasImage: {
      true: {},
      false: {
        '@>1200': {
          flexDirection: 'row',
          alignItems: 'center',
        },
      },
    },
  },
})

const $Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  lineHeight: '$lineHeights$m',
  color: '$text',
})

const $SubHeading = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$1_5',

  '@>769': {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
})

const $Body = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '1.125rem',
  lineHeight: '1.5rem',
})

const $ContentInner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.125rem',
})

const $Link = styled('div', {
  '& > div': {
    '@>769': { alignItems: 'flex-start', maxWidth: '$cols6' },
  },

  variants: {
    type: {
      signUp: {
        flexBasis: '100%',

        '& form': {
          width: '100%',
          maxWidth: '$cols5',
          mb: 0,
        },
      },
    },
  },
})

const $Pill = styled('div', {
  py: '$0_5',
  px: '$1_5',
  backgroundColor: '$lavenderLight',
  borderRadius: '$pill',

  '> div': {
    color: '$primary',
    lh: '1.4',
    position: 'relative',
    top: 1,
    fontWeight: '$normal',
    type: 'overline',
  },
})

const $LayoutContainer = styled('div', {
  marginLeft: '$4_5',
  marginRight: '$4_5',

  '@>s': {
    marginLeft: '$6',
    marginRight: '$6',
  },
})

const Banner = ({
  heading,
  subheading,
  image,
  links,
  body,
  pill,
  componentColor: backgroundColor,
  backgroundColor: sectionColor,
  imagePosition = 'edge',
  linkIsHidden = false,
}) => {
  const link = links?.[0]
  const { darkBackgrounds } = features
  const useDarkMode =
    backgroundColor !== 'transparent'
      ? darkBackgrounds.includes(backgroundColor)
      : darkBackgrounds.includes(sectionColor)

  return (
    <$LayoutContainer>
      <$Banner
        backgroundColor={backgroundColor}
        className={useDarkMode ? darkTheme : theme}
      >
        <$BannerInner>
          {image && (
            <$Image imagePosition={imagePosition}>
              <Image image={image} alt={image?.altText} />
            </$Image>
          )}
          <$Content hasImage={!!image}>
            <$ContentInner>
              {heading && <$Heading>{heading}</$Heading>}
              {subheading && (
                <$SubHeading>
                  {pill && (
                    <$Pill>
                      <div>{pill}</div>
                    </$Pill>
                  )}
                  <div>{subheading}</div>
                </$SubHeading>
              )}
              {body && <$Body>{body}</$Body>}
            </$ContentInner>
            {link && !linkIsHidden && (
              <$Link type={link?._type}>
                <Link
                  {...link}
                  css={{
                    minWidth: 'unset',
                    paddingLeft: '$2_5',
                    paddingRight: '$2_5',
                  }}
                />
              </$Link>
            )}
          </$Content>
        </$BannerInner>
      </$Banner>
    </$LayoutContainer>
  )
}

export default Banner
