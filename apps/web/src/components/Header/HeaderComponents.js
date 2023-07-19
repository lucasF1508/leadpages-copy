import { Link as ScrollLink } from 'react-scroll'
import Link from '@components/Link'
import { styled, darkTheme } from '@design'
import { m as motion } from 'framer-motion'

const mainNavStyles = {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: '$textAlt',
  marginRight: '1.5rem',
  fontFamily: `'Apercu Pro'`,
  fontSize: '0.875rem',
  letterSpacing: '-0.1px',
  lineHeight: '20px',
  borderBottom: '3px solid transparent',
  display: 'inline-flex',
  pb: '4px',
  pt: '7px',

  '.active': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    letterSpacing: '-0.1px',
    fontSize: '0.875rem',
  },

  '&:hover': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    cursor: 'pointer',
  },
}

const subMenuLinkStyles = {
  textDecoration: 'none',
  fontFamily: `'Apercu Pro'`,
  fontSize: '0.875rem',
  lineHeight: '20px',
  paddingBottom: '0.5rem',
  color: '$textAlt',
  borderBottom: '3px solid transparent',
  display: 'inline',
  letterSpacing: '-0.1px',

  '.active': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    marginRight: '1rem',
  },

  '.active-main-menu': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    marginRight: '1rem',
  },

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
    borderBottom: '3px solid $colors$primary',
  },
}

export const HeaderContainer = styled('header', {
  position: 'sticky',
  top: '0px',
  left: '0px',
  background: 'transparent',
  z: 1501,
  height: `$headerHeight$s`,
  boxSizing: 'border-box',
  px: '$3',

  '@>m': {
    box: [{ property: 'px' }],
  },

  '&:hover': {
    background: '$white',
  },

  '&.scrolled': {
    background: '$white',
    zIndex: 1501,
    borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

    '&:hover': {
      background: '$white !important',
    },
  },

  variants: {
    underlaidMenu: {
      true: {
        z: 50,
        '&:hover': {
          background: 'none',
        },
      },
    },
    isStartPageHeader: {
      true: {
        '&:hover': {
          background: 'none',
        },
      },
    },
    darkHero: {
      true: {
        '&:hover': {
          background: 'none',
        },
      },
    },
  },
})

export const DesktopMenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: '48px',
  paddingTop: '$1_5',
  paddingBottom: '$1_5',
  position: 'relative',
  maxWidth: '$extended',
  margin: 'auto',

  '*': {
    '.active': {
      color: '$primary',
      borderBottom: '3px solid $colors$primary',
      textDecoration: 'none',
      marginRight: '16px',
      letterSpacing: '-0.1px',
      fontSize: '0.875rem',
    },
  },
})

export const MenuContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  '&.start-page-header': {
    '@media (max-width: 577px)': {
      padding: '0 !important',
      margin: '0 !important',
      width: '100%',
    },
  },
})

export const LoginSignUpContainer = styled('div', {
  height: '48px',
  display: 'flex',
  alignItems: 'center',

  '&.start-page-header': {
    '@media (max-width: 577px)': {
      display: 'none',
    },
    paddingRight: '0.5rem',
  },
})

export const LoginContainer = styled('div', {
  display: 'inline-block',

  '&.no-login': {
    display: 'none',
  },
})

export const SignUpContainer = styled('div', {
  display: 'inline-block',
  marginRight: '0px',
})

export const PricesWatchDemoContainer = styled('div', {
  paddingRight: '1.5rem',
  height: '48px',
})

export const WatchDemoContainer = styled('div', {
  display: 'inline-block',
})

export const LinksContainer = styled('div', {
  display: 'inline-flex',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '3rem',
  paddingRight: '0.25rem',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s ease',

  '@<navigationDesktopAlt': {
    display: 'none',
  },
})

export const StyledButtonLink = styled(Link, {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: '$text',
  paddingBottom: '0.5rem',
  fontFamily: `'Apercu Pro'`,
  fontSize: '0.875rem',
  letterSpacing: '-0.1px',
  lineHeight: '20px',
  display: 'inline',

  '&:hover': {
    cursor: 'pointer',
  },
})

export const OutboundButtonLink = styled('a', {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: '$text',
  paddingBottom: '0.5rem',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '0.875rem',
  letterSpacing: '-0.1px',
  lineHeight: '20px',

  '&:hover': {
    cursor: 'pointer',
  },
})

export const StyledMainNav = styled('span', {
  ...mainNavStyles,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.25rem',
})

export const StyledLink = styled(Link, mainNavStyles)

export const OutboundLink = styled('a', {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: '$textAlt',
  paddingBottom: '6px',
  paddingTop: '6px',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '0.875rem',
  letterSpacing: '-0.1px',
  lineHeight: '20px',
  borderBottom: '3px solid transparent',
  display: 'inline',

  '&:hover': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    cursor: 'pointer',
  },
})

