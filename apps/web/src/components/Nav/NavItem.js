import { styled } from '@design'
import Image from '@components/Image'
import Link from '@components/Link'
import { useCarouselStore } from './NavColumnCarousel'
import { useNavStore } from './NavStore'

const $NavItem = styled('div', {
  d: 'flex',
  ai: 'flex-start',
  typeSizes: 'sm',
  w: '100%',
  py: '$1_5',
  px: '0.375rem',
  borderRadius: '$navItem',
  transition: 'background-color $snappy',
  boxSizing: 'border-box',

  '&:hover': {
    backgroundColor: 'rgba(15, 12, 9, 0.04);',
    color: '$primary',
  },

  '@>navigationDesktopAlt': {
    p: '$1_5',
    mw: '18.5rem',
  },
})

const $NavItemContents = styled('div', {
  d: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',
  jc: 'center',
})

const $NavItemHeading = styled('div', {
  d: 'flex',
  ai: 'center',
  gap: '$1',
  mt: '0.125rem',
})

const $NavItemHeadingLabel = styled('h4', {
  typeSizes: 'base',
  typeStyles: 'buttonSm',
})

const $SecondaryText = styled('p', {
  d: 'none',
  fontWeight: 'normal',

  '@>700': {
    d: 'block',
  },
})

const $Pill = styled('span', {
  py: '$0_5',
  px: '$1_5',
  backgroundColor: '$lavenderLight',
  color: '$primary',
  borderRadius: '$pill',
  type: 'overline',
  lh: '1.4',

  '> div': {
    position: 'relative',
    top: 1,
  },
})

const $Icon = styled('div', {
  d: 'flex',
  ai: 'flex-start',
  jc: 'center',
  flex: '0 0 24px',
  w: '24px',
  h: '24px',
  color: '$text',
})

const NavItem = ({ data }) => {
  const updateImageData = useCarouselStore((state) => state.updateImageData)
  const setNavOpen = useNavStore((state) => state.setNavOpen)
  const setTimeoutId = useCarouselStore((state) => state.setTimeoutId)
  const timeoutId = useCarouselStore((state) => state.timeoutId)
  const clearTimeoutId = useCarouselStore((state) => state.clearTimeoutId)
  const setIsTimerActive = useCarouselStore((state) => state.setIsTimerActive)
  const { links, secondaryText, icon, pillContent, templateImage } = data || {}
  const { label, ...link } = links?.[0] || {}

  const handleMouseEnter = () => {
    if (templateImage) {
      updateImageData(templateImage)
    }
    if (timeoutId) {
      clearTimeout(timeoutId)
      clearTimeoutId()
    }
  }

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsTimerActive(true)
    }, 2000)
    setTimeoutId(id)
  }

  if (!link.condition) return null

  return (
    <$NavItem
      onMouseEnter={handleMouseEnter}
      onClick={() => setNavOpen(false)}
      onMouseLeave={handleMouseLeave}
    >
      <Link css={{ ai: 'flex-start', gcg: '$2' }} {...link}>
        {icon && (
          <$Icon>
            <Image image={icon} />
          </$Icon>
        )}
        <$NavItemContents>
          {label && (
            <$NavItemHeading>
              <$NavItemHeadingLabel>{label}</$NavItemHeadingLabel>
              {pillContent && (
                <$Pill>
                  <div>{pillContent}</div>
                </$Pill>
              )}
            </$NavItemHeading>
          )}
          <$SecondaryText>{secondaryText}</$SecondaryText>
        </$NavItemContents>
      </Link>
    </$NavItem>
  )
}

export default NavItem
