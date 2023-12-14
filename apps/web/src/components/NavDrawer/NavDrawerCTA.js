import { styled } from '@design'
import Link from '@components/Link'
import { Link as ScrollLink } from 'react-scroll'

const mobileMenuSignUpButtonStyles = {
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
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $primary',
  },
}

const $Link = styled(Link, {
  ...mobileMenuSignUpButtonStyles,
  boxSizing: 'border-box',
  marginRight: '16px',
})

const MobileMenuSignUpButton = styled('button', mobileMenuSignUpButtonStyles)

const ScrollingButtonLink = styled(ScrollLink, {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: 'inherit',
  paddingBottom: '0.5rem',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  letterSpacing: '-0.1px',
  lineHeight: '20px',

  '&:hover': {
    cursor: 'pointer',
  },
})

const StyledButtonLink = styled(Link, {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: 'inherit',
  paddingBottom: '0.5rem',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  letterSpacing: '-0.1px',
  lineHeight: '20px',
  display: 'inline',

  '&:hover': {
    cursor: 'pointer',
  },
})

const RenderStartPageButtonLink = ({ scrollTarget, buttonText }) => (
  <ScrollingButtonLink
    to={scrollTarget}
    smooth
    duration={500}
    offset={-15}
    aria-label={buttonText}
    data-gtm="mobile-menu-link"
  >
    <MobileMenuSignUpButton>{buttonText}</MobileMenuSignUpButton>
  </ScrollingButtonLink>
)

const RenderDefaultButtonLink = ({ buttonText }) => (
  <StyledButtonLink
    condition="internal"
    url="/pricing"
    aria-label={buttonText}
    data-gtm="mobile-menu-link"
  >
    <MobileMenuSignUpButton>{buttonText}</MobileMenuSignUpButton>
  </StyledButtonLink>
)

const NavDrawerCTA = ({
  scrollTarget,
  isStartPageHeader,
  hideSignUpButton,
  link,
  customCtaLink,
}) => {
  if (hideSignUpButton) return null

  const buttonText = isStartPageHeader ? 'Try it Free' : 'Start Free Trial'

  const headerType =
    // eslint-disable-next-line no-nested-ternary
    link &&
    customCtaLink &&
    (link?.url ||
      ['modal', 'video', 'leadpagesTrigger'].includes(link?.condition))
      ? 'link'
      : scrollTarget
      ? 'startPage'
      : 'default'

  switch (headerType) {
    case 'link':
      return <$Link {...link} />
    case 'startPage':
      return (
        <RenderStartPageButtonLink
          scrollTarget={scrollTarget}
          buttonText={buttonText}
        />
      )
    case 'default':
    default:
      return <RenderDefaultButtonLink buttonText={buttonText} />
  }
}

export default NavDrawerCTA