export const StartPageTrialOutboundLink = styled(OutboundLink, {
  '&:hover': {
    borderBottom: '3px solid transparent',
  },

  marginRight: '0px',
})

export const StartPageTrialScrollingLink = styled(ScrollLink, {
  '&:hover': {
    borderBottom: '3px solid transparent',
  },
})

export const StartPageLoginOutboundLink = styled(OutboundLink, {
  color: '$white',

  '&:hover': {
    color: '$white',
    borderBottom: '3px solid white',
  },

  '&.button-scrolled': {
    color: '$black',

    '&:hover': {
      color: '$primary',
      borderBottom: '3px solid $colors$primary',
    },
  },
})

export const SignUpButton = styled('button', {
  height: '48px',
  width: '144px',
  color: '$primary',
  background: 'transparent',
  border: '3px solid $colors$secondary',
  borderRadius: '24px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '&:hover': {
    bc: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  '@media (max-width: 576px)': {
    display: 'none',
  },

  '&.start-page-header': {
    border: '3px solid rgba(255, 255, 255, 0.7)',
    color: 'white',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: 'white !important',
      color: '$primary !important',
      border: '3px solid white !important',
      boxShadow: `0 10px 10px 0 rgba(0, 0, 0, 0.26),
        0 14px 28px 0 rgba(0, 0, 0, 0.25) !important`,
    },

    '&.button-scrolled': {
      height: '48px',
    },
  },
})

export const WatchDemoButton = styled('button', {
  height: '48px',
  width: '144px',
  color: '$primary',
  background: 'transparent',
  border: '3px solid $colors$secondary',
  borderRadius: '24px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '&:hover': {
    bc: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  '@media (max-width: 568px)': {
    display: 'none',
  },
})

export const FullLogoContainer = styled('img', {
  width: '146px',
  height: '24px',
  position: 'relative',
  display: 'block',
  transition: 'left 0.3s ease',

  '@media (max-width: 576px)': {
    display: 'none',
  },

  '&:hover': {
    WebkitFilter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
    filter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
  },

  '&.hide-logo': {
    display: 'none',
  },

  '&.show-logo': {
    display: 'block',
  },

  [`.${darkTheme} &`]: {
    filter: `invert(100%) sepia(98%) saturate(8%) hue-rotate(200deg)
      brightness(103%) contrast(100%)`,
  },

  '&.start-page-header': {
    filter: `invert(100%) sepia(98%) saturate(8%) hue-rotate(200deg)
      brightness(103%) contrast(100%)`,
    top: '0px !important',
    display: 'block',
  },

  '&.start-page-header-scrolled': {
    filter: 'brightness(0) saturate(100%)',
    display: 'block',
    top: '0px !important',

    '&:hover': {
      filter: `invert(18%) sepia(84%) saturate(3862%) hue-rotate(248deg)
        brightness(110%) contrast(101%)`,
    },
  },
})

export const LogoIconContainer = styled('img', {
  width: '33px',
  height: '24px',
  position: 'relative',
  display: 'block',
  transition: 'left 0.3s ease',

  '&.hide-logo': {
    display: 'none',
  },

  [`.${darkTheme} &`]: {
    filter: `invert(100%) sepia(98%) saturate(8%) hue-rotate(200deg)
      brightness(103%) contrast(100%)`,
  },

  '&:hover': {
    WebkitFilter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
    filter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
  },

  '&.show-logo': {
    display: 'block',
  },

  '&.start-page-header': {
    display: 'none',
  },

  '&.start-page-header-scrolled': {
    display: 'none',
  },
})

export const HeaderSubMenu = styled('div', {
  position: 'relative',
  width: '100%',
  mt: '$3_5',
})

export const SubMenuContainer = styled('div', {
  background: '$dropdown',
  boxShadow: `0px 10px 20px 0px rgba(15, 12, 9, 0.08), 0px 12px 32px 0px rgba(15, 12, 9, 0.12)`,
  zIndex: 200,
})

export const DesktopSubMenuTextContainer = styled('div', {
  padding: '$1_5 1.125rem',
})

export const SubMenuItem = styled('div', {
  paddingBottom: '0.25rem',
  paddingTop: '0.25rem',
})

export const SubMenuList = styled('ul', {
  paddingBottom: '0.5rem',
  paddingLeft: '18px',
})

export const SubMenuListItem = styled('li', {
  '&::marker': {
    color: '$black',
  },
})

export const DropDownOuter = styled(motion.div, {
  position: 'absolute',
  zIndex: 100,
  left: '-0.5rem',
})

export const LinkContainer = styled('div', {})

export const PlatformSubMenuLink = styled(Link, subMenuLinkStyles)
