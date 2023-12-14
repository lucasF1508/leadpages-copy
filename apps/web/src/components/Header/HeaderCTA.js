import Link from '@components/Link'
import { styled } from '@design'
import {
  SignUpButton,
  StartPageTrialOutboundLink,
  StyledButtonLink,
  StartPageTrialScrollingLink,
  signUpButtonStyles,
} from './HeaderComponents'

const $Link = styled(Link, { ...signUpButtonStyles, boxSizing: 'border-box' })

const Button = ({ isSticky }) => (
  <SignUpButton className={isSticky ? 'button-scrolled' : 'start-page-header'}>
    Try it Free
  </SignUpButton>
)

const RenderStartPageHeader = ({ isSticky, scrollTarget }) => (
  <>
    {scrollTarget ? (
      <StartPageTrialScrollingLink
        to={scrollTarget}
        smooth
        duration={500}
        offset={-15}
        aria-label="Try Start Plan Free"
        data-gtm="mobile-menu-link"
      >
        <Button isSticky={isSticky} />
      </StartPageTrialScrollingLink>
    ) : (
      <StartPageTrialOutboundLink
        href="https://my.leadpages.com/order-leadpages/12LcHxUf6q14/t/d3yy2ARDnfEVTPU7"
        aria-label="Try Start Plan Free"
        data-gtm="mobile-menu-link"
      >
        <Button isSticky={isSticky} />
      </StartPageTrialOutboundLink>
    )}
  </>
)

const RenderDefaultHeader = ({ isSticky, simplifiedHeader }) => (
  <StyledButtonLink
    condition="internal"
    url="/pricing"
    aria-label="Start Free Trial"
    data-gtm="mobile-menu-link"
  >
    <SignUpButton
      className={isSticky ? 'button-scrolled' : ''}
      css={
        simplifiedHeader
          ? { '@media (max-width: 576px)': { display: 'inline-block' } }
          : {}
      }
    >
      Start Free Trial
    </SignUpButton>
  </StyledButtonLink>
)

const HeaderCTA = ({
  hideSignUpButton,
  simplifiedHeader,
  isStartPageHeader,
  scrollTarget,
  isSticky,
  link,
  customCtaLink,
}) => {
  if (hideSignUpButton) return null

  const headerType =
    // eslint-disable-next-line no-nested-ternary
    link &&
    customCtaLink &&
    (link?.url ||
      ['modal', 'video', 'leadpagesTrigger'].includes(link?.condition))
      ? 'link'
      : isStartPageHeader
      ? 'startPage'
      : 'default'

  switch (headerType) {
    case 'link':
      return <$Link {...link} />
    case 'startPage':
      return (
        <RenderStartPageHeader
          isSticky={isSticky}
          scrollTarget={scrollTarget}
        />
      )
    case 'default':
      return (
        <RenderDefaultHeader
          isSticky={isSticky}
          simplifiedHeader={simplifiedHeader}
        />
      )
    default:
      return null
  }
}

export default HeaderCTA
