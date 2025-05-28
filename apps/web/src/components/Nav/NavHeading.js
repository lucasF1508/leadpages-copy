import Link from '@components/Link'
import { styled } from '@design'
import { m } from 'framer-motion'
import { useState } from 'react'
import { navStore } from './NavStore'

const $NavHeading = styled('div', {
  d: 'flex',
  ai: 'center',
  jc: 'space-between',
  w: '100%',
  pt: '0.438rem',
  pb: '0.563rem',
  borderBottom: '1px solid $colors$lightGray3',

  variants: {
    isMobile: {
      true: {
        borderBottom: 'none',
      },
    },
  },
})

const $Heading = styled('h3', {
  typeSizes: 'sm',
  typeStyles: 'breadcrumbs',
  color: '$textAlt',
  fontWeight: '$medium',
  lh: 1.4,
})

const $Link = styled('div', {
  color: '$textAlt',
  typeSizes: 'sm',
  position: 'relative',

  '&:hover': {
    color: '$primary',
  },

  svg: {
    w: '$space$2_5',
    h: '$space$2_5',
  },
})

const $LinkUnderline = styled(m.div, {
  h: '3px',
  w: '100%',
  backgroundColor: '$primary',
  position: 'absolute',
  bottom: 'calc(($1_5 - 3px)*-1)',
  left: 0,
  transformOrigin: 'left',
})

const NavHeading = ({ data, isMobile = false }) => {
  const { heading, links } = data
  const link = links?.length > 0 && links[0]
  const [isHovered, setIsHovered] = useState(false)
  const setNavOpen = navStore((state) => state.setNavOpen)

  if (!heading && !link) return null

  return (
    <$NavHeading isMobile={isMobile}>
      {heading && <$Heading>{heading}</$Heading>}
      {link && !isMobile && (
        <$Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setNavOpen(false)}
        >
          <Link {...link} hasIcon />
          <$LinkUnderline
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </$Link>
      )}
    </$NavHeading>
  )
}

export default NavHeading
