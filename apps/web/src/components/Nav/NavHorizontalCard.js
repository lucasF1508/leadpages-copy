import { useState } from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from '@components/Link'
import { $LinkUnderline } from '@components/Nav/NavStackedCard'

const $NavHorizontalCard = styled('div', {
  d: 'flex',
  gap: '$2',
  p: '$1_5',
  transition: 'background-color $snappy',
  cursor: 'pointer',
  width: '100%',

  '&:hover': {
    backgroundColor: 'rgba(15, 12, 9, 0.04);',

    '> figure > span': {
      transform: 'scale(1.1)',
    },

    h3: {
      color: '$primary',
    },
  },

  variants: {
    linkStyle: {
      text: {
        span: {
          color: '$textAlt',
        },

        '&:hover': {
          span: {
            color: '$primary',
          },
        },
      },
      button: {
        '&:hover': {
          span: {
            bc: '$hover',
            borderColor: '$hover',
            c: '$hoverColor',
          },
        },
      },
      ghost: {
        '&:hover': {
          span: {
            bc: '$hover',
            borderColor: '$hover',
            c: '$hoverColorGhost',
          },
        },
      },
    },
  },
})

const $Content = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  ai: 'flex-start',
})

const $Heading = styled('h3', {
  typeSizes: 'base',
  typeStyles: 'buttonSm',
  fontWeight: '$medium',
  lh: '$l',
  mb: '$0_5',
})

const $SecondaryText = styled('p', {
  typeSizes: 'sm',
  color: '$textAlt',
  fontWeight: '$normal',
})

const $Image = styled(Image, {
  overflow: 'hidden',
  br: '$s',
  flex: '0 0 6.25rem',
  height: '6.25rem',

  '> span': {
    transition: 'transform $snappy',
  },
})

const $LinkLabel = styled('div', {
  type: 'buttonSm',
  position: 'relative',
  color: '$textAlt',
  mt: '$1_5',
})

const $Link = styled(Link, {
  justifyContent: 'flex-start',
})

const NavHorizontalCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { content, heading, image, link, linkLabel } = data
  const { url, target, condition, hasIcon, linkStyle } = link

  if (!image) return null

  return (
    <$Link condition={condition} target={target} url={url}>
      <$NavHorizontalCard
        linkStyle={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <$Image image={image} />
        <$Content>
          {heading && <$Heading>{heading}</$Heading>}
          {content && <$SecondaryText>{content}</$SecondaryText>}
          {linkLabel && (
            <$LinkLabel>
              <Link
                as="span"
                condition={condition}
                css={{
                  px: linkStyle !== 'text' && '$2',
                }}
                hasIcon={hasIcon}
                label={linkLabel}
                linkStyle={linkStyle}
                url={url}
              />
              <$LinkUnderline
                animate={{
                  scaleX: linkStyle === 'text' && isHovered ? 1 : 0,
                }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.2 }}
              />
            </$LinkLabel>
          )}
        </$Content>
      </$NavHorizontalCard>
    </$Link>
  )
}

export default NavHorizontalCard
