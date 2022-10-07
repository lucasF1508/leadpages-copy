import { React, useEffect, useState } from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@design'
// components
import NeedAccountHelpRow from '@legacy/components/resources/NeedAccountHelpRow'
import BlogSection from '@legacy/components/resources/BlogSection'
import CustomerStoriesRotator from '@components/Rotator/CustomerStoriesRotator'
import DownloadableResources from '@legacy/components/resources/DownloadableResources'
import LeadGeneration from '@legacy/components/resources/LeadGeneration'
import MarketingGuides from '@legacy/components/resources/MarketingGuides'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import ResourcesHeader from '@legacy/components/headers/ResourcesHeader'
import SEO from '@legacy/components/SEO'
import SpacerRow from '@legacy/components/SpacerRow'
import WebinarsContainer from '@legacy/components/resources/WebinarsContainer'
// constants
import { HEADER_HEIGHT } from '@legacy/constants'
// images
import arrowDownSVG from '@legacy/assets/images/global/arrow_down_large.svg'
import arrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'
import closeXSVG from '@legacy/assets/images/global/x_close.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '$white',
})

const DesktopMenu_Container = styled('div', {
  zIndex: 49,
  position: 'sticky',
  display: 'none',
  top: `${HEADER_HEIGHT}px`,
  width: '100%',
  height: '40px',
  background: '$white',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '@>m': {
    '&.desktop-menu-scrolled': {
      display: 'block',
      transition: 'all 0s',
    },
  },
})

const DesktopMenu_LinkContainer = styled('div', {
  position: 'relative',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '8px',
  paddingBottom: '0.5rem',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  transition: '0s',

  '@media (max-width: 778px)': {
    display: 'none',
  },
})

const DesktopMenu_ScrollLink = styled(ScrollLink, {
  opacity: 0.5,
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingBottom: '8px',
  marginLeft: '8px',
  marginRight: '8px',
  borderBottom: '3px solid transparent',
  color: 'inherit',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  letterSpacing: '-0.1px',
  whiteSpace: 'nowrap',
  transition: '0s',

  '&:hover': {
    borderBottom: '3px solid $colors$primary',
    opacity: 1,
    color: '$primary',
    cursor: 'pointer',
  },

  '&.active-resource': {
    borderBottom: '3px solid $colors$primary',
    opacity: 1,
    color: '$primary',
    cursor: 'pointer',
  },
})

const MobileMenu_Container = styled('div', {
  zIndex: 100,
  position: 'fixed',
  display: 'none',
  top: `${HEADER_HEIGHT}px`,
  width: '100%',
  height: '72px',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '@<m': {
    '&.mobile-menu-scrolled': {
      display: 'block',
      transition: 'all 0.3s ease',
    },
  },
})

