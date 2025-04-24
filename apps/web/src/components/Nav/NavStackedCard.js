import Image from '@components/Image'
import Link from '@components/Link'
import { styled } from '@design'
import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'

const $NavStackedCard = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '$1_5',
  p: '$1_5',
  borderRadius: '$navItem',
  transition: 'background-color $snappy',

  '&:hover': {
    backgroundColor: 'rgba(15, 12, 9, 0.04);',
  },

  '&:hover > figure > span': {
    transform: 'scale(1.1)',
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
  gap: '$1_5',
  p: '$1_5',
  ai: 'flex-start',
})

const $Heading = styled(m.h3, {
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

const $Link = styled('div', {
  type: 'buttonSm',
  position: 'relative',
})

const $Image = styled(Image, {
  overflow: 'hidden',
  br: '0.25rem',

  '> span': {
    transition: 'transform $snappy',
  },
})

export const $LinkUnderline = styled(m.div, {
  h: '3px',
  w: '100%',
  backgroundColor: '$primary',
  position: 'absolute',
  bottom: '-$1',
  left: 0,
  transformOrigin: 'left',
})

const NavStackedCardContents = ({ data }) => {
  const { content, heading, image, link } = data
  const { linkStyle } = link
  const [isHovered, setIsHovered] = useState(false)

  if (!image) return null

  return (
    <$NavStackedCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      linkStyle={linkStyle}
    >
      <$Image image={image} isLegacy={false}/>
      <$Content>
        <div>
          <AnimatePresence mode="popLayout">
            {heading && (
              <$Heading
                key={isHovered ? 'hovered' : 'normal'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                css={{ color: isHovered && '$primary' }}
              >
                {heading}
              </$Heading>
            )}
          </AnimatePresence>
          {content && <$SecondaryText>{content}</$SecondaryText>}
        </div>
        {link && (
          <$Link>
            <Link
              {...link}
              as="span"
              css={{
                color: linkStyle !== 'ghost' && '$textAlt',
                px: linkStyle !== 'text' && '$2',
              }}
            />
            <$LinkUnderline
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: linkStyle === 'text' && isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </$Link>
        )}
      </$Content>
    </$NavStackedCard>
  )
}

const NavStackedCard = ({ data }) => {
  const { link } = data

  if (!link) return <NavStackedCardContents data={data} />

  return (
    <Link {...link} linkStyle="none">
      <NavStackedCardContents data={data} />
    </Link>
  )
}

export default NavStackedCard
