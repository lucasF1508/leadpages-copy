import React from 'react'
import { styled, darkTheme } from '@design'
import Text from '@components/Text'
import Link from '@components/Link'
import Image from '@components/Image'
import { features } from 'config'

const $StatsAlternate = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.625rem',

  '@>769': {
    gap: '3.375rem',
  },

  '@>1025': {
    gap: 0,
  },

  '@>l': {
    gap: '3.375rem',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  '> :first-of-type': {
    '@>510': {
      alignSelf: 'flex-start',
    },

    '@>l': {
      alignSelf: 'center',
    },
  },

  '> :last-of-type': {
    '@>993': {
      alignSelf: 'flex-end',
    },

    '@>l': {
      alignSelf: 'center',
    },
  },
})

const $StatsAlternateColumn = styled('div', {
  maxWidth: '18.125rem',

  '@>510': {
    maxWidth: 'none',
  },
})

const $StatsAlternateStatGrid = styled('div', {
  display: 'grid',
  gap: '$3',
  maxWidth: '45rem',

  '@>510': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@>l': {
    gap: '1.875rem',
  },
})

const $StatsAlternateStat = styled('div', {
  border: '3px solid $colors$lavenderLight',
  p: '$3',
  overflow: 'hidden',
  position: 'relative',

  '@>769': {
    p: '$4_5',
  },

  variants: {
    isLast: {
      true: {
        borderBottomRightRadius: '$statsCard',
      },
    },
    isFirst: {
      true: {
        borderTopLeftRadius: '$statsCard',
      },
    },
  },
})

const $StatsAlternateContent = styled('div', {
  maxWidth: '29rem',

  '@>993': {
    maxWidth: '27.375rem',
  },

  '@>l': {
    maxWidth: '26.5rem',
  },
})

const $Overline = styled(Text, {
  color: '$socialGray',
  mb: '$3',
})

const $Content = styled(Text, {
  '& p': {
    '@>769': {
      lh: '1.333333',
    },
  },
  h3: {
    typeSizes: '5xl',
  },

  '@>993': {
    h3: {
      typeSizes: '6xl',
    },
  },
})

const $Link = styled(Link, {
  typeSizes: 'base',
  fontWeight: '$medium',
  lh: '1.125',
})

const $Image = styled(Image, {
  top: 1,
})

const $StatTitle = styled('h4', {
  color: '$purple',
  typeSizes: '3xl',
  pb: '$1_5',

  '@>600': {
    typeSizes: '5xl',
  },

  '@>l': {
    typeSizes: '7xl',
  },
})

const $StatLabel = styled('h5', {
  typeSizes: 'sm',
  lineHeight: '1.5',
  color: 'navy',

  '@>769': {
    typeSizes: 'lg',
    lineHeight: '1.3',
  },

  '@>l': {
    typeSizes: 'xl',
  },
})

const StatsAlternate = ({
  stats,
  backgroundColor: _backgroundColor,
  links,
  overline,
  content,
  featuredImage,
  imageBackgroundColor,
  ...props
}) => {
  const backgroundColor = _backgroundColor || 'navy'
  const darkBackground = features.darkHeros.includes(backgroundColor)

  return (
    <$StatsAlternate {...props} className={darkBackground && darkTheme}>
      <$StatsAlternateColumn>
        <$StatsAlternateContent>
          <$Overline content={overline} tagStyle="overline" />
          <$Content content={content} />
          {!!links?.length && (
            <$Link {...links[0]} icon="internal" hasIcon={true} />
          )}
        </$StatsAlternateContent>
      </$StatsAlternateColumn>
      <$StatsAlternateColumn>
        <$StatsAlternateStatGrid>
          {stats.map(({ _key, stat, label }, i) => {
            if (i === 3 && featuredImage) {
              return (
                <$StatsAlternateStat
                  key={_key}
                  isLast={true}
                  css={{
                    padding: 0,
                    backgroundColor: imageBackgroundColor,
                    border: 'none',
                  }}
                >
                  <$Image
                    image={featuredImage}
                    alt={featuredImage.alt || featuredImage.caption}
                  />
                </$StatsAlternateStat>
              )
            }
            return (
              <$StatsAlternateStat
                key={_key}
                isLast={i === stats.length - 1}
                isFirst={i === 0}
              >
                <$StatTitle>{stat}</$StatTitle>
                <$StatLabel>{label}</$StatLabel>
              </$StatsAlternateStat>
            )
          })}
        </$StatsAlternateStatGrid>
      </$StatsAlternateColumn>
    </$StatsAlternate>
  )
}

export default StatsAlternate