const MobileMenu_Header = styled('div', {
  zIndex: 5,
  marginTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
  color: '$textAlt',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const MobileMenu_SectionContainer = styled('div', {
  position: 'absolute',
  width: '200px',
  background: '$white',
})

const MobileMenu_SectionTitle = styled('div', {
  color: '$text',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const MobileMenu_ScrollLink = styled(ScrollLink, {
  zIndex: 101,
  display: 'none',

  '&.activeSection': {
    display: 'block',
    transition: 'all 0.3s ease',
  },
})

const Icon_ArrowDown = styled('img', {
  position: 'absolute',
  right: '24px',
  width: '16px',
  height: '16px',
  marginTop: '4px',
  cursor: 'pointer',
})

const MobileMenu_Submenu = styled('div', {
  zIndex: 1501,
  position: 'fixed',
  top: `${HEADER_HEIGHT}px`,
  width: '100%',
  height: '100%',
})

const Submenu_Header = styled('div', {
  width: '100%',
  height: '72px',
  background: '$white',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
})

const Submenu_HeaderFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
})

const Submenu_HeaderTitle = styled('div', {
  color: '$text',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
})

const Icon_CloseX = styled('img', {
  alignSelf: 'center',
  width: '16px',
  height: '16px',
  cursor: 'pointer',
})

const Submenu_LinkContainer = styled('div', {
  width: '100%',
  padding: '1rem 2.5rem 0rem',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
})

const Submenu_Link = styled('div', {
  paddingBottom: '16px',
  color: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  letterSpacing: '0px',
})

const Submenu_ScrollLink = styled(ScrollLink, {
  '&.active-link': {
    color: '$primary',
    textDecoration: 'none',
  },
})

const Submenu_LinkTitle = styled('div', {
  color: '$textAlt',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
  },
})

const SectionHeader = styled('div', {
  width: '100%',
  maxWidth: '1140px',
  paddingTop: '120px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '4rem',

  '@media (max-width: 599px)': {
    paddingTop: '4rem',
  },
})
const HeadingFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '35px',
  paddingLeft: '3rem',
  paddingRight: '3rem',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '@>m': {
    paddingLeft: '6rem',
    paddingRight: '6rem',
    marginBottom: '48px',
  },

  '@<m': {
    display: 'block',
    marginBottom: '24px',
    textAlign: 'center',
  },
})
const CustomersHeading = styled('div', {
  fontFamily: 'Value Serif',
  color: '$text',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',

  '@<m': {
    marginBottom: '27px',
  },
})
const CustomersSubHeading = styled('div', {
  marginTop: '24px',
  color: '$textAlt',
  fontSize: '18px',
  lineHeight: '28px',

  '@<m': {
    display: 'none',
  },
})
const HeadingLink = styled('a', {
  color: '$primary',
  textDecoration: 'none',
})

const Icon_ArrowRight = styled('img', {
  width: '20px',
  height: '10px',
  marginTop: 'auto',
  marginBottom: 'auto',
})

const HeadingButton = styled('button', {
  alignSelf: 'flex-end',
  width: '222px',
  height: '48px',
  paddingLeft: '2%',
  paddingRight: '2%',
  backgroundColor: '$white',
  border: '3px solid $colors$secondary',
  borderRadius: '48px',
  color: '$primary',
  fontFamily: '$base',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@media (max-width: 340px)': {
    alignSelf: 'center',
    width: '209px',
    fontSize: '16px',
  },

  '&:hover': {
    backgroundColor: '$primary',
    border: '3px solid $colors$primary',
    color: '$white',
    cursor: 'pointer',
  },

  [`&:hover ${HeadingLink}`]: {
    color: '$white',
  },

  [`&:hover ${Icon_ArrowRight}`]: {
    WebkitFilter: 'brightness(0) invert(1)',
    filter: 'brightness(0) invert(1)',
  },
})

const sectionLinksArray = [
  {
    displayName: 'Blog',
    anchor: 'blog',
  },
  {
    displayName: 'Guides',
    anchor: 'guides',
  },
  {
    displayName: 'Webinars',
    anchor: 'webinars',
  },
  {
    displayName: 'Downloads',
    anchor: 'downloads',
  },
  {
    displayName: 'Podcast',
    anchor: 'podcast',
  },
  {
    displayName: 'Customer Stories',
    anchor: 'customerstories',
  },
]

const MarketingResourcesPage = () => {
  const [isMenuScrolled, setIsMenuScrolled] = useState(false)
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false)

  const toggleShowSubmenu = () => {
    setShowMobileSubmenu(!showMobileSubmenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (typeof document !== 'undefined') {
        const firstSection = document
          .getElementById('blogsection')
          .getBoundingClientRect()
        const siteHeader = document
          .getElementById('siteheader')
          .getBoundingClientRect()
        const containerEnd = document
          .getElementById('spacer')
          .getBoundingClientRect()
        if (
          siteHeader.bottom > firstSection.top &&
          siteHeader.bottom < containerEnd.top
        ) {
          setIsMenuScrolled(true)
        } else {
          setIsMenuScrolled(false)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <SEO
        pathname="/marketing-resources"
        title="Free Digital Marketing Resources from Leadpages"
        description="Want to stay in the know on all things about digital marketing? Get full access to free webinars, ebooks, guides, and podcasts brought to you by Leadpages."
        image="https://static.leadpages.com/images/og/og-customers.jpg"
      />
      <OuterContainer>
        {/* Desktop & Mobile Menus */}
        <DesktopMenu_Container
          id="desktopmenu"
          className={isMenuScrolled ? 'desktop-menu-scrolled' : ''}
        >
          <DesktopMenu_LinkContainer>
            {sectionLinksArray.map((section, index) => (
              <DesktopMenu_ScrollLink
                key={index}
                activeClass="active-resource"
                to={section.anchor}
                spy
                smooth
                duration={500}
              >
                {section.displayName}
              </DesktopMenu_ScrollLink>
            ))}
          </DesktopMenu_LinkContainer>
        </DesktopMenu_Container>
        <MobileMenu_Container
          id="mobilemenu"
          className={isMenuScrolled ? 'mobile-menu-scrolled' : ''}
          onClick={toggleShowSubmenu}
        >
          <MobileMenu_Header>
            <MobileMenu_SectionContainer>
              <MobileMenu_SectionTitle>Resources</MobileMenu_SectionTitle>
            </MobileMenu_SectionContainer>
            {sectionLinksArray.map((section, index) => (
              <MobileMenu_SectionContainer key={index}>
                <MobileMenu_ScrollLink
                  activeClass="activeSection"
                  to={section.anchor}
                  spy
                  smooth
                  duration={500}
                >
                  <MobileMenu_SectionTitle>
                    {section.displayName}
                  </MobileMenu_SectionTitle>
                </MobileMenu_ScrollLink>
              </MobileMenu_SectionContainer>
            ))}
            <Icon_ArrowDown src={arrowDownSVG.src} alt="down arrow" />
          </MobileMenu_Header>
          {showMobileSubmenu && (
            <MobileMenu_Submenu>
              <Submenu_Header>
                <Submenu_HeaderFlexbox>
                  <Submenu_HeaderTitle>Jump to a Section:</Submenu_HeaderTitle>
                  <Icon_CloseX
                    src={closeXSVG}
                    alt="close x"
                    onClick={toggleShowSubmenu}
                  />
                </Submenu_HeaderFlexbox>
              </Submenu_Header>
              <Submenu_LinkContainer>
                {sectionLinksArray.map((section, index) => (
                  <Submenu_Link key={index}>
                    <Submenu_ScrollLink
                      activeClass="active-link"
                      to={section.anchor}
                      spy
                      smooth
                      duration={500}
                      onClick={toggleShowSubmenu}
                    >
                      <Submenu_LinkTitle>
                        {section.displayName}
                      </Submenu_LinkTitle>
                    </Submenu_ScrollLink>
                  </Submenu_Link>
                ))}
              </Submenu_LinkContainer>
            </MobileMenu_Submenu>
          )}
        </MobileMenu_Container>
        {/* Page Sections */}
        <ResourcesHeader />
        <BlogSection />
        <NeedAccountHelpRow />
        <MarketingGuides />
        <WebinarsContainer />
        <DownloadableResources />
        <LeadGeneration />
        <SectionHeader name="customerstories">
          <HeadingFlexbox>
            <div>
              <CustomersHeading>Our Customers</CustomersHeading>
              <CustomersSubHeading>
                Be inspired by someone like you. Discover how our customers grew
                their businesses.
              </CustomersSubHeading>
            </div>
            <HeadingButton>
              <Link href="/customers" passHref>
                <HeadingLink alt="customers">
                  All Customer Stories&nbsp;
                  <Icon_ArrowRight src={arrowRightSVG.src} alt="right arrow" />
                </HeadingLink>
              </Link>
            </HeadingButton>
          </HeadingFlexbox>
        </SectionHeader>
        <CustomerStoriesRotator />
        <SpacerRow id="spacer" size="small" />
        <ReadyToGrow />
      </OuterContainer>
    </>
  )
}

export default MarketingResourcesPage
